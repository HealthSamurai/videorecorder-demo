(ns aidbox-ui.cookies
  (:refer-clojure :exclude [get set!])
  (:require-macros [cljs.core.async.macros :as m :refer [go alt!]])
  (:require [goog.net.cookies :as gcookies]
            [cljs.core.async :as a]
            [re-frame.core :as rf]
            [cljs.reader :as reader]))

(defn get-cookie "Returns the cookie after parsing it with cljs.reader/read-string."
  [k] (reader/read-string (or (.get goog.net.cookies (name k)) "nil")))

(defn set-cookie "Stores the cookie value using pr-str."
  [k v] (.set goog.net.cookies (name k) (pr-str v)))

(defn remove! [k] (.remove goog.net.cookies (name k)))

(defn watch-expires [k f]
  (go (loop []
        (a/<! (a/timeout 500))
        (println "WATCH" k  (get-cookie k))
        (if-not (get-cookie k)
          (f)
          (recur)))))

(rf/reg-cofx
 ::get
 (fn [coeffects key]
   (assoc-in coeffects [:cookie key] (get-cookie key))))

(rf/reg-fx
 ::set
 (fn [{k :key v :value :as opts}]
   (set-cookie k v)))
