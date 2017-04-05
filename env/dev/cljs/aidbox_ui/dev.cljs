(ns ^:figwheel-no-load aidbox-ui.dev
  (:require [aidbox-ui.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3000/figwheel-ws"
  :jsload-callback core/mount-root)

(core/init!)
