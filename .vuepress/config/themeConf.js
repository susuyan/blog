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
      link: ""
    },
    {
      text: "Wiki",
      link: "/wikis/"
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
