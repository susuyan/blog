  const {
    mdConf,
    themeConf,
    localesConf,
  } = require('./config')
  
  module.exports = {
    title: '苏苏炎', 
    description: '坚持记录。 没有丰富的储备，你就无法去创造，你就不可能无中生有，你脑子里有东西，才可能去创造。',
    locales: localesConf,
    base: "/blog/",
    themeConfig: {
      nav: [
        {
          text: 'Languages',
          items: [
            { text: 'Chinese', link: '/language/chinese/' },
            { text: 'Japanese', link: '/language/japanese/' }
          ]
        },
        {
          text: 'Swift',
          link: ''
        }

      ]
    },    
    markdown: mdConf,
    plugins: [
      require('./plugins/my-router'),
      require('./plugins/my-loader'),
      require('vuepress-plugin-viewer'),
      '@vuepress/back-to-top',
      [ 
            '@vuepress/google-analytics', { 'ga': 'UA-63856296-2' }
      ],


    ]
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