---
title: "面试-Runtime"
date: "2019-12-17"
permalink: "2019-12-17-interview-runtime"
---

# Runtime

- **runtime 中，SEL 和 IMP 的区别**

SEL：类成员方法的指针，方法编号
IMP：函数指针，保存了方法地址

SEL(方法编号)最终会通过 Dispatch table 表寻找到对应的 IMP(函数指针)
Dispatch table 表存放 SEL 和 IMP 的对应

- **runtime 如何通过 selector 找到对应的 IMP 地址**

* runtime 动态创建一个类，需要注意什么？
* Runtime 实现的机制是什么？能做什么事情呢？

* 在运行时创建类的方法 objc_allocateClassPair 的方法名尾部为什么是 pair（成对的意思）？

* App 无痕埋点的思路了解么？你认为理想的无痕埋点系统应该具备哪些特点？（知道多少说多少）
* 说说你对 runtime 的理解。——主要是方法调用时如何查找缓存，如何找到方法，找不到方法时怎么转发，对象的内存布局。
* runtime 中，SEL 和 IMP 的区别
