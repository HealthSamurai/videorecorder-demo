(ns aidbox-ui.components.sql-result-table)

(defn- result-value [v]
  (cond
    (or (string? v) (number? v)) (str v)
    (nil? v) "NULL"
    :else [:pre.monospace (.stringify js/JSON (clj->js v) nil 2)]))

(defn render [result]
  (let [result (-> result
                   js->clj
                   first
                   :result)
        header (map name (keys (first result)))]
    [:table
     [:thead
      (into [:tr] (map (fn [s] [:th s]) header))]
     [:tbody
      (map-indexed
       (fn [idx row]
         (into
          [:tr {:key (str "row-" idx)}]
          (map
           (fn
             [s] [:td (result-value s)])
           (vals row))))
       result)]]))

