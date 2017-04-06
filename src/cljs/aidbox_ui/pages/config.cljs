(ns  aidbox-ui.pages.config
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.pages.page :as page]))

(defonce recorder (atom nil))
(defonce astream (atom nil))
(defonce state (r/atom {:time 0
                        :devices []}))

(defonce chunks (r/atom #js[]))
(defonce videos (r/atom []))
(defonce cfg (r/atom #js{:mimeType "video/webm;codecs=h264" }))

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
  (reset! astream stream)
  (let [ video (.getElementById js/document "video") ]

    (aset video "srcObject" stream)
    (.play video)
    (.log js/console @cfg)
    (reset! recorder  (js/RecordRTC. stream @cfg))
    (.startRecording @recorder)

    (swap! state assoc :phase :in-progress)
    (swap! state assoc :time 0)

))

(def resolutions
  {:360p #js{:minWidth 480
             :minHeight 360
             :maxWidth 480
             :maxHeight 360}
   :480p  #js{:minWidth 640
              :minHeight 480
              :maxWidth 640
              :maxHeight 480}
   :720p #js{:minWidth 1280
             :minHeight 720
             :maxWidth 1280
             :maxHeight 720}
   :1080p #js{:minWidth 1920
              :minHeight 1080
              :maxWidth 1920
              :maxHeight 1080}})

(defn start-recording []
  (let [d (:selected-device @state)
        constr  #js{:audio false
                    :video #js{:mandatory (.-resolution @cfg)
                               :deviceId (if-let [id (and d (.-deviceId d))] #js{:exact id} nil)
                               }}]
    (.log js/console "Media constr" constr)
    (.getUserMedia js/navigator
                   constr
                   do-start-recording
                   (fn [err] (.error js/console "getUserMedia ERROR" err)))))

(defn stop-recording []
  (swap! state assoc :phase :idle)
  (doseq [track (.getTracks @astream)]
    (.stop track))

  (.stopRecording @recorder
                  (fn[videoURL]
                    (swap! videos conj {:ts (js/Date.)
                                        :url videoURL
                                        :blob (.getBlob @recorder)
                                        :id (name (gensym))}))))

(defn replay-recording []
  (println "replay"))

(defn change-bitrate [x]
  (swap! cfg
         (fn [v] (aset v "videoBitsPerSecond" (-> x .-target .-value)) v)))
(defn change-framerate [x]
  (swap! cfg
         (fn [v] (aset v "frameInterval" (-> x .-target .-value)) v)))

(defn change-resolution [x]
  (let [resolution (get resolutions (keyword (-> x .-target .-value)))
        res #js{:width (.-minWidth resolution) :height (.-minHeight resolution)} ]
    ;;(swap! cfg (fn [v] (aset v "video" res) v))
    (swap! cfg (fn [v] (aset v "canvas" res) v))
    ;;(swap! cfg (fn [v] (aset v "width" (.-minWidth resolution)) v))
    ;;(swap! cfg (fn [v] (aset v "height" (.-minHeight resolution)) v))
    (swap! cfg (fn [v] (aset v "resolution" resolution) v))))

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
           (.-label d) ]) ]

       [:h4 "Compression"]
       [:div.devices
        [:div.device "vp8"]
        [:div.device "vp9"]
        [:div.device "h264"]
        [:div.device "whammy"]]

       [:h4 "Resolution"]
       [:select.select.media-resolution {:on-change change-resolution}
        [:option {:value "default"} "Default"]
        [:option {:value "1080p"} "1080p"]
        [:option {:value "720p"} "720p"]
        [:option {:value "480p"} "480p"]
        [:option {:value "360p"} "360p"] ]

       [:h4 "Frame Rate"]
       [:select.media-frameRate {:on-change change-framerate}
        [:option {:value "default"} "Default"]
        [:option {:value "60"} "60"]
        [:option {:value "30"} "30"]
        [:option {:value "24"} "24"]
        [:option {:value "15"} "15"]
        [:option {:value "5"} "5"] ]


       [:h4 "Bitrate"]
       [:select.media-bitrates {:on-change change-bitrate}
        [:option {:value "default"} "Default"]
        [:option {:value "8000000000"} "1 GB bps"]
        [:option {:value "800000000"} "100 MB bps"]
        [:option {:value "8000000"} "1 MB bps"]
        [:option {:value "800000"} "100 KB bps"]
        [:option {:value "8000"} "1 KB bps"]
        [:option {:value "800"} "100 Bytes bps"] ]

       [:div#recorder
        [:video {:id "video"}]
        [:div.buttons
         [:div.timer (:time @state) " sec"]
         (if (= :in-progress phase)
           [:button.stop  {:title "stop recording" :on-click stop-recording} "Stop Recording"]
           [:button.start {:title "start recording" :on-click start-recording} "Start Recording"])]]

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
