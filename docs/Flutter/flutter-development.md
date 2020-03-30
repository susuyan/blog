---
date: "2019-12-21"
title: "搭建 Flutter Mac 开发环境"
type: "blog"
---

# 搭建 Flutter 开发环境

本篇主要内容是：

- Flutter For Mac OS 安装
- 使用 VSCode 来开始第一个 Flutter 项目

## 安装 Flutter

- 下载 Flutter SDK

```sh
$ mkdir ~/development & cd ~/development
$ git clone https://github.com/flutter/flutter.git
```

- 设置环境变量

```sh
$ cd ~

// 设置环境变量
$ vi .zshrc
$ source .zshrc
```

```sh
# Flutter
// 设置环境变量
 export PATH="$PATH:[PATH_TO_FLUTTER_GIT_DIRECTORY]/flutter/bin"
// Flutter 相关镜像
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

验证一下环境变量

```sh
$ echo $PATH
$ which flutter
```

- 运行 Flutter

```sh
// 来检查flutter环境
$ flutter doctor
```

## 配置 VSCode

- 安装插件

Flutter、Flutter Files

- 新建一个 flutter 项目

`cmd + shift + p` 会在顶部弹出窗口，选择 flutter project，输入 my_app, `enter`。

- 运行 flutter

`F5` 运行 flutter 项目，选择 iOS 模拟器。（需要一些编译时间，耐心等待）

![first-flutte-w442](media/first-flutter.png)
