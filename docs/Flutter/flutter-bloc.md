---
date: "2019-12-26"
title: "Flutter BLoC pattern"
---

# Flutter BLoC pattern

设计应用程序的架构通常是应用程序开发中最具争议的话题之一。 似乎每个人都有自己最喜欢的架构模式。

在 iOS 和 Android 中经典的 MVC 架构，作为一种默认的架构选择。模型和视图是分开的，控制器在它们之间发送信号。

Flutter 中，因为是声明式的 UI 构建方式，响应式编程，然后 Bloc 设计模式就出现了。

Bloc 是 Business Logic Components 的缩写。要点：应用程序中的所有内容都应该表示为事件流：小部件提交事件，其他小部件将进行相应。Bloc 在中间，负责管理控制。Dart 中已经有了异步事件流的语法。

![](https://blog-1253737552.cos.ap-chengdu.myqcloud.com/03-BLoC-layers-1.png)

![](https://blog-1253737552.cos.ap-chengdu.myqcloud.com/04-BLoC-diagram-1.png)

像 Futures 一样，流是由 dart: async 包提供的。 流类似于 Future，但是流不是异步返回单个值，而是随着时间的推移产生多个值。 如果未来是一个最终将被提供的价值，那么随着时间的推移，一系列的价值将零星地被提供。

Async 包提供了一个名为 StreamController 的对象。 Streamcontrollers 是管理器对象，可以实例化流和接收器。 洗涤槽是小溪的反义词。 如果流随时间产生输出值，接收器随时间接受输入值。

总之，BLoCs 是处理和存储业务逻辑、使用接收器接受输入以及通过流提供输出的对象。

## See Also

- [Google I/O '18](https://www.youtube.com/watch?v=RS36gBEp8OI)
- [bloc-pattern-in-flutter-part-1](http://flutterdevs.com/blog/bloc-pattern-in-flutter-part-1/)
