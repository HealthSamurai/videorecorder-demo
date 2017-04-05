(ns  aidbox-ui.pages.config
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.pages.page :as page]))

(defonce video-stream (atom nil))
(defonce recorder (atom nil))

(def chunks (r/atom #js[]))
(def videos (r/atom []))

(defn do-start-recording [stream]
  (let [id (name (gensym))
        rec (js/MediaRecorder. stream)]
    (doseq [ev ["onstop" "onstart" "onpause" "onresume" "onerror" "onwarning"]]
      (aset rec ev (fn [& args] (.log js/console ev id args))))

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
                 #js{:audio true :video #js{:width 1280 :height 720}}
                 do-start-recording
                 (fn [err] (.log js/console err))))

(defn stop-recording []
  (when-let [rec @recorder]
    (.log js/console "on stop" rec)
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
  (println "replay")
  )

(defn config []
  (fn []
    [:section.video-page
     [:style "
       video { border: 1px solid #ddd; display: block;}
       .item {padding: 10px; border-bottom: 1px solid #ddd;}
       .item:hover {background: #ddd; cursor: pointer;}
     "]
     [:video {:id "video"}]
     [:div.overlay "overlay"]
     [:button.btn.btn-primary {:on-click start-recording} "Start"]
     [:button.btn.btn-primary {:on-click stop-recording} "Stop"]

     [:div
      [:h3 "Videos"]
      (for [vs @videos]
        [:div.item {:key (:id vs)}
         [:b (:id vs)] "  " (str (:ts vs))
         [:video {:src (:url vs) :controls true}]])]]))

(defmethod page/page :config
  [k]
  (println "config")
  [config])
