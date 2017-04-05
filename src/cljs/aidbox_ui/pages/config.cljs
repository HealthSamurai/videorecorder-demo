(ns  aidbox-ui.pages.config
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.pages.page :as page]))

(defonce video-stream (atom nil))
(defonce recorder (atom nil))
(defonce state (r/atom {}))

(defonce chunks (r/atom #js[]))
(defonce videos (r/atom []))

(defn do-start-recording [stream]
  (let [id (name (gensym))
        rec (js/MediaRecorder. stream)]
    (doseq [ev ["onstop" "onstart" "onpause" "onresume" "onerror" "onwarning"]]
      (aset rec ev (fn [& args] (.log js/console ev id args))))

    (swap! state assoc :phase :in-progress)
    (reset! chunks #js[])
    (aset rec "ondataavailable" (fn [ev]
                                  (.log js/console id "data")
                                  (swap! chunks (fn [arr] (.push arr (.-data ev)) arr))))
    (reset! recorder rec)
    (.start rec 1000))

  (reset! video-stream stream)

  (aset js/window "videoStream" stream)
  (let [video (.getElementById js/document "video")]
    (aset video "srcObject" stream)
    (aset  video "onloadedmetadata" (fn [e] (.play video)))))

(defn start-recording []
  (.getUserMedia js/navigator
                 #js{:audio false :video true}
                 do-start-recording
                 (fn [err] (.log js/console err))))

(defn stop-recording []
  (when-let [rec @recorder]
    (.log js/console "on stop" rec)
    (swap! state assoc :phase :idle)
    (.stop rec)
    (let [chks @chunks
          blob (js/Blob. chks #js{:type "video/mp4" });; "video/webm"
          url (.createObjectURL (.-URL js/window) blob)]
      (.log js/console blob "Number of chunks" (count chks))
      (swap! videos conj {:blob blob
                          :ts (js/Date.)
                          :url url
                          :id (name (gensym))}))))

(defn replay-recording []
  (println "replay"))

(defn config []
  (fn []
    (let [phase (:phase @state)]
      [:section.video-page
       [:div#recorder
        [:video {:id "video"}]
        [:div.buttons
         (if (= :in-progress phase)
           [:button.stop  {:title "stop recording" :on-click stop-recording}]
           [:button.start {:title "start recording" :on-click start-recording}])]]

       [:br]
       [:br]
       [:div
        [:h3 "Recorded Videos"]
        [:div.videos
         (for [vs @videos]
           [:div.item {:key (:id vs)}
            [:video.preview {:src (:url vs) :controls true}]
            [:div.desc
             [:h5 "Record " (str (:ts vs))]
             [:div "Size: "(pr-str (/ (.-size (:blob vs)) 1000000))  "Mb"]
             [:div "Size: "(pr-str  (:blob vs))]
             [:button.btn.btn-secondary "Download"]

             ]])]]])))

(defmethod page/page :config
  [k]
  (println "config")
  [config])
