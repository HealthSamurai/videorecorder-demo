(ns  aidbox-ui.pages.boxes
  (:require [reagent.core :as r]
            [aidbox-ui.pages.page :as page]
            [re-frame.core :as rf]))

(defn boxes-grid []
  (let [boxes (rf/subscribe [:resources/search-result :Box])]
    (rf/dispatch [:resources/search {:resourceType "Box"}])
    (fn []
      [:section.boxes-page
       [:h1 "Your Boxes"]
       [:p "Box is bla..."]
       (for [box  (map :resource (:entry @boxes))]
         [:a {:key (:id box) :href (str "#/boxes/" (:id box))}
          [:h3 (:id box) " " [:small (:fhirVersion box)]]])])))


(defmethod page/page :boxes [k] [boxes-grid])
