---
title: "Vuepress blog"
date: "2019-12-02"
permalink: "Vuepress-blog"
---

# Vuepress 实践

[Vuepress](https://vuepress.vuejs.org/zh/guide/) 作为自己的文档输出工具，真是挺不错的。近期，陆陆续续要将散落在各个地方的一些记录，整理起来，不断完善自己。

花了一天的时间，把 Node.js 撸了一遍，才算把 Vuepress 搭建完成。

记录一下中间的一些过程。往后的插件完善，也在这里进行补充。

## 安装

```sh
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 创建项目目录
mkdir blog && cd blog

# 将 VuePress
yarn add  vuepress # 或者：npm install  vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md

# 构建静态文件
vuepress build .

# 开始写作
vuepress dev .

```

## 部署

`./deploy.sh`

```sh
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
```

## Travis CI

`./travis.yml`

```sh
branches:
  only:
    - master
language: node_js
node_js:
  - "10"
install:
  - npm install
script:
  - npm run check
  - ./deploy.sh
```

## 插件

- [侧边栏分组插件](https://github.com/shanyuhai123/vuepress-plugin-auto-sidebar)

