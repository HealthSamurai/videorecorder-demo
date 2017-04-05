#!/bin/bash

echo "Compiling SASS..."

sassc --style compressed \
      src/sass/index.scss \
      resources/public/css/site.css

echo "Done"
