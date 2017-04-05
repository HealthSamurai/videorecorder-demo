(ns aidbox-ui.components.core)

;; (def spinner [:span.dots-spinner [:span] [:span] [:span]])

;; (defn- chan? [c]
;;   (instance? cljs.core.async.impl.channels/ManyToManyChannel c))

;; (defn- make-button-onclick-handler [state original-onclick]
;;   (fn [& args]
;;     (let [result (apply original-onclick args)]
;;       (when (chan? result)
;;         (do (reset! state :loading)
;;             (go (<! result)
;;                 (reset! state :finished)))))))

;; (defn button [kind title on-click]
;;   (let [state (r/atom nil)
;;         on-click (make-button-onclick-handler state on-click)]

;;     (fn []
;;       (let [st @state
;;             class (if (= st :loading) ".spinner-container.disabled" "")
;;             content (into [title] (if (= st :loading) [spinner] []))]
;;         (into [(keyword (str "button.btn.btn-" (name kind) class))
;;                {:on-click on-click}] content)))))

(defn raw-html [html-content]
  [:span {"dangerouslySetInnerHTML"
          #js{:__html html-content}}])

(defn icon [n & body]
  `[~(keyword (str "i.fa.fa-" (name n))) ~@body])
