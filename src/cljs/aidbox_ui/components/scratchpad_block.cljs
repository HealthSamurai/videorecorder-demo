(ns aidbox-ui.components.scratchpad-block
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [aidbox-ui.rf :refer [reg-event-db reg-event-fx]]
            [aidbox-ui.components.markdown :as md]
            [aidbox-ui.components.code-editor :as ce]
            [aidbox-ui.components.code-block :as cb]
            [aidbox-ui.components.spinner :refer [spinner-container gen-spinner-id]]
            [aidbox-ui.components.sql-result-table :as srt]
            [clojure.string :as str]))

(def edit-enabled? false)

(def css-transition-group
  (r/adapt-react-class js/React.addons.CSSTransitionGroup))

(defn- http-query-to-fx [b block-idx spinner-id]
  (try
    (let [[head body] (str/split (str/trim b) #"\n\n" 2)
          head-lines (str/split head #"\n")
          [method url] (str/split (first head-lines) #" " 2)
          headers (reduce (fn [acc l]
                            (let [[header-name header-value] (str/split l #":" 2)]
                              (when-not (and header-name header-value)
                                (throw (js/Error. "Malformed HTTP query")))

                              (assoc acc (str/trim header-name) (str/trim header-value))))
                          {} (rest head-lines))]
      {:http {:method method
              :url (str "http://frontend.dev.aidbox.io/" url)
              :headers headers
              :body body
              :spinner-id spinner-id
              :on-success [:scratchpad/show-result block-idx]
              :on-error [:scratchpad/show-result block-idx]}})

    (catch :default e
      {:dispatch [:scratchpad/show-result block-idx (aget e "message")]})))

(defn- sql-query-to-fx [b block-idx spinner-id]
  {:http {:method "GET"
          :url (str "http://frontend.dev.aidbox.io/db")
          :params {:sql b}
          :spinner-id spinner-id
          :on-success [:scratchpad/show-result block-idx]
          :on-error [:scratchpad/show-result block-idx]}})

(defn- query-to-fx [type body block-idx spinner-id]
  (case type
    :http (http-query-to-fx body block-idx spinner-id)
    :sql (sql-query-to-fx body block-idx spinner-id)
    {}))

(reg-event-fx :scratchpad/exec-query
              (fn [{:keys [db]} [_ type body block-idx spinner-id]]
                (merge (query-to-fx type body block-idx spinner-id)
                       {:dispatch [:scratchpad/show-result block-idx nil]})))

(reg-event-db :scratchpad/show-result
              (fn [db [_ block-idx result]]
                (-> db
                    (assoc-in
                     [:scratchpad :blocks block-idx :expand-result]
                     (if result true false))
                    (assoc-in [:scratchpad :blocks block-idx :result] result))))

(reg-event-db :scratchpad/set-block-mode
              (fn [db [_ idx mode]]
                (assoc-in db [:scratchpad :blocks idx :mode] mode)))


(reg-event-fx :scratchpad/save-block
              (fn [{:keys [db]} [_ idx]]
                (let [content (get-in db [:scratchpad :blocks idx :content])]
                  (if (> (count content) 0)
                    {:dispatch [:scratchpad/set-block-mode idx :view]}
                    {:dispatch [:scratchpad/delete-block idx]}))))

(reg-event-db :scratchpad/delete-block
              (fn [db [_ idx]]
                (let [deleted (->> [:scratchpad :blocks]
                                   (get-in db)
                                   (map-indexed vector)
                                   (remove (comp (set [idx]) first))
                                   (map second)
                                   vec)]
                  (assoc-in db [:scratchpad :blocks] deleted))))

(reg-event-db :scratchpad/set-block-content
              (fn [db [_ idx content]]
                (assoc-in db [:scratchpad :blocks idx :content] content)))

(reg-event-db :scratchpad/toggle-block-query-result
              (fn [db [_ idx]]
                (let [result (get-in db [:scratchpad :blocks idx :result])
                      expand-result (get-in db [:scratchpad :blocks idx :expand-result])]
                  (if result
                    (assoc-in db [:scratchpad :blocks idx :expand-result] (not expand-result))
                    db))))

(reg-event-db :scratchpad/add-block-after
              (fn [db [_ idx type]]
                (let [blocks (get-in db [:scratchpad :blocks])
                      [before after] (split-at (+ idx 1) blocks)
                      default-opts {:content ""
                                    :mode :edit}
                      make-block-options #(case %
                                            :markdown (merge default-opts {:type :markdown})
                                            :http (merge default-opts {:type :code
                                                                       :lang :http})
                                            :sql (merge default-opts {:type :code
                                                                      :lang :sql}))
                      appended-blocks (vec (concat before [(make-block-options type)] after))]
                  (assoc-in db [:scratchpad :blocks] appended-blocks))))

(defn- run-button [type body block-idx spinner-id]
  [:a.btn-round.run
   {:title "Run"
    :on-click #(rf/dispatch [:scratchpad/exec-query type body block-idx spinner-id])}
   [:svg.icon.icon2x [:use {:xlink/href "#icon-run"}]]])

;; (def query-results-transitions
;;   {:transition-name "query-result"
;;    :transitionLeaveTimeout 300
;;    :transitionEnterTimeout 300
;;    :component "div"})

(defn- query-result [{{:keys [body status status-text success headers] :as result} :result block-type :type :as block} spinner-id]
  [spinner-container spinner-id {:class "noshade"}
   [:div.query-result {:class (when-not result "empty")}
    (when result
      (when (= block-type :http)
        [:div.http
         `[:p.headers.monospace
           [:span.status {:class ~(if success "success" "not-success")} ~(str status " " status-text)]
           [:br]
           ~@(interpose [:br]
                        (map (fn [[k v]] (str k ": " v))
                             headers))]

         [cb/code-block :json (.stringify js/JSON (clj->js body) nil 2)]]))]])

(defn scratchpad-block [block idx]
  (let [spinner-id (gen-spinner-id)]
    (fn [{:keys [content type mode result expand-result] :as block} idx]
      (let [edit? (= mode :edit)
            view? (not edit?)
            spinner-state @(rf/subscribe [:spinner/state spinner-id])
            ;; spinner-state true
            code-block? (or (= type :sql) (= type :http))
            content (or content "")
            switch-mode #(if (= % :view) :edit :view)
            block-class (->> [(when edit? "edit") (when (= content "") "new") (name type)]
                             (filter #(not= nil %))
                             (str/join " "))
            code-editor-default-params {:value content
                                        :on-change #(rf/dispatch [:scratchpad/set-block-content idx %])
                                        :on-blur #(rf/dispatch [:scratchpad/save-block idx])}]
        [:div.scratchpad-block
         (merge
          {:key idx :class block-class}
          (if edit-enabled?
            {:on-double-click #(rf/dispatch [:scratchpad/set-block-mode idx (switch-mode mode)] mode)}
            {}))

         (when edit-enabled?
           [:div.hover-buttons
            [:button.btn.btn-sm.btn-secondary.edit
             {:on-click #(rf/dispatch [:scratchpad/set-block-mode idx (switch-mode mode)])}
             (if edit? "Save" "Edit")]])

         (when edit-enabled?
           (let [button (fn [caption block-type btn-class]
                          [:button.btn
                           {:class btn-class
                            :on-click #(rf/dispatch [:scratchpad/add-block-after idx block-type])}
                           caption])]
             [:div.add-buttons-row
              [:button.btn.btn-sm.btn-secondary.show "Add"]
              (button "+Markdown" :markdown "btn-secondary")
              (button "+HTTP" :http "btn-primary")
              (button "+SQL" :sql "btn-danger")]))

         (if edit?
           [ce/code-editor
            (merge code-editor-default-params {:options {:mode (name type)}})]

           (if (= type :markdown)
             [md/markdown content]

             [:div.runnable-block
              (run-button type content idx spinner-id)
              [cb/code-block type content]]))

         (when (or spinner-state result)
           [query-result block spinner-id])]))))
