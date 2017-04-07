(ns aidbox-ui.pages.config
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.pages.page :as page]))

(defonce recorder (atom nil))
(defonce astream (atom nil))
(defonce state (r/atom {:time 0
                        :devices []}))

(defonce videos (r/atom []))

(def resolutions
  [{:id :360p
    :width 480
    :height 360}
   {:id :480p
    :width 640
    :height 480}
   {:id :720p
    :wigth 1280
    :height 720}
   {:id :1080p
    :width 1920
    :height 1080}])

(def frame-rates
  [{:id "60"}
   {:id "30"}
   {:id "24"}
   {:id "15"}
   {:id "5"}])

(def bitrates [{:id "8000000000" :text "1 GB bps"}
               {:id "800000000" :text "100 MB bps"}
               {:id "8000000" :text "1 MB bps"}
               {:id "800000" :text "100 KB bps"}
               {:id "8000" :text "1 KB bps"}
               {:id "800"  :text "100 Bytes bps"}])

(js/setInterval (fn []
                  (when (= :in-progress (:phase @state))
                    (swap! state update :time inc))) 1000)

(defn load-devices []
  (swap! state assoc :devices [])
  (-> (.-mediaDevices js/navigator )
      (.enumerateDevices)
      (.then (fn [device]
               (let [video-devices (.filter device #(= "videoinput" (.-kind %)))]
                 (swap! state update :devices concat video-devices))))))

(defn build-rtc-config [cfg]
  (let [conf {:mimeType (str "video/webm;codecs=" (or (:id (:codec cfg)) "h264"))}]
    (clj->js (if (:bit-rate cfg)
               (assoc conf :videoBitsPerSecond (:id (:bit-rate cfg)))
               conf))))

(defn do-start-recording [stream]
  (reset! astream stream)
  (let [video (.getElementById js/document "video")
        cfg (build-rtc-config (:selected @state))
        video-track (first (.getVideoTracks stream))]

    (.log js/console "applied constraints: " (.getConstraints video-track))

    (aset video "srcObject" stream)
    (.play video)

    (reset! recorder  (js/RecordRTC. stream cfg))
    (.startRecording @recorder)

    (swap! state merge  {:phase :in-progress :time 0})))

(defn device-constraints [cfg]
  (cond-> {}
    (:resolution cfg) (merge (dissoc (:resolution cfg) :id :text))
    (:frame-rate cfg) (assoc :frameRate (:id (:frame-rate cfg)))))

(defn start-recording []
  (let [cfg (:selected @state)
        d (:device cfg)
        constr {:audio false
                :video (merge
                        {:deviceId (if-let [id (and d (:id d))] {:exact id} nil)}
                        (device-constraints cfg))}]

    (.log js/console "Media constr" (clj->js constr))
    (.warn js/console  (clj->js d))

    (-> (.-mediaDevices js/navigator)
        (.getUserMedia (clj->js constr))
        (.then do-start-recording)
        (.catch (fn [err] (.log js/console err))))))

(defn stop-recording []
  (swap! state assoc :phase :idle)
  (doseq [track (.getTracks @astream)] (.stop track))

  (.stopRecording @recorder
                  (fn[videoURL]
                    (swap! videos conj {:ts (js/Date.)
                                        :url videoURL
                                        :blob (.getBlob @recorder)
                                        :id (name (gensym))}))))

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

(defn wrap-attrs [v]
  (assoc v :text (name (:id v))))

(defn settings []
  [:div.settings
   [:section.video-page
    [:pre {:style {:float "right"}}
     (.stringify js/JSON (build-rtc-config (:selected @state)) nil " ")]
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
                  :opts (mapv wrap-attrs
                              resolutions)}]

    [radio-group {:title "Frame Rate"
                  :path [:selected :frame-rate]
                  :opts (mapv wrap-attrs
                              frame-rates)}]
    ;; change-framerate


    [radio-group {:title "Bitrate"
                  :path [:selected :bit-rate]
                  :opts bitrates}]]])

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

             [:a.download {:href (:url vs) :download "video.mp4"} "Download"]]])]]
       [:div
        [:h3 "Upload Video"]
        [:form {:enctype "multipart/form-data"
                    :method "post"
                    :action "/videos"}
             [:input {:type "text" :name "name"}]
             [:input {:type "file" :name "file"}]
             [:input {:type "submit" :value "Upload"}]]]])))
(defmethod page/page :config
  [k]
  (println "config")
  [config])
