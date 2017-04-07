(ns heartsmart.backend
  (:gen-class)
  (:require [org.httpkit.server :as server]
            [ring.util.codec]
            [ring.middleware.defaults :as ring]
            [environ.core :as env]
            [ring.util.response :as response]
            [hiccup.core :as hiccup]
            [cheshire.core :as json]
            [route-map.core :as route-map]
            [clojure.java.shell :as shell]
            [ring.middleware.resource :as static]
            [clojure.string :as str]
            [ring.middleware.head :as head]
            [clojure.java.io :as io]))

(def upload-folder
  (or (env/env :upload-dir) "/tmp"))

(defn index [req]
  {:body (hiccup/html
          [:html
           [:body
            [:style "body {padding: 20px;}"]
            [:h3 "Videos"]
            [:form {:enctype "multipart/form-data"
                    :method "post"
                    :action "/videos"}
             [:input {:type "text" :name "name"}]
             [:input {:type "file" :name "file"}]
             [:input {:type "submit" :value "Upload"}]]]])
   :headers {"Content-Type" "text/html"}
   :status 200})

(defn upload [req]
  (let [tmp-path (.getPath (get-in req [:params :file :tempfile]))
        ext (-> (get-in req [:params :file :filename])
                (str/split #"\.")
                (last))
        file-name (str (get-in req [:params :name]) "." ext)
        conv-file-name (str (get-in req [:params :name]) "." "avi")
        status (shell/sh "mv" tmp-path (str upload-folder "/" file-name))
        convert-status (shell/sh
                        "ffmpeg" "-i"
                        (str upload-folder "/" file-name)
                        "-an" "-vcodec" "rawvideo" "-y"
                        (str upload-folder "/" conv-file-name))]
    {:body    (json/generate-string
               {:file file-name
                :avi conv-file-name
                :file-status status
                :conversion-status convert-status})
     :headers {"Content-Type" "text/html"}
     :status  200}))

(defn show [{{id :id} :params :as req}]
  (->
   (.toURL (.toURI (io/file (str upload-folder "/" id))))
   (response/url-response )
   (head/head-response req)))

(defn videos [req]
  (let [files (file-seq (io/file upload-folder))]
    {:body (json/generate-string
            (mapv (fn [x] {:name (.getName x)
                           :url  (str "/videos/" (.getName x))}) files))
     :headers {"Content-Type" "application/json"}
     :status 200}))

(def routes
  {:GET #'index 
   "videos" {:POST #'upload
             :GET #'videos
             [:id] {:GET #'show}}})

(defonce srv (atom nil))

(defn dispatch [{uri :uri meth :request-method :as req}]
  (if-let [route (route-map/match [meth uri] routes)]
    ((:match route) (assoc req :params (merge (:params req) (:params route))))
    {:body (str "Not found " meth " " uri)}))

(def app
  (-> dispatch
      (ring/wrap-defaults (assoc-in ring/api-defaults [:params :multipart] true))))

(defn start []
  (when-let [s @srv] (s))
  (reset! srv
          (server/run-server #'app {:port (Integer/parseInt (or (env/env :port) 8087))
                             :max-body 1000000000})))

(defn -main [& args]
  (start))

(comment
  (start)
  )

