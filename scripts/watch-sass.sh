#!/bin/bash

echo "watching Sass changes..."

shopt -s expand_aliases
alias on_change="while IFS= read -r -d ''"
monitor()
{
    [[ $1 == "-i" ]] && { echo -n -e "\0"; shift; }
    fswatch -i '\.scss$' -0 "$@"
}

monitor -i src/sass | on_change path
do
    echo "Re-building SASS (due to change in ${path})"
    sassc --style compressed \
          src/sass/index.scss \
          resources/public/css/site.css
done
