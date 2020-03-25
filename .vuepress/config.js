const themeConf = require("./config/themeConf");
const mdConf = require("./config/markdown");

module.exports = {
  title: "苏苏炎",
  description: " ",
  themeConfig: themeConf,
  markdown: mdConf,
  plugins: [
    require("./plugins/my-router"),
    require("./plugins/my-loader"),
    require("vuepress-plugin-viewer"),
    "@vuepress/back-to-top",
    ["@vuepress/google-analytics", { ga: "UA-63856296-2" }]
  ]
};
90