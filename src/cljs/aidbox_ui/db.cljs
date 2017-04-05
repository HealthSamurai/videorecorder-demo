(ns aidbox-ui.db
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require
   [cljsjs.react]
   [reagent.core :as r]
   [aidbox-io.io :as io]
   [re-frame.core :as rf]))

(rf/reg-sub-raw
 ::current-page
 (fn [db _] (reaction (:current-page @db))))

(rf/reg-sub-raw
 :resources/search-result
 (fn [db [_ rt]]
   (println "subscription" rt)
   (reaction (get-in @db [:resources rt]))))

(rf/reg-sub-raw
 ::auth
 (fn [db _] (reaction (:auth @db))))

(rf/reg-sub-raw
 ::top-menu
 (fn [db _] (reaction (:top-menu @db))))

(rf/reg-event-fx
 :resources/search
 (fn [coef [_ {rt :resourceType}]]
   {::io/xhr {:uri (str "/" (name rt))
              :token (get-in coef [:db :auth :id_token]) 
              :query-params {:user (get-in coef [:db :auth :sub])}
              :method :get
              :on-success {:event :resources/search-result
                           :resourceType rt}}}))

(rf/reg-event-fx
 :resources/search-result
 (fn [cofx [_ {rt :resourceType result :result :as ev}]]
   (println :resources/search-result ev)
   {:db (assoc-in (:db cofx) [:resources (keyword rt)] result)}))
