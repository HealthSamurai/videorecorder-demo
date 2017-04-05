(ns ^:figwheel-no-load aidbox-ui.prod
  (:require [aidbox-ui.core :as core]))


(enable-console-print!)
(.log js/console "HERE")

(core/init!)
