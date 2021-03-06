(defproject heartsmart/backend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url ""
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :plugins [[lein-ancient "0.6.10"]]

  :main heartsmart.backend

  :resource-paths ["resources"]

  :uberjar-name "videorecorder.jar"
  :dependencies [[ring "1.5.1"]
                 [ring/ring-defaults "0.2.3"]
                 [ring/ring-json "0.4.0"]
                 [environ "1.1.0"]
                 [route-map "0.0.4"]
                 [ring-cors "0.1.9"]
                 [cheshire "5.7.0"]
                 [hiccup "1.0.5"]
                 [http-kit "2.2.0"]
                 [org.clojure/clojure "1.9.0-alpha15"]])
