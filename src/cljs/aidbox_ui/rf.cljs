(ns aidbox-ui.rf
  (:require [re-frame.core :as rf]
            [re-frame.interceptor :refer [->interceptor get-effect get-coeffect assoc-coeffect assoc-effect]]
            [re-frame.loggers :refer [console]]
            [clojure.data :as data]))

(def debug
  "An interceptor which logs data about the handling of an event.
  Includes a `clojure.data/diff` of the db, before vs after, showing
  the changes caused by the event handler.
  You'd typically want this interceptor after (to the right of) any
  path interceptor.
  Warning:  calling clojure.data/diff on large, complex data structures
  can be slow. So, you won't want this interceptor present in production
  code. See the todomvc example to see how to exclude interceptors from
  production code."
  (->interceptor
   :id     :debug
   :before (fn debug-before
             [context]
             (.group js/console "%cre-frame event"
                     "background-color: #74b74c; color: #fff; padding: 2px;"
                     (get-coeffect context :event))
             context)
   :after  (fn debug-after
             [context]
             (let [orig-db (get-coeffect context :db)
                   new-db  (get-effect   context :db ::not-found)]
               (if (= new-db ::not-found)
                 (console :log "No :db changes caused by event")
                 (let [[only-before only-after] (data/diff orig-db new-db)
                       db-changed?    (or (some? only-before) (some? only-after))]
                   (if db-changed?
                     (do (console :log "before:" only-before)
                         (console :log "after :" only-after))
                     (console :log "no app-db changes caused by event"))))
               (.groupEnd js/console)
               context))))

(def global-interceptor debug)

(defn reg-event-db
  ([id db-handler]
   (rf/reg-event-db id [global-interceptor] db-handler))

  ([id interceptors db-handler]
   (rf/reg-event-db id (into [global-interceptor] interceptors) db-handler)))

(defn reg-event-fx
  ([id handler]
   (rf/reg-event-fx id [global-interceptor] handler))

  ([id interceptors handler]
   (rf/reg-event-fx id (into [global-interceptor] interceptors) handler)))
