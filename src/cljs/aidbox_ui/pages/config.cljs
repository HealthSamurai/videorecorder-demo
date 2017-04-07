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

;; (defonce cfg (r/atom #js{:mimeType "video/webm;codecs=h264" }))

(js/setInterval (fn []
                  (when (= :in-progress (:phase @state))
                    (swap! state update :time inc))) 1000)


(defn load-devices []
  (swap! state assoc :devices [])
  (-> (.-mediaDevices js/navigator )
      (.enumerateDevices)
      (.then (fn [device]
               (swap! state update :devices concat (.filter device #(= "videoinput" (.-kind %))))))))


(def resolutions
  (->> [{:id :360p
         :minWidth 480
         :minHeight 360
         :maxWidth 480
         :maxHeight 360}
        {:id :480p
         :minWidth 640
         :minHeight 480
         :maxWidth 640
         :maxHeight 480}
        {:id :720p
         :minWidth 1280
         :minHeight 720
         :maxWidth 1280
         :maxHeight 720}
        {:id :1080p
         :minWidth 1920
         :minHeight 1080
         :maxWidth 1920
         :maxHeight 1080}]
       (mapv (fn [x] (assoc x :text (name (:id x)))))))

(defn build-rtc-config [cfg]
  (clj->js
   (cond->
       {:mimeType (str "video/webm;codecs=" (or (:id (:codec cfg)) "h264"))
        ;;:resolution (dissoc (:resolution cfg) :id :text)
        ;; canvas doues not mean resolution - it's video canvas
        ;; :canvas {:width (:minWidth (:resolution cfg))
        ;;          :height (:minHeight (:resolution cfg))}
        }

     (:bit-rate cfg) (assoc :videoBitsPerSecond (:id (:bit-rate cfg)))
     ;;(:frame-rate cfg) (assoc :frameInterval (:id (:frame-rate cfg)))
     )))

(defn do-start-recording [stream]
  (reset! astream stream)
  (let [video (.getElementById js/document "video")
        cfg (build-rtc-config (:selected @state))]

    (aset video "srcObject" stream)
    (.play video)

    (reset! recorder  (js/RecordRTC. stream cfg))
    (.startRecording @recorder)

    (swap! state merge  {:phase :in-progress :time 0})))

(defn start-recording []
  (let [cfg (:selected @state)
        d (:device cfg)
        constr  (clj->js
                  (cond-> {:audio false
                           :video {:deviceId (if-let [id (and d (:id d))] {:exact id} nil)}}
                    (:resolution cfg) (assoc-in [:video :mandatory] (dissoc (:resolution cfg) :id :text))
                    (:frame-rate cfg) (assoc-in [:video :farameRate] {:ideal (int (get-in cfg [:frame-rate :id]))
                                                                      :max 60 })))]

    (.log js/console "Media constr" constr)

    (-> (.-mediaDevices js/navigator)
        (.getUserMedia constr)
        (.then do-start-recording)
        (.catch (fn [err]
                  (swap! state assoc :error err)
                  (.error js/console "getUserMedia ERROR" err))))))

(defn stop-recording []
  (swap! state assoc :phase :idle)
  (doseq [track (.getTracks @astream)] (.stop track))

  (.stopRecording @recorder
                  (fn[videoURL]
                    (swap! videos conj {:ts (js/Date.)
                                        :url videoURL
                                        :blob (.getBlob @recorder)
                                        :id (name (gensym))}))))

(defn replay-recording []
  (println "replay"))

(defn radio-group [args]
  (let [do-selection (fn [x path]
                       (.log js/console "select" path x)
                       (swap! state assoc-in path x))]
    (fn [{path :path opts :opts title :title}]
      (let [st @state
            cur (get-in st path)]
        [:div.devices
         [:div.label title]
         [:div.device {:class (when (nil? cur) "active")
                       :on-click #(do-selection nil path)}
          "Default"]
         (for [x opts]
           [:div.device {:key (:id x)
                         :class (when (= x cur) "active")
                         :on-click #(do-selection x path)}
            (:text x) ])]))))

(defn settings []
  [:div.settings
   [:section.video-page
    [radio-group {:title "Choose Device"
                  :path [:selected :device]
                  :opts (->> (:devices @state)
                             (mapv (fn [d]
                                     {:id (.-deviceId d)
                                      :text (if (clojure.string/blank? (.-label d))
                                              "Unknown Device"
                                              (.-label d))
                                      :value d})))}]

    [radio-group {:title "Compression"
                  :path [:selected :codec]
                  :opts [{:id "vp8" :text "vp8"}
                         {:id "vp9" :text "vp9"}
                         {:id "h264" :text "h264"}
                         {:id "whammy" :text "whammy"}]}]

    [radio-group {:title "Resolution"
                  :path [:selected :resolution]
                  :opts resolutions}]

    ;[radio-group {:title "Frame Rate"
                  ;:path [:selected :frame-rate]
                  ;:opts [{:id "60" :text "60"}
                         ;{:id "30" :text "30"}
                         ;{:id "24" :text "24"}
                         ;{:id "15" :text "15"}
                         ;{:id "5" :text "5"}]}]

    [radio-group {:title "Bitrate"
                  :path [:selected :bit-rate]
                  :opts [{:id "8000000000" :text "1 GB bps"}
                         {:id "800000000" :text "100 MB bps"}
                         {:id "8000000" :text "1 MB bps"}
                         {:id "800000" :text "100 KB bps"}
                         {:id "8000" :text "1 KB bps"}
                         {:id "800"  :text "100 Bytes bps"}]}]


    ;; change-bitrate
    ]])

(defn config []
  (load-devices)
  (fn []
    (let [phase (:phase @state) ]
      [:section.video-page
       [settings]
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
