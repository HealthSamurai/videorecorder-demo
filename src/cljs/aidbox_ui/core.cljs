(ns aidbox-ui.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require
   [cljsjs.react]
   [clojure.string :as str]
   [reagent.core :as reagent]
   [re-frame.core :as rf]
   [re-frisk.core :refer [enable-re-frisk!]]
   [aidbox-ui.db :as db]
   [aidbox-ui.layout :as layout]
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [aidbox-ui.rf :refer [reg-event-db]]
   [route-map.core :as route-map]
   [aidbox-ui.pages.page :as page]
   [aidbox-ui.pages.config]
   [aidbox-ui.sample]
   )
  (:import goog.History))


(rf/reg-event-fx
 ::initialize
 [] (fn [cofx [_ ev]] cofx))


(defn current-page []
  (let [p @(rf/subscribe [::db/current-page])]
    (page/page (:page p))))

(defn- mount-root []
  (reagent/render
   [layout/layout [current-page]]
   (.getElementById js/document "app")))

(reg-event-db
 :navigate-to
 (fn [db [k event]]
   (assoc db :current-page event)))

(def routes
  {:.       {:. :config}
   "videos" {:. :videos}
   "hui" {:. :hui}
   "sample" {:. :sample}})

(defn- dispatch [event]
  (.error js/console "111111111111111111")
  (let [fragment (.-token event)
        route (route-map/match [:. fragment] routes)]
    (println "routing" route)
    (rf/dispatch [:navigate-to {:page (:match route)
                                :params (:params route)}])))

(defn- hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType/NAVIGATE dispatch) (.setEnabled true)))

(defn init! []
  (println "init")
  (rf/dispatch [::initialize])
  (hook-browser-navigation!)
  (enable-re-frisk!)
  (mount-root))
