(ns media-fx.core
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.pages.page :as page]))

(rf/reg-fx
 ::devices
 (fn [opts]
   (-> (.-mediaDevices js/navigator )
       (.enumerateDevices)
       (.then (fn [devices]
                (rf/dispatch [::devices-avaliable
                              (mapv (fn [d]
                                      {:object d
                                       :id (.-deviceId d)
                                       :group (.-groupId d)
                                       :kind (.-kind d)
                                       :label (.-label d)})
                                    devices)]))))
   opts))


(rf/reg-fx
 ::getUserMedia
 (fn [constr]
   (let [c  (clj->js constr)]
     (.getUserMedia js/navigator
                    c
                    (fn [stream]
                      (rf/dispatch [::UserMedia {:stream stream
                                                 :constraints constr}]))
                    (fn [err]
                      (rf/dispatch [::UserMediaError {:error err}]))))))

(rf/reg-fx
 ::getUserMedia
 (fn [constr]
   (let [c  (clj->js constr)]
     (.getUserMedia js/navigator
                    c
                    (fn [stream]
                      (rf/dispatch [::UserMedia {:stream stream
                                                 :constraints constr}]))
                    (fn [err]
                      (rf/dispatch [::UserMediaError {:error err}]))))))

(defn video
  [& [props]]
  (let [element-id (str "video" (gensym))]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [argv (aget (aget this "props") "argv")
              [_ doc ks options] argv
              root (.getElementById js/document element-id)]))

      :component-will-receive-props
      (fn [this new-argv]
        (let [element (.getElementById js/document element-id)
              video-tag (aget (.getElementsByTagName element "video") 0)
              [_ props & _] new-argv]
          (aset video-tag "srcObject" (:stream props))
          (aset  video-tag "onloadedmetadata" (fn [e] (.play video-tag)))))

      :component-will-mount
      (fn [& args] )

      :reagent-render
      (fn [props]
        [:div.media-video {:id element-id}
         [:style ".media-video video {border: 1px solid #ddd;}"]
         [:video (dissoc props :stream)]])})))
