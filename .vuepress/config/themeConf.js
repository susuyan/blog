// const sidebar = require("./sidebar-auto.js");

const sidebar = require("vuepress-sidebar-generator")

module.exports = {
  repo: "susuyan/blog",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  sidebar: sidebar.getSidebarList(),
  nav: [
    { text: 'Guide', link: '/guide/' },
    { text: 'External', link: 'https://google.com' },
  ]
};
