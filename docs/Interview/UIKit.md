---
title: "面试-UIKit"
date: "2019-12-17"
permalink: "2019-12-17-interview-uikit"
---

# UIKit 相关问题

- 在一个 UI 的正中间实现一个正方形的红色视图有几种方式？
- 手触碰到屏幕的时候，响应机制是怎样的？第一响应者是谁？追问 UIView 和 UIResponse 的关系是什么？

- UIViewController 的生命周期是什么？追问 UIViewController 只 alloc 而没用到的时候，UIViewController 的 view 是否加载了？如果没有加载那什么时候加载？

- 直接用 UILabel 和自己用 DrawRect 画 UILabel，哪个性能好？为什么？哪个占用的内存少？为什么?

- 当画了一个图，就是 subview 有一部分 view 飘出来了，问点击飘出来的部分能不能响应点击事件？

- 你认为自动布局怎么实现的

- 哪些场景可以触发离屏渲染？（知道多少说多少）
- 异步绘制原理
- 有一个题是考.transform 属性的，做了结果后，被问是否可以自己实现.transform 属性（其实就是问.transform 的实现，然而并不会…）
- 怎么判断某个 cell 是否显示在屏幕上

## 事件响应链

- 用户点击屏幕，系统是怎么找到一个 view 并决定由它来响应事件的（传递链和响应链）
-

## 动画

- 用贝塞尔曲线画一个先慢后快的什么东西
- 你的动画 loading 怎么做的？
