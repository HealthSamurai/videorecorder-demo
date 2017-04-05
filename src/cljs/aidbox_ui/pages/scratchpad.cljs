(ns aidbox-ui.pages.scratchpad
  (:require-macros [aidbox-ui.slurp :refer [slurp]])
  (:require [re-frame.core :as rf]
            [aidbox-ui.rf :refer [reg-event-db reg-event-fx]]
            [aidbox-ui.components.scratchpad-block :as sb]
            [aidbox-ui.utils :as utils]
            [aidbox-ui.pages.page :as page]
            [clojure.string :as str]))

(def tutorial-content (slurp "resources/tutorial.md"))

(defn parse-blocks [md]
  (let [[first-md & rest-bs] (str/split md #"```(sql|http)")]
    (into [{:type :markdown
            :content (str/trim first-md)}]
          (flatten
           (map (fn [[code-type cnt]]
                  (let [[a b] (str/split cnt #"```" 2)]
                    [{:type (keyword code-type)
                      :content (str/trim a)}

                     {:type :markdown
                      :content (str/trim b)}]))
                (partition 2 rest-bs))))))

(def scratchpad-blocks
  (parse-blocks tutorial-content))

(reg-event-db :scratchpad/initialize
              (fn [db _]
                (assoc db :scratchpad {:blocks (mapv #(merge % {:mode :view}) scratchpad-blocks)})))

(rf/reg-sub :scratchpad/blocks
            #(get-in % [:scratchpad :blocks]))

(defn- render-blocks [blocks]
  (map-indexed (fn [idx block]
                 ^{:key idx} [sb/scratchpad-block block idx])
               blocks))



(defn scratchpad-page []
  (rf/dispatch [:scratchpad/initialize])

  (fn []
    (let [blocks @(rf/subscribe [:scratchpad/blocks])]
      [:section.scratchpad-page
       [:h1 "Welcome to your box"]
       [:p "Each box is ..."]
       #_(render-blocks blocks)])))

(defmethod page/page :scratchpad [k] [scratchpad-page])
