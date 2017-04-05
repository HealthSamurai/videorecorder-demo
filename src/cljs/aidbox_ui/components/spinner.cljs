(ns aidbox-ui.components.spinner
  (:require [re-frame.core :as rf]
            [aidbox-ui.rf :refer [reg-event-db]]
            [clojure.string :as str]))

(reg-event-db :spinner/show
              (fn [db [_ spinner-id]]
                (assoc-in db [:spinners-state spinner-id] true)))

(reg-event-db :spinner/hide
              (fn [db [_ spinner-id]]
                (assoc-in db [:spinners-state spinner-id] false)))

(rf/reg-sub :spinner/state
            (fn [db [_ spinner-id]]
              (get-in db [:spinners-state spinner-id] false)))

(def spinner-elements [:span.dots-spinner [:span] [:span] [:span]])

(defn- add-class-name [e class-name]
  (if class-name
    (let [[tag-name & classes] (-> e
                                   (first)
                                   (name)
                                   (str/split #"\."))
          new-classes (-> classes
                          (set)
                          (conj (name class-name)))]

      (into [(keyword (str/join "." (into [tag-name] new-classes)))]
            (rest e)))
    e))

(defn spinner-container [spinner-id attrs child]
  (let [state @(rf/subscribe [:spinner/state spinner-id])]
    (if state
      (-> child
          (add-class-name :spinner-container)
          (add-class-name (:class attrs))
          (conj (add-class-name spinner-elements (:spinner-class attrs))))
      child)))

(def last-spinner-id (atom 0))

(defn gen-spinner-id []
  (swap! last-spinner-id inc)
  (keyword (str "spinner-" @last-spinner-id)))
