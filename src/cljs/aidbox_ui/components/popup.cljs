(ns aidbox-ui.components.popup
  (:require [reagent.core :as r]))

(defn- make-background-click-handler [onclick]
  (fn [e]
    (when (= "fullscreen" (aget (.-target e) "className"))
      (onclick))))

(defn popup [attrs & [title & body]]
  (r/create-class
   {:component-will-mount
    (fn []
      (aset (.-body js/document) "className" "no-scroll"))

    :component-will-unmount
    (fn []
      (aset (.-body js/document) "className" ""))

    :reagent-render
    (fn [{:keys [on-close] :as attrs} & [title & body]]
      [:div.fullscreen {:on-click (make-background-click-handler on-close)}
       `[:div.popup
         ~title
         [:div.body ~@body]]])}))
