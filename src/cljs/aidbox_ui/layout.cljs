(ns aidbox-ui.layout
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [aidbox-ui.db :as db]
            [re-frame.core :as rf]))


(defn layout [& body]
  (let [user @(rf/subscribe [::db/auth])
        page-id (:page @(rf/subscribe [::db/current-page])) ]
    [:div#aidbox-root

     (.warn js/console page-id)
     (.log js/console (and (= page-id :videos) "active"))
     [:header
      [:div.header-wrapper
       [:div.navigation
      [:ul.tabs
       [:li {:key :rec :class (and (= page-id :config) "active")}
        [:a {:href "#/"}  "Recording"]]
       [:li {:key :vid :class (and (= page-id :videos) "active")}
        [:a {:href "#/videos"}  "Videos"]]]]]]

     `[:div.current-page
       ~@body]

     ]))
