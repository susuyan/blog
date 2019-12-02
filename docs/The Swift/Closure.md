# Closure

`闭包`（Closure），平日的开发中，时不时都会用到，类似于 Objective-C 中 Block。通常来讲的话，依照各种 demo 和开源库，照葫芦画瓢地也很容易的使用这个`闭包`（Closure）去写，完成某个功能的巧妙调用。但是，停留在表面上的粘贴复制使用，知其然，而不知所以然，是不行的。总是在感叹，人家写的一手很棒的代码，为何不自己去动手去尝试呢，去掌握原理，给出自己的问题解决方案，这样的话，编程才是会越来越有趣的。

**集中的学习和整理 Closure 想达成下列这些目标**：

1. 能够很清楚讲出 Closure 是一个什么东西
2. 概念上的描述术语要分的清（逃逸闭包，值捕获）
3. Closure 有哪些坑，如何避免？
4. 吸收 Closure 给我们带来的一些便利

**闭包声明和定义**

首先，可以这样理解，闭包就是没有名字的函数。单从闭包来讲（先忽略其他东西），定义就长下边这样：

```
(ParameterTypes) -> ReturnType
```

然后呢，再看函数块的定义和声明的位置，作为属性变量，作为函数的参数，对吧，就这两种形式，闭包就作为一种特殊的类型来看。闭包可以捕获和存储其所在上下文中任意常量和变量的引用.

```
// 作为属性变量
var closureName: (ParameterTypes) -> ReturnType
```

```
// 作为函数参数
funcName(parameter: (ParameterTypes) -> ReturnType)
```

```
//逃逸闭包
funcName(parameter: @escaping(ParameterTypes) -> ReturnType)
```

**调用闭包**

闭包作为参数时的调用，先这样粗暴的理解吧。`in`关键字后边的就是闭包函数块，

```
funcName({ (ParameterTypes) -> ReturnType in statements })
```

在 Swift3.0 后，闭包默认都是`非逃逸闭包`，`逃逸闭包`需要在闭包前加上关键字`@escaping`。

### 常见的使用场景

**As a variable** （UITableViewCell 中的有一些按钮点击事件）

TableViewCell.Swift

```
class TableViewCell: UITableViewCell {
    //作为一个变量声明一个闭包
    var btnTapActionClosure: ((UIButton)->Void)?
    @IBAction func tapAction(_ sender: UIButton) {
        guard btnTapActionClosure != nil else {
            return
        }
        btnTapActionClosure!(sender)
    }
}
```

ViewController.swift

```
class ViewController: UIViewController {

    @IBOutlet weak var tableView: UITableView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

}

extension ViewController: UITableViewDataSource {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 10
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath) as! TableViewCell

        cell.btnTapActionClosure = { sender in
            //响应 Tap 点击事件
            print("tap action")
        }
        return cell
    }
}
```

### 进一步阅读

- [How Do I Declare a Closure in Swift?](http://fuckingclosuresyntax.com/)
- [如何理解逃逸闭包](https://www.jianshu.com/p/cb4333807954)
- [内存管理，WEAK 和 UNOWNED](http://swifter.tips/retain-cycle/)
- [可选型的非逃逸闭包](http://swift.gg/2016/11/15/optional-non-escaping-closures/)
- [What do mean @escaping and @nonescaping closures in Swift?](https://medium.com/@kumarpramod017/what-do-mean-escaping-and-nonescaping-closures-in-swift-d404d721f39d)
