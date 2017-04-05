(ns aidbox-ui.core
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require
   [cljsjs.react]
   [clojure.string :as str]
   [reagent.core :as reagent]
   [re-frame.core :as rf]
   [re-frisk.core :refer [enable-re-frisk!]]
   [aidbox-ui.subs :as subs]
   [aidbox-ui.fxs :as fxs]
   [aidbox-ui.db :as db]
   [aidbox-ui.layout :as layout]
   [goog.events :as events]
   [goog.history.EventType :as EventType]
   [aidbox-ui.rf :refer [reg-event-db]]
   [aidbox-ui.routes :as routes]
   [route-map.core :as route-map]
   [re-frame.core :as rf]
   [aidbox-ui.pages.page :as page]
   [aidbox-ui.pages.config]
   [aidbox-ui.openid :as openid]
   [aidbox-ui.cookies :as cookies]
   [devtools.core :as devtools])
  (:import goog.History))


;; (devtools/install!)

;; (rf/reg-event-fx
;;  ::initialize
;;  [(rf/inject-cofx ::cookies/get :auth)
;;   (rf/inject-cofx ::openid/jwt :auth)]
;;  (fn [{jwt :jwt {auth :auth} :cookie :as cofx}
;;       [_ ev]]
;;    (println "here")
;;    (if (and (nil? jwt) (nil? auth))
;;      {::fxs/page-redirect {:uri "/oauth2"
;;                            :params {:redirect_uri (first (str/split (.. js/window -location -href) #"#"))}}}
;;      {::cookies/set {:key :auth
;;                      :value (or jwt auth)}
;;       :db           (merge (:db cofx)
;;                            {:flag  ev
;;                             :auth (or jwt auth)
;;                             :top-menu [[:boxes "#/boxes" "Boxes"]
;;                                        [:scratchpad "#/" "Interactive Documets"]
;;                                        [:resources "#/resources" "Resources"]
;;                                        [:config "#/config" "Configuration"]]
;;                             :spinners-state {}})})))

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

(defn- dispatch [event]
  (let [fragment (.-token event)
        route (route-map/match [:. fragment] routes/routes)]
    (rf/dispatch [:navigate-to {:page (:match route)
                                :params (:params route)}])))

(defn- hook-browser-navigation! []
  (doto (History.)
    (events/listen EventType/NAVIGATE dispatch) (.setEnabled true)))

(defn init! []
  (println "init")
  ;; (rf/dispatch [::initialize])
  (hook-browser-navigation!)
  ;; (enable-re-frisk!)
  (mount-root))
