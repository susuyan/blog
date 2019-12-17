---
title: "面试-GCD"
date: "2019-12-17"
permalink: "2019-12-17-interview-gcd"
---

# GCD 相关问题

## 概念：

- **什么是 GCD？**

GCD 自己维护了一个底层的线程库实现，以支持并发和异步的执行模型。

开发者只需要定义想执行的任务并追加到适当`Dispatch Queue`中，GCD 就能生成必要的线程并计划执行任务。

## 问题

- **使用 GCD 如何实现这个需求：A、B、C 三个任务并发，完成后执行任务 D。**

  - dispatch group

- GCD 执行原理？
  将任务指定到对应 Queue 中，GCD 来给 Queue 来分配响应的线程来执行。
