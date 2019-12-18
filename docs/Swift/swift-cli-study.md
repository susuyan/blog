---
title: "Swift CLI Project"
date: "2019-12-18"
permalink: "2019-12-18-swift-cli-study"
---

# 使用 Swift 命令行

初始化一个基本的 Package：

```sh
mkdir test
cd test
swift package init --type executable
```

关于 Package.swift 文件：

- **Products：**可执行文件和库，它们是包的最终产品
- **Dependencies：**我们将在这个包中使用的所有其他库
- **Targets：**这些是包的基本块，如测试套件或主模块，可以是相互依赖的。 类似于测试套件引用主源模块

main.swift :

程序的入口

## 实践

现在有一个这样的需求，命令行创建 md 文件，并插入固定模板。

```sh
wrift new file "title"
```

- 命令行窗口命令解析

使用[SwiftCLI](https://github.com/jakeheis/SwiftCLI)就可以完成命令和参数的解析。

- 框架目录接口

如果你想自己创建一个脚本项目，怎么组织自己的文件。那么你就可以参考[Mint](https://github.com/yonaskolb/Mint)

## 打包程序

mint

makefile

homebrew
