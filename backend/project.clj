(defproject heartsmart/backend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :plugins [[lein-ancient "0.6.10"]]
  :dependencies [[ring "1.5.1"]
                 [ring/ring-defaults "0.2.3"]
                 [ring/ring-json "0.4.0"]
                 [route-map "0.0.4"]
                 [cheshire "5.7.0"]
                 [http-kit "2.2.0"]
                 [org.clojure/clojure "1.9.0-alpha15"]])
