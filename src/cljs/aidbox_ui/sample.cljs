(ns  aidbox-ui.sample
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as p]
            [aidbox-ui.fxs :as fxs]
            [media-fx.core :as media]
            [aidbox-ui.pages.page :as page]
            [re-frame.core :as rf]
            [aidbox-ui.rf :as arf]))

(arf/reg-event-fx
 ::initialize
 []
 (fn [cofx [_ ev]]
   {::media/devices {:filter "video"}
    ::media/getUserMedia {:audio false :video true}}))

(arf/reg-event-db
 ::media/devices-avaliable
 (fn [db [_ devices]]
   (update db :media-devices (fn [x] (if x (concat devices) devices)))))

(arf/reg-event-db
 ::media/UserMedia
 (fn [db [_ media]]
   (assoc db :current-media media)))

(rf/reg-sub-raw
 ::current-media
 (fn [db _] (reaction (:current-media @db))))

(rf/reg-sub-raw
 ::devices
 (fn [db _] (reaction (:media-devices @db))))

(defn config []
  (rf/dispatch [::initialize])
  (let [media (rf/subscribe [::current-media])
        devices (rf/subscribe [::devices])]
    (fn []
      (let []
        [:section.video-page
         [:h4 "Devices"]
         [:div.devices
          (for [d @devices]
            [:div.device {:key (str (:id d) (:kind d))}
             (:label d) "  " (:kind d)])]
         [media/video {:stream  (:stream @media)}]]))))

(defmethod page/page :sample
  [k]
  [config])
