(ns aidbox-ui.components.code-block
  #_(:require [re-frame.core :as rf]
            [reagent.core :as r]
            [aidbox-ui.components.spinner :refer [spinner-container gen-spinner-id]]
            [vendor.highlightjs]))

;(defn highlight-code [this]
  ;(let [my-dom (r/dom-node this)
        ;code-block (aget (.querySelectorAll my-dom "code") 0)]
    ;(when code-block
      ;(.highlightBlock js/hljs code-block))))

;(defn code-block [type body]
  ;(let [mode (r/atom :view)]
    ;(r/create-class
     ;{:component-did-update #(highlight-code %)
      ;:component-did-mount #(highlight-code %)

      ;:reagent-render
      ;(fn [type body]
        ;[:div.code-block
         ;[:code.block {:class (name type)} body]])})))
