(ns heartsmart.backend

  (:gen-class)
  (:require [org.httpkit.server :as server]
            [ring.util.codec]
            [ring.middleware.defaults :as ring]
            [route-map.core :as route-map]))

(defn index [req]
  {:body (pr-str req)
   :status 200})

(defn upload [req]
  {:body (pr-str req)
   :status 200})

(defn show [req]
  {:body (pr-str req)
   :status 200})

(def routes
  {:GET #'index 
   "upload" {:POS #'upload}
   "video" {[:id] {:GET #'show}}})

(defonce srv (atom nil))


(defn dispatch [{uri :uri meth :request-method :as req}]
  (if-let [route (route-map/match [meth uri] routes)]
    ((:match route) (assoc req :params (merge (:params req) (:params route))))
    {:body (str "Not found " meth " " uri)}))

(def app
  (ring/wrap-defaults dispatch ring/site-defaults))

(defn start []
  (when-let [s @srv] (s))
  (server/run-server #'app {:port 8087}))

(defn -main [& args]
  (start))

