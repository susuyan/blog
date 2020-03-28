---
date: "2019-12-29"
title: "Flutter 渲染机制"
---

# Flutter 渲染机制

![](https://raw.githubusercontent.com/flutter/engine/master/docs/flutter_overview.svg?sanitize=true)

梳理 flutter 中的渲染机制。在简单的熟悉 flutter 的开发环境，写几个小页面后，有下面的几个问题：

- UI 页面的 widget 是如何渲染到屏幕的
- Element 和 widget 的关系
- widget 之间的通信

## 了解渲染机制

大多页面 UI 的开发，都是在编写各种 widget 的组合。通过 child，childrens 等，构建一个树形的这么一个结构。
![](https://3.bp.blogspot.com/-aVRByYmE1Ew/XFJxLxXPgqI/AAAAAAAAAIU/ebGZcAwED_gYd0qIW-51IHxJ8P1ZZEFTwCK4BGAYYCw/s1600/Screenshot%2B2019-01-31%2Bat%2B9.23.08%2BAM.png)

- Element 和 widget 的关系

widget => element => render_object

![](https://pic4.zhimg.com/v2-c01860ba72b7c011dc7a2e705158c667.jpg)

- widget 之间的通信

## See Also

- [Rendering in Flutter](https://flutter.dev/docs/resources/rendering)
