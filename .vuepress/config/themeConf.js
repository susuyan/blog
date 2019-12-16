const sidebar = require("./sidebar-auto.js");

module.exports = {
    
    lastUpdated: '更新于',
    sidebar,
    nav: [
      {
        text: '数据结构与算法',
        items: [
          { text: '数据结构', link: '/passages/2019-12-16-data-struct/' },
          { text: '算法', link: ''}
        ]
      },
      {
        text: 'iOS',
        items: [
          {
            text: 'iOS-work',
            link: '/ios-work/'
          }

        ]
      },
      {
        text: 'Swift',
        items: [
          {
            text: 'Swift 开源库',
            link: '/passages/2019-12-16-swift-open-source/'
          }

        ]
      },
      { 
        text: '关于我',
        link: '/About'
      }

    ]
};
