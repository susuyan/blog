const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const logger = require("tracer").colorConsole();
const dirTree = require("directory-tree");

const docsRoot = path.join(__dirname, "..", "docs");
const wikisRoot = path.join(__dirname, "..", "wikis");
const sidebarPath = path.join(
  __dirname,
  "..",
  ".vuepress",
  "config",
  "sidebar-auto.js"
);
/*
<% for(let variable of variables) { %>
  const <%- variable.name %> = <%- JSON.stringify(variable.js); %>
<% } %>
*/
const template = `
module.exports = {
  <% for (let variable of variables) { %>
    "<%- variable.path %>": <%- variable.name %>,
  <% } %>
}
`;

const template1 = `
module.exports = {
 '/wikis/': [ <% for (let variable of variables) { %>
    {
      title: "<%- variable.title %>",
      collapsable: <%- variable.collapsable %>,
      children: <%- JSON.stringify(variable.children) %>
    },
  <% } %>]
}
`;

main();

/**
 * 主体函数
 */
function main() {
  let variables = [];

  // const tocs = readTocs(docsRoot);
  // tocs.forEach((toc) => {
  //   const js = mapTocToSidebar(toc);
  //   if (!js.length) {
  //     return;
  //   }

  //   variables.push({
  //     path: `/docs/${path.basename(toc)}/`,
  //     name: path.basename(toc).replace(/ /g, "_"),
  //     js,
  //   });
  // });

  variables = sideWiki();

  // sideWiki();

  fs.writeFileSync(sidebarPath, ejs.render(template1, { variables }));
}

/**
 * 读取指定目录的文件夹作为不同的目录
 * @param {String} root
 */
function readTocs(root) {
  const result = [];
  const files = fs.readdirSync(root);
  files.forEach((name) => {
    const file = path.resolve(root, name);
    if (fs.statSync(file).isDirectory()) {
      result.push(file);
    }
  });
  return result;
}

function dirSidebar(rootPath, subPath = "") {
  const _root = dirTree(path.join(rootPath, subPath), { extensions: /\.md/ });
  let sidebar = [];

  if (_root && typeof _root === "object") {
    const rootChildren = _root.children;
    let _path = "";
    function makeSidebar(parent, children) {
      children.forEach((child) => {
        const name = path.parse(child.name).name;
        // console.log(name);
        if (name === "README") {
          sidebar.push(parent ? path.join(parent, "/") : parent);
        } else if (child.type === "file") {
          sidebar.push(path.join(parent, name));
        } else if (child.type === "directory") {
          _path = path.join(parent, child.name);
          makeSidebar(_path, child.children);
        }
      });
    }

    makeSidebar(subPath, rootChildren);
  }

  return sidebar;
}

/**
 * 将对应目录映射为对应的边栏配置
 * @param {String} root
 * @param {String} prefix
 */
function mapTocToSidebar(root, prefix) {
  prefix = prefix || "";
  let sidebar = [];

  const files = fs.readdirSync(root);
  files.forEach((filename) => {
    const file = path.resolve(root, filename);
    const stat = fs.statSync(file);
    let [order, title, type] = filename.split(".");

    order = parseInt(order, 10);
    if (isNaN(order) || order < 0) {
      return;
    }

    if (sidebar[order]) {
      logger.warn(
        `For ${file}, its order has appeared in the same level directory. And it will be rewritten.`
      );
    }

    if (stat.isDirectory()) {
      sidebar[order] = {
        title,
        collapsable: false,
        children: mapTocToSidebar(file, prefix + filename + "/"),
      };
    } else {
      if (type !== "md") {
        logger.error(`For ${file}, its type is not supported.`);
        return;
      }
      sidebar[order] = [prefix + filename, title];
    }
  });

  sidebar = sidebar.filter((item) => item !== null && item !== undefined);
  return sidebar;
}

function sideWiki() {
  /*
    1. 处理根目录
    2. 一级目录
    3. 文件路径拼接
    
  */

  const rootDir = dirTree(wikisRoot, { extensions: /\.md/ });

  const tocs = rootDir.children;
  let variables = [];

  let item = new createToc("Wiki", false, []);

  tocs.forEach((toc) => {
    if (toc.type === "file") {
      variables.push(item);
    } else if ((toc.type === "directory") & (toc.children.length > 0)) {
      item = new createToc(toc.name, false, []);
      if ((toc.children.length > 0) & (toc.name != "media")) {
        item.children = dirToc(toc.path, item.name);
      }
      variables.push(item);
    }
  });

  return variables;
}

function dirToc(itemTree = "") {
  let curentDir = dirTree(itemTree);
  let fileArr = [];
  curentDir.children.map((item) => {
    if (item.type === "file") {
      fileArr.push(curentDir.name + "/" + item.name);
    }
  });
  console.info(fileArr);
  return fileArr;
}

function createToc(title = "", collapsable = false, children = []) {
  this.title = title;
  this.collapsable = collapsable;
  this.children = children;
}

/**
 * 读取指定路径下所有目录，作为sidebar一级
 *
 * @returns
 */
function readDir(rootPath) {
  const rootDirs = dirTree(rootPath, {
    extensions: /\/media/,
  }).children.filter(
    (dir) => (dir.name != "README") & (dir.children.length > 0)
  );

  return rootDirs;
}

