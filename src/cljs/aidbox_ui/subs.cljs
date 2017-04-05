(ns aidbox-ui.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub :global/top-level-page (or (:current-route %) [:default]))
