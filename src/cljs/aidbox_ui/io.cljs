(ns aidbox-io.io
  #_(:require-macros [cljs.core.async.macros :as m :refer [go alt!]])
  #_(:require [cljs-http.client :as http]
            [re-frame.core :as rf]))

(defn default-params [opts & [over]]
  #_(merge {:headers {"accept" "application/json"}
          :json-params (:data opts)}
         over
         opts))

(defn wrap-request-no-decode [request]
  #_(-> request
     http/wrap-accept
     http/wrap-json-params
     http/wrap-content-type
     http/wrap-query-params
     http/wrap-method
     http/wrap-url))

(def request-no-decode
  #_(wrap-request-no-decode cljs-http.core/request))

(defn xhr [{body :data token :token :as opts}]
  #_(println "xhr" opts)
  #_(let [opts (default-params  opts {:body (when body (.stringify js/JSON (clj->js body)))
                                    :headers {"Authorization" (str "Bearer " token)}
                                    :query-params (merge (or (:query-params opts) {})
                                                         (or (:params opts) {}))})]
    (http/request opts)))

#_(rf/reg-fx
 ::xhr
 (fn [opts]
   (go (let [result (<! (xhr opts))]
         (if (:success result)
           (when-let [se (:on-success opts)]
             (rf/dispatch [(:event se) (assoc se :result (get-in result [:body]))]))))))) 
