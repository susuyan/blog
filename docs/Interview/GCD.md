# GCD 相关问题

## 概念：

什么是 GCD？

GCD 自己维护了一个底层的线程库实现，以支持并发和异步的执行模型。

开发者只需要定义想执行的任务并追加到适当`Dispatch Queue`中，GCD 就能生成必要的线程并计划执行任务。

- 使用 GCD 如何实现这个需求：A、B、C 三个任务并发，完成后执行任务 D。

- NSOperation 和 GCD 的区别
- GCD 执行原理？

- 有哪些场景是 NSOperation 比 GCD 更容易实现的？（或是 NSOperation 优于 GCD 的几点，知道多少说多少）
