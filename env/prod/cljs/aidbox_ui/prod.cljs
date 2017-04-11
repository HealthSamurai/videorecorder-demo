(ns ^:figwheel-no-load aidbox-ui.prod
  (:require [aidbox-ui.core :as core]))
(enable-console-print!)
(.error js/console "HERE!@@@@")

(core/init!)
