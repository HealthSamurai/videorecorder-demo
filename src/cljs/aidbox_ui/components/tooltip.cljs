(ns aidbox-ui.components.tooltip
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(def tooltip-state (r/atom {}))

(def tooltip-margin 10)

(def positions
  {:n (fn [{tl :left tt :top tw :width th :height :as tr} bw bh]
        {:left (+ tl (/ (- tw bw) 2))
         :top (- tt bh tooltip-margin)
         :width bw
         :height bh})

   :s (fn [{tl :left tt :top tw :width th :height :as tr} bw bh]
        {:left (+ tl (/ (- tw bw) 2))
         :top (+ tt th tooltip-margin)
         :width bw
         :height bh})

   :w (fn [{tl :left tt :top tw :width th :height :as tr} bw bh]
        {:left (- tl bw tooltip-margin)
         :top (+ tt (/ (- th bh) 2))
         :width bw
         :height bh})

   :e (fn [{tl :left tt :top tw :width th :height :as tr} bw bh]
        {:left (+ tl tw tooltip-margin)
         :top (+ tt (/ (- th bh) 2))
         :width bw
         :height bh})})

(defn- px [n] (str n "px"))

(defn- rect-to-clj [r]
  {:left (.-left r)
   :top (.-top r)
   :width (.-width r)
   :height (.-height r)})

(defn- add-scroll-offset [{rl :left rt :top rw :width rh :height :as r}]
  {:left (+ (.-scrollX js/window) rl)
   :top (+ (.-scrollY js/window) rt)
   :width rw
   :height rh})

(defn- rect-fits-in-vp? [{rl :left rt :top rw :width rh :height :as r} vw vh]
  (and (< (+ rl rw) vw)
       (< (+ rt rh) vh)))

(defn- find-fitting-pos [tr bw bh]
  (let [viewport-width (.-innerWidth js/window)
        viewport-height (.-innerHeight js/window)]
    (or (first (filter #(rect-fits-in-vp? (second %) viewport-width viewport-height)
                       (map (fn [pos] [pos ((get positions pos) tr bw bh)])
                            [:n :e :s :w])))
        [:n ((get positions :n) tr bw bh)])))

(defn show-tooltip [target-element content & [options]]
  (let [target-rect (-> target-element
                        (.getBoundingClientRect)
                        (rect-to-clj)
                        (add-scroll-offset))]
    (reset! tooltip-state {:target-rect target-rect
                           :body-width nil
                           :body-height nil
                           :hidden false
                           :content content
                           :position (when options (:position options))
                           :update-phase :first})))

(defn destroy-tooltip []
  (reset! tooltip-state {}))

(defn hide-tooltip []
  (swap! tooltip-state assoc :hidden true)

  ;; we need to destroy tooltip later to
  ;; give time for fade-out animation
  (js/setTimeout destroy-tooltip 200))

(defn first-phase-attrs []
  {:class "first-phase"})

(defn second-phase-attrs []
  (let [tr (:target-rect @tooltip-state)
        bw (:body-width @tooltip-state)
        bh (:body-height @tooltip-state)

        [pos rect]  (if-let [desired-pos (:position @tooltip-state)]
                      [desired-pos ((get positions desired-pos) tr bw bh)]
                      (find-fitting-pos tr bw bh))]

    {:style {:width (px (:width rect))
             :height (px (:height rect))
             :left (px (:left rect))
             :top (px (:top rect))}
     :class (str (name pos) (if (:hidden @tooltip-state) " hidden" " visible"))}))

(def tooltip-dom
  (r/create-class
   {:reagent-render
    (fn []
      [:div#tooltip
       (if (not (:target-rect @tooltip-state))
         {:style {} :class "no-target"}

         (if (= :first (:update-phase @tooltip-state))
           (first-phase-attrs)
           (second-phase-attrs)))

       [:div.clipper [:div.rect]]
       [:div.body (:content @tooltip-state)]])

    :component-did-update
    (fn [this]
      (when (= :first (:update-phase @tooltip-state))
        (let [rect (.getBoundingClientRect (r/dom-node this))]
          (swap! tooltip-state merge {:body-width (.-width rect)
                                      :body-height (.-height rect)
                                      :update-phase :second}))))}))
