## VideoRecorder
=============

[Videorecorder demo page](https://videorecorder.health-samurai.io/index.html)


[![Build Status](https://travis-ci.com/HealthSamurai/videorecorder-demo.svg?token=BDkPmPwZvvYHsy2jdxs9&branch=master)](https://travis-ci.com/HealthSamurai/videorecorder-demo)



```
lein clean

sass src/sass/index.scss:resources/public/css/site.css --style compressed --no-cache

lein with-profile prod cljsbuild once ui
```

Install `sassc` with Homebrew/make.

To start web server & SASS watcher, run:

    lein cooper

Then start your damn repl and invoke `(start-fw)`.
