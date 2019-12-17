---
title: "面试-Objc"
date: "2019-12-17"
permalink: "2019-12-17-interview-objc"
---

- 消息转发机制
- KVC 机制是如何通过 key 找到 value。
- KVO、Notification、delegate 各自的优缺点，效率还有使用场景
- 在 KVO 中，他是怎么知道监听的对象发生了变化？
- kvo 的实现原理
- Object-c 中 copy 和 mutableCopy 区别
- KVC 的底层实现？

- KVO 的底层实现？如何取消系统默认的 KVO 并手动触发（给 KVO 的触发设定条件：改变的值符合某个条件时再触发 KVO）？

- 被 weak 修饰的对象在被释放的时候会发生什么？是如何实现的？知道 sideTable 么？里面的结构可以画出来么？

- 关联对象有什么应用，系统如何管理关联对象？其被释放的时候需要手动将所有的关联对象的指针置空么？

- 讲一下对象，类对象，元类，跟元类结构体的组成以及他们是如何相关联的？为什么对象方法没有保存的对象结构体里，而是保存在类对象的结构体里？

- class_ro_t 和 class_rw_t 的区别？

- iOS 中内省的几个方法？class 方法和 objc_getClass 方法有什么区别?
- oc 里的消息  转发？
- oc 怎么实现多继承？怎么面向切面？
- 怎么给系统对象如 UIView 增加属性？
- Load 方法与 Initialize 方法有什么区别？
- autoreleasepool 怎么用？原理是什么？
- weak 与 assign 有什么区别?
- NSNotificationCenter 接受消息和  发送消息是在一个线程立吗？ 发送消息是同步还是异步的？接受消息呢？
- oc 怎么  实现 private,public 等关键字
- Load 方法
- 哪些 OC 对象是线程安全的
- 怎么理解 OC 的动态性（答了三点：对象的动态绑定；消息转发机制；资源动态加载）
- KVO、Notification、delegate 各自的优缺点，效率还有使用场景
- 如何手动通知 KVO
- Objective-C 中的 copy 方法
