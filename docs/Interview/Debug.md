# 调试

- dSYM 你是如何分析的？

  - 使用 Xcode 符号化 crash log
  - 使用 symbolicatecrash 工具
  - 使用命令行工具 atos

- 你一般是怎么用 Instruments 的？

  - Tiem Profiler : 性能分析
  - Zombies ： 检查是否访问来僵尸对象，但是只能从上往下检查，不智能
  - Leaks ：检查是否存在内存泄漏

- 你知道有哪些情况会导致 app 崩溃，分别可以用什么方法拦截并化解？（知道多少说多少）

* 基于 LLVM/Clang 的静态分析
