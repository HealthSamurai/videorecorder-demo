(ns aidbox-ui.fxs
  (:require [re-frame.core :as rf]
            [clojure.browser.net :as net]
            [clojure.string :as str]
            [clojure.walk :refer [keywordize-keys]])
  (:import goog.net.EventType))

(defn- params-to-query-string [params]
  (str/join "&" (for [[k v] params] (str (name k) "=" (js/encodeURIComponent v)))))

(defn- get-response [xhr]
  (let [headers (js->clj (.getResponseHeaders xhr))
        body (.getResponse xhr)
        body (if (>= (.indexOf (get headers "Content-Type" "") "application/json") 0)
               (keywordize-keys (js->clj (.parse js/JSON body)))
               body)]
    {:body body
     :status (.getStatus xhr)
     :status-text (.getStatusText xhr)
     :headers headers}))


(defn page-redirect [url]
  (set! (.-href (.-location js/window)) url))

(rf/reg-fx
 ::page-redirect
 (fn [opts]
   (println "REDIRECT" opts)
   (page-redirect (str (:uri opts)
                       (when-let [params (:params opts)]
                         (->> params
                              (map (fn [[k v]] (str (name k) "=" (js/encodeURIComponent v))))
                              (str/join "&")
                              (str "?")))))))

(rf/reg-fx
 :http
 (fn [{:keys [url host method body headers params
              on-error on-success spinner-id] :as http}]
   (let [xhr (net/xhr-connection)
         url (if (empty? params) url
                 (str url "?" (params-to-query-string params)))]

     (.log js/console "%cHTTP" "background-color: #317cd5; color: #fff; padding: 2px;"
           http)

     (when spinner-id (rf/dispatch [:spinner/show spinner-id]))

     (.listen xhr EventType.COMPLETE
              (fn [e]
                (when spinner-id (rf/dispatch [:spinner/hide spinner-id]))

                (let [response (get-response xhr)]
                  (rf/dispatch (if (.isSuccess xhr)
                                 (conj on-success
                                       (merge response
                                              {:success true}))

                                 (conj on-error
                                       (merge response
                                              {:success false
                                               :error (.getLastError xhr)
                                               :error-code (.getLastErrorCode xhr)})))))))

     (js/setTimeout #(net/transmit xhr url method body headers) 2000))))
