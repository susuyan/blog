// const sidebar = require("./sidebar-auto.js");

const sidebar = require("vuepress-sidebar-generator")

const getConfig = require("vuepress-bar")
const barConfig = getConfig(`${"/docs"}/..`)

module.exports = {
  repo: "susuyan/blog",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  nav: [
    { text: 'Vue', link: '/guide/' },
    { text: 'External', link: 'https://google.com' },
  ]
};
