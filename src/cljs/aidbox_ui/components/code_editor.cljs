(ns aidbox-ui.components.code-editor
  #_(:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [vendor.codemirror]))

;(defn- get-code-block-type [token-info]
  ;(try
    ;(-> token-info
        ;(aget "state")
        ;(aget "localMode")
        ;(aget "name"))
    ;(catch js/Error e nil)))

;(defn- nth-index-of [s v n]
  ;(loop [i 0
         ;idx 0]
    ;(if (< i n)
      ;(recur (inc i) (str/index-of s v (inc idx)))
      ;idx)))

;(defn- get-code-block-content [value cursor]
  ;(let [line (aget cursor "line")
        ;char (aget cursor "ch")
        ;cursor-index (+ char (nth-index-of value "\n" line))
        ;block-start (loop [prev-index 0]
                      ;(let [this-index (str/index-of value "```" (inc prev-index))]
                        ;(if (> this-index cursor-index)
                          ;prev-index
                          ;(recur this-index))))
        ;block-start (str/index-of value "\n" (inc block-start))
        ;block-end (str/index-of value "```" cursor-index)]
    ;(subs value block-start block-end)))

;(defn- exec-query-at-point [cm]
  ;(let [cursor (.getCursor cm)
        ;token-info (.getTokenAt cm cursor)
        ;code-block-type (get-code-block-type token-info)]
    ;(if code-block-type
      ;(.log js/console "TODO: exec code from editor" code-block-type)

      ;(rf/dispatch [:global/notify :notice "No query at point"]))))

;(def default-options
  ;{:lineNumbers false
   ;:mode {:fencedCodeBlocks true
          ;:name "markdown"}
   ;:theme "neo"
   ;:styleActiveLine true
   ;:extraKeys {"Ctrl-Space" exec-query-at-point}})

;(defn code-editor [attrs]
  ;(let [element-id (str "codemirror_" (gensym))]
    ;(r/create-class
     ;{:reagent-render
      ;(fn [attrs] [:div.code-editor
                   ;[:textarea
                    ;{:id element-id
                     ;:defaultValue (str/trim-newline (or (:value attrs) ""))}]])

      ;:component-will-unmount
      ;(fn [this]
        ;(.toTextArea (aget this "CodeMirrorInstance")))

      ;:component-did-mount
      ;(fn [this]
        ;(.log js/console "[code-editor] arguments:" (aget (aget this "props") "argv"))

        ;(let [argv (aget (aget this "props") "argv")
              ;[_ {:keys [value on-change on-blur options]}] argv
              ;cm-options (-> default-options
                             ;(merge {:value (str/trim-newline (or value ""))})
                             ;(merge (or options {}))
                             ;(clj->js))
              ;element (.getElementById js/document element-id)
              ;codemirror (.fromTextArea js/CodeMirror element
                                        ;cm-options)]

          ;(.log js/console "CodeMirror options" cm-options)

          ;(.focus codemirror)
          ;(.on codemirror "change" (fn [cm]
                                     ;(when on-change
                                       ;(on-change (.getValue cm)))))
          ;(when on-blur (.on codemirror "blur" #(on-blur)))

          ;(aset this "CodeMirrorInstance" codemirror)
          ;(aset element "CodeMirrorInstance" codemirror)))})))
