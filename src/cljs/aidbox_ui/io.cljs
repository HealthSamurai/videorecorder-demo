(ns aidbox-io.io
  (:require-macros [cljs.core.async.macros :as m :refer [go alt!]])
  (:require [cljs-http.client :as http]
            [re-frame.core :as rf]))

(defn default-params [opts & [over]]
  (merge {:headers {"accept" "application/json"}
          :json-params (:data opts)}
         over
         opts))

(defn wrap-request-no-decode [request]
  (-> request
     http/wrap-accept
     http/wrap-json-params
     http/wrap-content-type
     http/wrap-query-params
     http/wrap-method
     http/wrap-url))

(def request-no-decode
  (wrap-request-no-decode cljs-http.core/request))

(defn xhr [{body :data token :token :as opts}]
  (println "xhr" opts)
  (let [opts (default-params  opts {:body (when body (.stringify js/JSON (clj->js body)))
                                    :headers {"Authorization" (str "Bearer " token)}
                                    :query-params (merge (or (:query-params opts) {})
                                                         (or (:params opts) {}))})]
    (http/request opts)))

(rf/reg-fx
 ::xhr
 (fn [opts]
   (go (let [result (<! (xhr opts))]
         (if (:success result)
           (when-let [se (:on-success opts)]
             (rf/dispatch [(:event se) (assoc se :result (get-in result [:body]))]))))))) 
