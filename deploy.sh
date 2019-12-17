#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

if [[  -z "$GITHUB_TOKEN" ]]; then
  exit 0
fi
# 生成静态文件
npm run build

# 进入生成的文件夹
cd .vuepress/dist

# 如果是发布到自定义域名
# echo 'susuyan.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<susuyan>/<susuyan>.github.io.git master:gh-pages

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f "https://susuyan:$GITHUB_TOKEN@github.com/susuyan/blog.git" master:gh-pages

cd -

rm -rf .vuepress/dist