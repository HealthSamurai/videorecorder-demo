(ns  aidbox-ui.pages.config
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.pages.page :as page]))

(defonce video-stream (atom nil))
(defonce recorder (atom nil))
(defonce state (r/atom {:time 0
                        :devices []}))

(defonce chunks (r/atom #js[]))
(defonce videos (r/atom []))

(js/setInterval (fn []
                  (when (= :in-progress (:phase @state))
                    (swap! state update :time inc))) 1000)

;; navigator.mediaDevices.enumerateDevices()
;; .then(function(devices) {
;; devices.forEach(function(device) {
;; console.log(device.kind + ": " + device.label +
;; " id = " + device.deviceId);
;; });
;; })

(defn load-devices []
  (swap! state assoc :devices [])
  (-> (.-mediaDevices js/navigator )
      (.enumerateDevices)
      (.then (fn [device]
               (.log js/console device)
               (swap! state update :devices concat (.filter device #(= "videoinput" (.-kind %))))))))

(defn select-device [d]
  (.log js/console "select device" d)
  (swap! state assoc :selected-device d))

(defn do-start-recording [stream]
  (.log js/console "Stream" stream)
  (let [id (name (gensym))
        rec (js/MediaRecorder. stream)]
    (doseq [ev ["onstop" "onstart" "onpause" "onresume" "onerror" "onwarning"]]
      (aset rec ev (fn [& args] (.log js/console ev id args))))

    (swap! state assoc :phase :in-progress)
    (swap! state assoc :time 0)

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
  (let [d (:selected-device @state)
        constr  #js{:audio false
                    :video #js{:deviceId (if-let [id (and d (.-deviceId d))] #js{:exact id} nil)}}]
    (.log js/console "Media constr" constr)
    (.getUserMedia js/navigator
                   constr 
                   do-start-recording
                   (fn [err] (.log js/console "getUserMedia ERROR" err)))))

(defn stop-recording []
  (when-let [rec @recorder]
    (.log js/console "on stop" rec)
    (swap! state assoc :phase :idle)
    (.stop rec)
    (let [chks @chunks
          blob (js/Blob. chks #js{:type "video/webm" });; "video/webm"
          url (.createObjectURL (.-URL js/window) blob)]
      (.log js/console blob "Number of chunks" (count chks))
      (swap! videos conj {:blob blob
                          :ts (js/Date.)
                          :url url
                          :id (name (gensym))}))))

(defn replay-recording []
  (println "replay"))

(defn config []
  (load-devices)
  (fn []
    (let [phase (:phase @state)
          current-dev (:selected-device @state)]
      [:section.video-page
       [:h4 "Choose Device"]
       [:div.devices
        (for [d (:devices @state)]
          [:div.device {:key (str (.-deviceId d) (.-kind d))
                        :class (when (= d current-dev) "active")
                        :on-click #(select-device d)}
           (.-label d)
           "  "
           (.-kind d)])
        [:div#recorder
         [:video {:id "video"}]
         [:div.buttons
          [:div.timer (:time @state) " sec"]
          (if (= :in-progress phase)
            [:button.stop  {:title "stop recording" :on-click stop-recording} "Stop Recording"]
            [:button.start {:title "start recording" :on-click start-recording} "Start Recording"])]]]
       [:div
        [:h3 "Compression"]
        [:div "h...."]
        [:h3 "Resolution"]
        [:h3 "Frame Rate"]
        [:h3 "Bit Rate"]]

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

             [:a.download {:href (:url vs) :download "video.mp4"} "Download"]

             ]])]]])))

(defmethod page/page :config
  [k]
  (println "config")
  [config])
