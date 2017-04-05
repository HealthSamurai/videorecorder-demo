(ns aidbox-ui.pages.page)

(defmulti page (fn [k] k))

(defn not-found [k]
  [:section.unknon-page
   [:h1 "Unknown page " (pr-str k)]])

(defmethod page
  :default [k]
  [not-found k])
