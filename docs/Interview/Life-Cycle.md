---
title: "面试-生命周期"
date: "2019-12-17"
permalink: "2019-12-17-interview-life-cycle"
---

# 关于生命周期

- **介绍下 App 启动的完成过程？**

* 首先加载解析 info.plist 文件
* 创建沙盒，检查响应权限状态
* 加载 Mach-O 文件（链接相关的动态库）
* main 调用

- **UIView 生命周期**

- **APP 的生命周期**

  - Not Running(非运行状态)
  - Inactive(前台非活动状态)
  - Active(前台活动状态)
  - Background(后台状态)
  - Suspended(挂起状态)

- **冷启动定义**

从用户点击 App 图标开始到 appDelegate didFinishLaunching 方法执行完成为止。
_ T1: main()函数之前，即操作系统加载 App 可执行文件到内存，然后执行一系列的加载&链接等工作，最后执行至 App 的 main()函数。
_ T2: main()函数之后，即从 main()开始，到 appDelegate 的 didFinishLaunchingWithOptions 方法执行完毕。  
 \* T3: App 还需要做一些初始化工作，然后经历定位、首页请求、首页渲染等过程后，用户才能真正看到数据内容并开始使用，我们认为这个时候冷启动才算完成
