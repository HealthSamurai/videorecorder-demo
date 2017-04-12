(ns aidbox-ui.pages.config
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<!]]
            [reagent.core :as r]
            [vendor.recordrtc]
            [aidbox-ui.pages.page :as page]
            [cljs-http.client :as http]
            [clojure.string :as str]))

(defonce state (r/atom {:time 0
                        :devices []}))

(defonce recorder (atom nil))
(defonce astream (atom nil))
(defonce videos (r/atom []))
(defonce errors (r/atom []))

(def base-url "https://videorecorder.health-samurai.io")
;;(def base-url "http://localhost:8087")

(def resolutions
  [{:id :360p
    :width {:exact 480}
    :height {:exact 360}}
   {:id :480p
    :width {:exact 640} :height {:exact 480}}
   {:id :720p
    :wigth {:exact 1280}
    :height {:exact 720}}
   {:id :1080p
    :width {:exact 1920}
    :height {:exact 1080}}])

(def frame-rates
  [{:id "60"
    :frameRate {:exact 60}}
   {:id "30"
    :frameRate {:exact 30}}
   {:id "24"
    :frameRate {:exact 24}}
   {:id "15"
    :frameRate {:exact 15}}
   {:id "5"
    :frameRate {:exact 5}}])

(def bitrates [{:id "800000000" :text "100 MB bps"}
               {:id "80000000" :text "10 MB bps" :default true}
               {:id "8000000" :text "1 MB bps"}
               {:id "800000" :text "100 KB bps"}
               {:id "8000" :text "1 KB bps"} ])

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

    (aset video "srcObject" stream)
    (.play video)

    (reset! recorder  (js/RecordRTC. stream cfg))
    (.startRecording @recorder)

    (swap! state merge  {:phase :in-progress :time 0})))

(defn device-constraints [cfg]
  (cond-> {}
    (:resolution cfg) (merge (dissoc (:resolution cfg) :id :text))))

(defn start-recording []
  (let [cfg (:selected @state)
        d (:device cfg)
        constr {:audio false
                :video (merge
                         {:deviceId (if-let [id (and d (:id d))] {:exact id} nil)}
                         (device-constraints cfg))}]

    (.log js/console "Media constr" (clj->js constr))

    (-> (.-mediaDevices js/navigator)
        (.getUserMedia (clj->js constr))
        (.then do-start-recording)
        (.catch (fn [err]
                  (swap! errors (fn [st err]
                                  (let [msg (or (.-constraint err)
                                                (.-constraintName err))]
                                    (conj st
                                          (str "Device does not support selected " msg))))
                         err)
                  (.log js/console err))))))

(defn stop-recording []
  (swap! state assoc :phase :idle)
  (doseq [track (.getTracks @astream)] (.stop track))

  (.stopRecording @recorder
                  (fn[videoURL]
                    (swap! videos conj {:ts (js/Date.)
                                        :url videoURL
                                        :blob (.getBlob @recorder)
                                        :id (name (gensym))}))))

(defn radio-group [{opts :opts path :path :as args}]
  (let [do-selection (fn [x path]
                       (.log js/console "select" path x)
                       (swap! state assoc-in path x))]
    (doseq [x opts]
      (if (:default x)
        (swap! state assoc-in path x)))

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

(defn upload-file [v]
  (go (let [res (<! (http/post (str base-url "/videos")
                               {:multipart-params [["file" (:blob v)]
                                                   ["name" (str (:id v) "_" (rand 100))]]}))]
        (js/alert "Video uploaded")
        (.log js/console (:status res)))))

(defn settings []
  [:div.settings
   [:section.video-page
    [:pre {:style {:float "right"}}
     (last @errors)]

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
                         {:id "vp9" :text "vp9" :default true}
                         {:id "h264" :text "h264"}
                         {:id "whammy" :text "whammy"}]}]

    [radio-group {:title "Resolution"
                  :path [:selected :resolution]
                  :opts (mapv wrap-attrs
                              resolutions)}]

    [radio-group {:title "Bitrate"
                  :path [:selected :bit-rate]
                  :opts bitrates}]]])

(defn config []
  (load-devices)
  (fn []
    (let [phase (:phase @state)]
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

             [:br]

             [:a.btn.btn-sm.btn-secondary {:title "Download video"
                                           :href (:url vs) :download "video.mp4"} "Download"]

             [:div.btn.btn-sm.btn-primary
              {:on-click #(upload-file vs)
               :title "Upload video to server" } "Upload"]]])]]])))

(defn controls [id]
  (let [pos (r/atom 0)
        snaps (r/atom [])
        canvas-id (str "canvas_" id)
        snap (fn []
               (let [video (.getElementById js/document id)
                     canvas (.createElement js/document "canvas" )
                     context (.getContext  canvas "2d")
                     w (.-videoWidth video) h (.-videoHeight video) ]
                 (.setAttribute canvas "width" w)
                 (.setAttribute canvas "height" h )
                 (.drawImage context video 0 0 w h)
                 (swap! snaps conj (.toDataURL canvas "image/png"))) ) ]
    (fn []
      [:div.controls
       [:h4 (str "Frame: " @pos)]
       [:button.btn.btn-secondary.btn-sm {:on-click #(swap! pos dec)} "<" ]
       [:input.fps {:on-change #(reset! pos (-> % .-target .-value))
                    :type "range" :min 1 :max (* 60 30) :step 1}]
       [:button.btn.btn-secondary.btn-sm {:on-click #(swap! pos inc)} ">"]
       [:br]
       [:br]
       [:br]
       [:button.btn.btn-primary {:on-click snap} "Capture frame"]
       (for [url @snaps] ^{:key (rand 100)}
         [:div
          [:a {:href url :download (str (rand 100) ".png") }
           [:img.snap {:crossOrigin "Anonymous" :src url}]]])
       ]))
  )

(defn $videos []
  (let [vs (r/atom [])]
    (go (reset! vs (<! (http/get (str base-url "/videos")))))
    (fn []
      (let [videos (->> (:body @vs)
                        (filter (fn [v]
                                  (re-matches #".+\.mp4" (:name v)))))]
        [:section.video-page
         [:div.videos
          (for [{name :name :as v} videos] ^{:key (:name v)}
              [:div.item
               [:video.preview.large {:id name
                                      :crossOrigin "Anonymous"
                                      :type "video/mp4"
                                      :src (str base-url  (:url v))
                                      :controls true} ]

               [:div.desc
                (let [name (:name v)
                      url (str base-url  (:url v))]
                  [:a.btn.btn-sm.btn-secondary.download {:href url
                                                         :download name} "Download original .mp4"])

                (let [name (str/replace (:name v) #"\.mp4" ".avi")
                      url (str base-url "/videos/" name)]
                  [:a.btn.btn-sm.btn-secondary.download {:href url
                                                         :download name} "Download .avi"])
                [:br]
                [:br]
                [:br]
                [controls name]

                ]])]]))))

(defmethod page/page :config
  [k]
  (println "config")
  [config])

(defmethod page/page :videos
  [k]
  (println "videos")
  [$videos])
