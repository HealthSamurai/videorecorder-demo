(ns aidbox-ui.routes
  (:require [aidbox-ui.rf :refer [reg-event-db]]
            [re-frame.core :as rf]))

(def routes
  {"resources" {:. :resources}
   "boxes"     {:. :boxes}
   :.          {:. :config}
   "toolkit"    {:. :config}})
