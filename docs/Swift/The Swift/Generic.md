---
title: "泛型"
date: "2019-12-16"
permalink: "2019-12-16-generic"
---

# 泛型

## 泛型和 Any

通常，泛型和 Any 的用途是类似的，但它们有截然不同的表现。在没有泛型的编程语言里， Any 通常用来实现和泛型同样的效果，但是却缺少了类型安全性。这通常意味着要使用一些运 行时特性，例如内省 (introspection) 或动态类型转换，把 Any 这种不确定的类型变成一个确定 的具体类型。而泛型不仅能解决绝大部分同样的问题，还能带来编译期类型检查以及提高运行 时性能等额外的好处。

reduce 的泛型实现：

```swift
extension Array {

func reduce<Result>(_ initial: Result,

_ combine: (Result, Element) -> Result) -> Result

}
```

reduce 的 Any 实现：

```swift
extension Array {

func reduce(_ initial: Any, _ combine: (Any, Any) -> Any) -> Any

}
```

从上面的代码，就可以看出来有些细微的差别。一个函数或方法的泛型程度越高，它能做的事情就越少。泛型类型对于源码阅读有很大帮助。
