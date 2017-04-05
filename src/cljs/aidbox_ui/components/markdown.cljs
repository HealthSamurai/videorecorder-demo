(ns aidbox-ui.components.markdown
  (:require [reagent.core :as r]
            [cljs.pprint :refer [pprint]]
            [clojure.string :as str]
            [clojure.walk :refer [keywordize-keys]]
            [aidbox-ui.components.code-block :as codbl :refer [code-block]]
            [vendor.markdownit]))

(def markdown-config {:breaks true
                      :typographer true
                      :html true})

(defn- token->clj [obj]
  (let [r (-> (fn [result key]
                (let [v (aget obj key)]
                  (if (= "function" (goog/typeOf v))
                    result
                    (assoc result (keyword key) (js->clj v)))))
              (reduce {} (.getKeys goog/object obj)))

        r (if (:children r)
            (assoc r :children
                   (map token->clj (:children r)))
            r)

        r (assoc r :type (keyword (:type r)))]
    r))

(defn- parse-tokens [md]
  (let [mdit (-> (js/markdownit. "default")
                 (.configure (clj->js markdown-config)))]
    (map token->clj (.parse mdit md (clj->js {})))))

(defn- build-ast [tokens]
  (if (empty? tokens)
    {:type :root
     :children []
     :content ""}

    (loop [paths-stack '()
           result {:type :root
                   :children []}
           [t & tail] tokens]

      (let [cur-path (or (first paths-stack) [:children])
            new-result (case (:nesting t)
                         1 (update-in result cur-path
                                      conj {:type (keyword (str/join "-" (butlast (str/split (:type t) #"_"))))
                                            :children []
                                            :opener t})
                         -1 result ;; (update-in result (butlast cur-path) assoc :closer t)
                         0 (update-in result cur-path conj (if (empty? (:children t))
                                                             t
                                                             (assoc t :children
                                                                    (:children (build-ast (:children t))))))
                         (throw (js/Error. (str "Unknown nesting: " (pr-str t)))))
            new-stack (case (:nesting t)
                        1 (conj paths-stack
                                (conj cur-path
                                      (count (get-in result cur-path))
                                      :children))
                        -1 (rest paths-stack)
                        0 paths-stack)]

        (if (empty? tail)
          new-result
          (recur new-stack new-result tail))))))

(defn- node-to-hiccup [{:keys [type children content] :as node}]
  (case type
    :root (into [:article.markdown] (map node-to-hiccup children))
    :text content
    :fence (let [lang (keyword (str/trim (:info node)))]
             [codbl/code-block lang content])
    :code_inline [:code content]
    :softbreak " "
    :hardbreak [:br]
    :image [:img (->> (:attrs node)
                      (flatten)
                      (apply hash-map)
                      (keywordize-keys))]

    :inline (into [nil] (map node-to-hiccup children))

    (let [content (mapv node-to-hiccup children)
          elem [(keyword (or (:tag node) (:tag (:opener node))))]]

      #_(when (nil? (first elem))
          (.log js/console node))

      (into (if (empty? (:attrs (:opener node)))
              elem
              (conj elem (->> (:attrs (:opener node))
                              (flatten)
                              (apply hash-map)
                              (keywordize-keys))))

            (if (nil? (first (first content)))
              (rest (first content))
              content)))))

(defn markdown [md]
  (-> (or md "bang")
      (parse-tokens)
      (build-ast)
      (node-to-hiccup))
  #_[:pre (with-out-str (pprint (-> (or md "bang")
                                    (parse-tokens)
                                    (build-ast)
                                    (node-to-hiccup))))])
