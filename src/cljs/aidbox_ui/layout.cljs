(ns aidbox-ui.layout
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [reagent.core :as r]
            [aidbox-ui.components.core :as cc]
            [aidbox-ui.db :as db]
            [re-frame.core :as rf]))

(def icons
  [:svg.svg-icons-sprite
   [:symbol#icon-add
    {:viewBox "0 0 16 16"}
    [:path
     {:d
      "M6.745 0h1.948v16H6.745V0zm.974.487l-.49.487h.974L7.72.487v15.026l.486-.487h-.974l.487.487V.487zM16 7.307v1.948H0V7.307h16zm-.487.974l-.487-.485v.974l.487-.488H.487l.487.488v-.974l-.487.487h15.026z"}]]
   [:symbol#icon-close
    {:viewBox "0 0 15 16"}
    [:path
     {:d
      "M13.372 0L15 1.628 1.628 15 0 13.372 13.372 0zm.407 1.22h-.816l.814.815V1.22L1.22 13.78h.815l-.814-.815v.814L13.78 1.22zM15 13.84l-1.628 1.63L0 2.098 1.628.47 15 13.84zm-1.22.408v-.814l-.815.814h.814L1.22 1.69v.815l.815-.814H1.22l12.56 12.56z"}]]
   [:symbol#icon-edit
    {:viewBox "0 0 16 16"}
    [:path
     {:d
      "M.94 15.52c-.315 0-.617-.165-.79-.433-.177-.278-.198-.606-.058-.905l2.373-5.045.024-.05.037-.038L11.124.455C11.418.164 11.81 0 12.226 0c.416 0 .81.16 1.105.455l1.744 1.742c.293.293.457.686.457 1.102 0 .414-.16.806-.456 1.1l-8.63 8.635-.052.026-5.074 2.385H1.31c-.126.05-.25.075-.37.075zM11.19 2.91l1.426 1.426L13.65 3.3l-1.426-1.426L11.19 2.91zM2.7 12.82l2.693-1.266 5.96-5.957L9.928 4.17l-5.96 5.957-1.266 2.693z"}]]
   [:symbol#icon-run
    {:viewBox "0 0 32 32"}
    [:path
     {:d
      "M12.66 24.21a1.61 1.61 0 0 1-.8-.21 2 2 0 0 1-.86-1.77v-12.46a1.94 1.94 0 0 1 .86-1.77 1.93 1.93 0 0 1 2 .14l10.44 6.2a2 2 0 0 1 1.04 1.66 2 2 0 0 1-1.08 1.66l-10.44 6.2a2.3 2.3 0 0 1-1.16.35zm0-14.93h-.06s-.13.18-.13.47v12.48c0 .33.09.45.12.47s.18 0 .46-.13l10.44-6.2c.24-.14.34-.29.34-.37s-.11-.23-.34-.37l-10.43-6.2a.85.85 0 0 0-.4-.14zm3.34-9.28a16 16 0 1 0 16 16 16 16 0 0 0-16-16zm0 30.5a14.5 14.5 0 1 1 14.5-14.5 14.52 14.52 0 0 1-14.5 14.5z"}]]
   [:symbol#icon-chevron-right
    {:viewBox "0 0 15 15"}
    [:path
     {:d
      "M9.284 7.268L3.82 13.3l1.112 1.008 6.376-7.04L4.932.228 3.82 1.235z"}]]
   [:symbol#icon-chevron-down
    {:viewBox "0 0 15 15"}
    [:path
     {:d
      "M7.564 8.988L1.53 3.524.525 4.636l7.04 6.376 7.04-6.376L13.6 3.524z"}]]])

(defn layout [& body]
  (let [user @(rf/subscribe [::db/auth])]
    [:div#aidbox-root
     icons
     #_[:header
      [:div.header-wrapper
       [:div.topbar
        [:div.boxname "Heart Smart"]

        ;; [:input.search.input {:type "search" :placeholder "Smart Search"} ]

        [:div.notifications
         (cc/raw-html "&nbsp;") ;; we need this space to position icons properly (it's a hack)
         (cc/icon :bell)]

        [:div.user-dropdown
         [:div.user
          (if-let [pic (:picture user)]
            [:img.avatar {:src pic}]
            (cc/icon :user-circle))
          [:span.name (or (:nickname user) (:email user))]]]]


       (when-let [top-menu @(rf/subscribe [::db/top-menu])]
         [:div.navigation
          [:ul.tabs
           (let [{current-page-id :page} @(rf/subscribe [::db/current-page])]
             (for [[id url label icon-name] top-menu]
               [:li {:key id :class (and (= current-page-id id) "active")}
                [:a {:href url}  label]]))]])]]

     `[:div.current-page
       ~@body]

     [:footer
      [:div.footer-wrapper
       [:div.left
        [:p "Hearth Smart"]
        [:p (cc/raw-html "Hand-crafted with <span style='color: #e3647e'>&hearts;</span> by ") [:a {:href "http://health-samurai.io/"} "Health Samurai Team"]]]]]]))
