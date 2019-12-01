const {
    mdConf,
    themeConf,
    localesConf,
  } = require('./config')
  
  module.exports = {
    locales: localesConf,
    
    // markdown: mdConf,
    // themeConfig: themeConf,
    // plugins: [
    //   require('./plugins/my-router'),
    //   require('./plugins/my-loader'),
    //   require('vuepress-plugin-viewer'),
    //   '@vuepress/back-to-top',
    //   [ 
    //     '@vuepress/google-analytics', { 'ga': 'UA-63856296-2' }
    //   ],
    //   [
    //     '@vuepress/pwa',
    //     {
    //       serviceWorker: true,
    //       updatePopup: {
    //         message: "发现页面有新内容",
    //         buttonText: "刷新"
    //       }
    //     }
    //   ],
    //   [
    //     'vuepress-plugin-comment',
    //     {
    //       choosen: 'gitalk', 
    //       options: {
    //         clientID: '7160032e9a31eb9e2259',
    //         clientSecret: process.env.clientSecret || 'eb34433cb92d133b0c912e4c9d1dfed7c82bc47f',
    //         repo: 'blog',
    //         owner: 'susuyan',
    //         admin: ['susuyan'],
    //         id: '<%- frontmatter.commentid || frontmatter.permalink %>',      // Ensure uniqueness and length less than 50
    //         distractionFreeMode: false,  // Facebook-like distraction free mode
    //         labels: ['Gitalk', 'Comment'],
    //         title: '「评论」<%- frontmatter.title %>',
    //         body: '<%- frontmatter.title %>：<%- window.location.origin %><%- frontmatter.to.path || window.location.pathname %>'
    //       }
    //     }
    //   ]
    // ]
  }