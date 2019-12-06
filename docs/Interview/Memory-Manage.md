## Autorelease pool

- Autorelease pool 的实现原理
- autoreleasepool 的使用场景和原理
- Autoreleasepool 所使用的数据结构是什么？AutoreleasePoolPage 结构体了解么？
- Autorelease pool 原理，底层数据结构，pop,push 方法是否  会对对象的引用计数产生作用？
- autoreleasepool 的使用场景和原理

- app 内存你是如何分析的？
- 一般使用的图标内存为多大？比如 200×300 的图片，内存应该占用多少比较合理？

- 内存泄漏可能会出现的几种原因，聊聊你的看法
- 说说你对内存泄漏的看法，追问，block 为什么容易引起内存泄漏？
- MRC 和 ARC 运行时有啥不同？

- OC 你了解的锁有哪些？
- 自旋和互斥对比

- [object copy]是浅拷贝还是深拷贝？为什么是浅拷贝？copy 是实现了哪个协议？ 是浅拷贝，地址不变。
- 介绍下内存的几大区域？
- 怎么实现多个任务执行完后，再统一处理（应该是同步阻塞、栅栏函数、调度组。中间那个没答）
- 野指针是什么，iOS 开发中什么情况下会有野指针？——野指针是不为 nil，但是指向已经被释放的内存的指针，不知道什么时候会有，如果有知道的读者还望提醒。
- ARC 会对代码做什么优化？——比如 NSString \*s2 = s1; s2 = nil 这样的语句，可能就不会有 retain 和 release 方法了。
