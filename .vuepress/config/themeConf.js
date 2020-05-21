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
      link: "/about/"
    },
    {
      text: "Projects",
      link: "/projects/"
    },
    {
      text: "Blog",
      link: "/building/"
    },
    {
      text: "Wiki",
      link: "https://www.notion.so/Wiki-98693a0e4ca94d6e87c0700e4a444664"
    },
    {
      text: "Likes",
      link: "/likes/"
    },
    {
      text: "Now",
      link: "/now/"
    },
    {
      text: "CV",
      link: "/cv/"
    },
    {
      text: "OpenSource",
      items: [
        {
          text: "Swift 开源库",
          link: "/blog/swift-open-source"
        }
      ]
    }
  ]
};
