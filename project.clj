(defproject aidbox-ui "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.495" :scope "provided"]
                 [cljsjs/react-with-addons "15.4.2-2"]
                 [reagent "0.6.1" :exclusions [cljsjs/react]]
                 [re-frame "0.9.2" :exclusions [cljsjs/react]]
                 [reagent-utils "0.2.1" :exclusions [cljsjs/react]]
                 [re-frisk "0.4.4" :exclusions [cljsjs/react]]
                 [binaryage/devtools "0.9.2"]
                 [hiccup "1.0.5"]
                 [cljs-http "0.1.42"]
                 [route-map "0.0.4"]]

  :plugins [[lein-environ "1.1.0"]
            [lein-cljsbuild "1.1.5"]
            [lein-cooper "1.2.2"]
            [lein-ancient "0.6.10"]
            [lein-asset-minifier "0.3.2"
             :exclusions [org.clojure/clojure]]]

  :cooper {"sass" ["scripts/watch-sass.sh"]}

  :min-lein-version "2.5.0"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :resource-paths ["resources"]

  :minify-assets
  {:assets
   {"resources/public/css/site.min.css" "resources/public/css/site.css"}}

  :figwheel
  {:http-server-root "public"
   :server-port 3000
   :nrepl-port 7003
   :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"
                      "cider.nrepl/cider-middleware"]
   :css-dirs ["resources/public/css"]}


  :profiles {:dev {:repl-options {:init-ns aidbox-ui.repl
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

                   :dependencies [[ring/ring-mock "0.3.0"]
                                  [ring/ring-devel "1.5.1"]
                                  [prone "1.1.4"]
                                  [figwheel-sidecar "0.5.10-SNAPSHOT"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                                  [pjstadig/humane-test-output "0.8.1"]]

                   :source-paths ["src/cljs" "src/clj" "env/dev/clj"]
                   :plugins [[lein-figwheel "0.5.10-SNAPSHOT"]
                             ]

                   :env {:dev true}

                   :cljsbuild
                   {:builds
                    {:ui {:source-paths ["src/cljs" "src/clj" "env/dev/cljs"]
                          :compiler
                          {:main "aidbox-ui.dev"
                           :asset-path "/js/out"
                           :output-to "resources/public/js/ui.js"
                           :output-dir "resources/public/js/out"
                           :source-map true
                           :optimizations :none
                           :pretty-print  true

                           :foreign-libs [{:file "resources/public/vendor/codemirror/codemirror.js"
                                           :provides ["vendor.codemirror"]}
                                          {:file "resources/public/vendor/markdownit/markdown-it.js"
                                           :provides ["vendor.markdownit"]}
                                          {:file "resources/public/vendor/highlight-js/highlight.js"
                                           :provides ["vendor.highlightjs"]}]

                           :externs ["resources/public/vendor/codemirror/externs.js"
                                     "resources/public/vendor/highlight-js/externs.js"
                                     "resources/public/vendor/markdownit/markdown-it-externs.js"]}}}}}

             :prod {:source-paths ["src/cljs" "src/clj"]
                    :cljsbuild
                    {:builds
                     {:ui {:source-paths ["src/cljs" "src/clj" "env/prod/cljs"]
                           :compiler
                           {:main "aidbox-ui.prod"
                            :foreign-libs [{:file "resources/public/vendor/codemirror/codemirror.js"
                                            :provides ["vendor.codemirror"]}
                                           {:file "resources/public/vendor/markdownit/markdown-it.js"
                                            :provides ["vendor.markdownit"]}
                                           {:file "resources/public/vendor/highlight-js/highlight.js"
                                            :provides ["vendor.highlightjs"]}]

                            :externs ["resources/public/vendor/codemirror/externs.js"
                                      "resources/public/vendor/highlight-js/externs.js"
                                      "resources/public/vendor/markdownit/markdown-it-externs.js"]

                            :output-to "resources/public/js/ui.js"
                            :output-dir "resources/public/js/out"
                            :optimizations :advanced
                            :pretty-print  false}}}}}})
