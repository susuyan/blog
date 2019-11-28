#!/usr/bin/env sh

# throw error
set -e

if [[ -z "$CODING_TOKEN"  || -z "$GITHUB_TOKEN" ]]; then
  exit 0
fi

# build static
npm run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:<susuyan>/<susuyan>.github.io.git master

cd -

rm -rf .vuepress/dist
