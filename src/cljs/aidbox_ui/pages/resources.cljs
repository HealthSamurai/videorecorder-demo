(ns aidbox-ui.pages.resources
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as page]))

(defn resources []
  [:section.toolkit-page
   [:h3 "Resources"]
   (for [x (range 10)]
     [:div {:key x}
      [:a {:href (str "#" x)}
       (str "Resource-" x)]
      [:br]
      [:br]])])

(defmethod page/page :resources
  [k]
  [resources])
