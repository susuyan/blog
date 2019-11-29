const sidebar = require("./sidebar-auto.js");

module.exports = {
  repo: "susuyan/blog",
  navbar: true,
  editLinks: false,
  lastUpdated: "更新于",
  sidebar,
  nav: [
   //iOS
   {
       text: "Swift",
       items: [
        {
            text: "The Swift",
            link: ""
        },
        {
            text: "The iOS",
            link: ""
        },
        {
          text: "The Xcode",
          link: ""
        },
       ]
   },
   {
    text: "数据结构与算法",
    items: [
     {
         text: "数据结构",
         link: ""
     },
     {
         text: "算法",
         link: ""
     },
     {
       text: "设计模式",
       link: ""
     },
    ]
  }


  ]
};
