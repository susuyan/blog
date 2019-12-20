const sidebar = require("./sidebar-auto.js");

module.exports = {
  base: "blog",
  repo: "https://github.com/susuyan/blog",
  navbar: true,
  editLinks: true,
  lastUpdated: "更新于",
  sidebar,
  nav: [
    {
      text: "最新",
      link: "/guide/"
    },
    {
      text: "iOS",
      items: [
        {
          text: "iOS-work",
          link: "/ios-work/"
        }
      ]
    },
    {
      text: "Swift",
      items: [
        {
          text: "Swift 开源库",
          link: "/passages/2019-12-16-swift-open-source/"
        }
      ]
    },
    {
      text: "其他",
      items: [
        {
          text: "面试题",
          link: "/passages/2019-12-17-interview/"
        },
        {
          text: "数据结构",
          link: "/passages/2019-12-16-data-struct/"
        },
        {
          text: "算法",
          link: ""
        }
      ]
    },
    {
      text: "关于我",
      link: "/About"
    }
  ]
};
