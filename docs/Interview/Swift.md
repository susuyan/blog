---
title: "面试-swift"
date: "2019-12-17"
permalink: "2019-12-17-interview-swift"
---

# Swift 面试题

- **类(class) 和 结构体(struct) 有什么区别? 类(class) 和 结构体(struct) 比较,优缺点?**

1. 引用类型和值类型的区别
2.

- 什么是泛型，swift 哪些地方使用了泛型？

- 如何解决引用循环

- **定义静态方法时关键字 static 和 class 有什么区别**

class 修饰时，子类可以重写父类类方法。

- 请说明并比较以下关键词：Open, Public, Internal, File-private, Private

- swift 中,关键字 guard 和 defer 的用法 guard 也是基于一个表达式的布尔值去判断一段代码是否该被执行。与 if 语句不同的是，guard 只有在条件不满足的时候才会执行这段代码。

- 关键字:Strong,Weak,Unowned 区别?

- **如何理解 copy-on-write?**

值类型在复制时，新对象和原对象实际上在内存中指向同一块区域，只有当新对象发生改变时（增加或删除一个对象），才会给新对象开辟新内存区域。

- **swift 为什么将 String,Array,Dictionary 设计为值类型?**

  - 值类型的内存位置上是在栈上面，所以，效率会更高一些。
  - 值类型在在代码中传递时，都会将其复制一份，所以也会更安全一些。

- **如何将 Swift 中的协议(protocol)中的部分方法设计为可选(optional)?**

扩展协议，给可选的方法加上默认实现。

- 比较 Swift 和 OC 中的初始化方法 (init) 有什么不同?

- 比较 Swift 和 OC 中的 protocol 有什么不同?

- swift 和 OC 中的自省 有什么区别?

- swift 中的枚举,关联值 和 原始值的区分?

- swift 中的闭包结构是什么样子的?什么是尾随闭包?什么是逃逸闭包?什么是自动闭包?

- swift 中, 存储属性和计算属性的区别?

- swift 中如何使用单例模式?

- swift 中的下标是什么?

- 简要说明 Swift 中的初始化器?

- 什么可选链?

* **高阶函数使用（map、flatmap、compactMap、filter、reduce）**

  - map 和 flatMap — 对元素进行变换。
  - filter — 只包含特定的元素。
  - allSatisfy — 针对一个条件测试所有元素。
  - reduce — 将元素聚合成一个值。
  - forEach — 访问每个元素。
  - sort(by:), sorted(by:), lexicographicallyPrecedes(\_:by:), 和 partition(by:) — 重排元素。
  - firstIndex(where:),lastIndex(where:),first(where:),last(where:), 和 contains(where:) — 一个元素是否存在？
  - min(by:) 和 max(by:) — 找到所有元素中的最小或最大值。
  - elementsEqual(\_:by:) 和 starts(with:by:) — 将元素与另一个数组进行比较。
  - split(whereSeparator:) — 把所有元素分成多个数组。
  - prefix(while:) — 从头取元素直到条件不成立。
  - drop(while:) — 当条件为真时，丢弃元素；一旦不为真，返回其余的元素(和 prefix 类似，不过返回相反的集合)。
  - removeAll(where:) — 删除所有符合条件的元素。
