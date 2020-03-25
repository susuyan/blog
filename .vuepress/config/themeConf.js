const sidebar = require("./sidebar-auto.js");

module.exports = {
  base: "blog",
  repo: "https://github.com/susuyan/blog",
  navbar: true,
  editLinks: false,
  lastUpdated: "更新于",
  sidebar,
  nav: [
    {
      text: "Home",
      link: "/"
    },
    {
      text: "About",
      link: "/About"
    },
    {
      text: "Projects",
      link: ""
    },
    {
      text: "Wiki",
      link: ""
    },
    {
      text: "Likes",
      link: ""
    },
    {
      text: "Now",
      link: ""
    },
    {
      text: "CV",
      link: ""
    },
    {
      text: "OpenSource",
      items: [
        {
          text: "Swift 开源库",
          link: "/passages/2019-12-16-swift-open-source/"
        }
      ]
    }
  ]
};
