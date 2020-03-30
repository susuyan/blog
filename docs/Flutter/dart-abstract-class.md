---
date: "2019-12-31"
title: "Dart 抽象类"
type: "blog"
permalink: "dart-abstract-class.html"
---

# Dart 抽象类

使用`abstract`关键字来声明抽象类

```dart
abstract class class_name {
  // Body of abstract class
  String task;
  static String hello;
  void walk();
  void run(){}
}
```

在抽象类体中，可以做的事情：

- 定义变量和静态变量
- 定义方法和带默认实现的方法

## 与抽象类的交互

- 类与抽象类的交互

类使用`extends`关键字来扩展抽象类，但有一些要求的。使用`extends`可以获得抽象类默认实现的一些方法，但是没有实现的方法就需要重载。

类使用`implements`关键字时，需要重载所有抽象类的方法。

```Dart
abstract class A {
}

abstract class B {
}
// 使用这种方式实现多继承的类似功能
class C implements A , B{
}
```

- 抽象类与抽象类

使用`extends`和`implements`关键字来扩展或重载

## 抽象方法

- 抽象方法只能存在于抽象类中
- 普通类可以扩展抽象类，但它们必须重写每个抽象方法
- 您还可以在抽象类中创建普通方法。 并且重写正常方法不是强制的

基本语法：

```Dart
void talk (); // Abstract method
void walk (); // Abstract method
```
