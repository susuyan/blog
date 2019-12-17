## What’s new in Swift 5.1

#### 1. 属性包装器 Massive improvements to synthesized memberwise initializers

```
struct User {
    var name: String
    var loginCount: Int = 0
}

let piper = User(name: "Piper Chapman", loginCount: 0)
```

之前版本，会默认初始化构造器。在 User Struct 中，我们给 loginCount 设置了一个默认值 0，这意味着我们可以指定它，也可以把它留给成员初始化器：

```
let gloria = User(name: "Gloria Mendoza", loginCount: 0)
let suzanne = User(name: "Suzanne Warren")
```

编译器现在使用默认的初始化程序合成属性的默认值，属性包装器引入了一致且通用的语法，用于定义属性值的自定义访问模式，包括（但不限于）延迟的初始化程序，原子操作，特定于线程的存储以及写时复制行为

#### 2. Implicit returns from single-expression functions

在 Swift 5.1 中，这种行为现在也被扩展到函数中: 如果它们包含一个表达式——实际上是一段代码，计算结果为一个值——那么你可以省略 return 关键字，如下所示:

```
func double(_ number: Int) -> Int {
    number * 2
}
```

对于单个表达式函数或 getter，不需要 return 关键字

#### 3. Universal Self

扩展了 Swift 对 Self 的使用，因此当在类、结构和枚举中使用时，它引用了包含类型。 这对于动态类型特别有用，在动态类型中需要在运行时确定事物的确切类型。

```
class NetworkManager {
    class var maximumActiveRequests: Int {
        return 4
    }

    func printDebugData() {
        print("Maximum network requests: \(NetworkManager.maximumActiveRequests).")
    }
}
```

```
class ThrottledNetworkManager: NetworkManager {
    override class var maximumActiveRequests: Int {
        return 1
    }
}

let manager = ThrottledNetworkManager()
manager.printDebugData()

info: 4 // 应该是1，不是4
```

所以我们现在可以写 Self (大写为 s)来引用当前类型。 因此，我们可以将 printDebugData ()重写为:

```
class ImprovedNetworkManager {
    class var maximumActiveRequests: Int {
        return 4
    }

    func printDebugData() {
        print("Maximum network requests: \(Self.maximumActiveRequests).")
    }
}
```

`Self` 现在可以用于类和值类型

#### 4. 不透明的返回类型 Opaque return types

在 Swift 中引入了不透明类型的概念。 Opaque 类型是这样一种类型，我们被告知对象的功能，但不知道它是什么类型的对象。

乍一看，这听起来很像一个协议，但不透明的返回类型将协议的概念推进了很多，因为它们能够与相关的类型一起工作，它们要求每次在内部使用相同的类型，并且它们允许我们隐藏实现细节。

举个例子，如果我们想从一个义军基地发射不同种类的战斗机，我们可以这样编写代码:

```
protocol Fighter { }
struct XWing: Fighter { }

func launchFighter() -> Fighter {
    return XWing()
}

let red5 = launchFighter()
```

无论是谁调用这个函数，都知道它会返回某种战斗机，但不知道具体是什么。 因此，我们可以添加结构 YWing: Fighter {}或其他类型，并返回其中的任何类型。

但是有一个问题: 如果我们想要检查一个特定的战斗机是否是红色 5 号呢？ 你可能认为解决方案是让战斗机遵循可等式协议，这样我们就可以使用。 然而，一旦你这样做，Swift 将抛出一个特别可怕的错误，发射战斗机功能: “协议‘战斗机'只能用作一般约束，因为它有自我或相关类型的要求。”

这个错误的 `Self` 部分正是打击我们的东西。 可等价协议必须比较两个自身实例 `Self` ，以确定它们是否相同，但 Swift 不能保证这两个可等价的事物是否有一丁点相同——例如，我们可以将一个 Fighter 与一个整数数组进行比较。

不透明类型解决了这个问题，因为即使我们只看到一个协议被使用，Swift 编译器内部知道该协议实际解析成什么——它知道它是一个 XWing，一个字符串数组，或者其他什么。

要返回一个不透明类型，请在协议名之前使用关键字 some:

```
func launchOpaqueFighter() -> some Fighter {
    return XWing()
}
```

因此，不透明的结果类型允许我们做几件事:

- 我们的函数决定返回什么类型的数据，而不是这些函数的调用者
- 我们不需要担心 `Self` 或相关的类型需求，因为编译器完全知道内部的类型
- 我们可以在未来任何需要的时候改变我们的想法
- 我们不向外部世界公开私有的内部类型

不透明的结果类型允许使用泛型类型来支持符合相同协议的不同类型或在 API 中隐藏实现细节

#### 5. 静态和类下标 Static and class subscripts

增加了将下标标记为静态的能力，这意味着它们应用于类型而不是类型的实例

当一组值在该类型的所有实例之间共享时，将使用静态属性和方法。 例如，如果你有一个集中的类型来存储你的应用程序设置，你可以这样写代码:

```
public enum OldSettings {
    private static var values = [String: String]()

    static func get(_ name: String) -> String? {
        return values[name]
    }

    static func set(_ name: String, to newValue: String?) {
        print("Adjusting \(name) to \(newValue ?? "nil")")
        values[name] = newValue
    }
}

OldSettings.set("Captain", to: "Gary")
OldSettings.set("Friend", to: "Mooncake")
print(OldSettings.get("Captain") ?? "Unknown")
```

在类型中包装 dictionary 意味着我们可以更仔细地控制访问权限，使用没有案例的枚举意味着我们不能尝试实例化类型——我们不能创建设置的各种实例。

使用 Swift 5.1，我们现在可以使用静态下标代替，允许我们重写代码:

```
public enum NewSettings {
    private static var values = [String: String]()

    public static subscript(_ name: String) -> String? {
        get {
            return values[name]
        }
        set {
            print("Adjusting \(name) to \(newValue ?? "nil")")
            values[name] = newValue
        }
    }
}

NewSettings["Captain"] = "Gary"
NewSettings["Friend"] = "Mooncake"
print(NewSettings["Captain"] ?? "Unknown")
```

类型的实例始终可以使用这样的自定义下标; 这种改进使得静态下标或类下标也成为可能。

#### 6. 不明确的 none 情况的警告 Warnings for ambiguous none cases

Swift 的选择作为两种情况的极限: 有些和没有。 如果我们自己创建一个没有情况的枚举，然后将其包装在一个可选的枚举中，这就有可能引起混淆。

```
enum BorderStyle {
    case none
    case solid(thickness: Int)
}
```

#### 7. 匹配可选的 enums 对非选项 Matching optional enums against non-optionals

Swift 能够在字符串和整数的选项和非选项之间处理切换 / 大小写模式匹配，但在斯威夫特 5.1 之前，这个选项还没有扩展到枚举。

```
enum BuildStatus {
    case starting
    case inProgress
    case complete
}

let status: BuildStatus? = .inProgress

switch status {
case .inProgress:
    print("Build is starting…")
case .complete:
    print("Build is complete!")
default:
    print("Some other build status")
}
```

Swift 可以直接比较可选枚举和非可选枚举，这样代码就可以打印出“ Build is starting... ”

#### 8. 有序集合差异 Ordered collection diffing

引入了计算和应用有序集合之间差异的能力。 对于在表视图中拥有复杂集合的开发人员来说，这可能特别有趣，因为他们希望使用动画平滑地添加和删除大量项。

基本原理很简单: Swift 5.1 提供了一个新的 `difference(from:)` 方法，用于计算两个有序集合之间的差异——要删除哪些项和要插入哪些项。 这可以用于任何包含 `Equatable` 的有序集合。

为了演示这一点，我们可以创建一个分数数组，计算这两个分数之间的差异，然后循环处理这些差异，并应用每个差异使两个集合相同。

> 注意: 因为 Swift 现在已经发布在苹果的操作系统中，像这样的新功能必须通过 `# available` 检查来确保代码在包含新功能的操作系统上运行。 对于那些将在未来某个时候发布在未知的、未公布的操作系统中的特性，“9999”的特殊版本号被用来表示“我们还不知道实际的数字是多少”

```
var scores1 = [100, 91, 95, 98, 100]
let scores2 = [100, 98, 95, 91, 100]

if #available(iOS 9999, *) {
    let diff = scores2.difference(from: scores1)

    for change in diff {
        switch change {
        case .remove(let offset, _, _):
            scores1.remove(at: offset)
        case .insert(let offset, let element, _):
            scores1.insert(element, at: offset)
        }
    }

    print(scores1)
}
```

您可以使用一个新的 apply ()方法应用整个集合，而不是手动应用更改，如下所示:

```
if #available(iOS 9999, *) {
    let diff = scores2.difference(from: scores1)
    let result = scores1.applying(diff) ?? []
}
```

#### 9. 创建未初始化的数组 Creating uninitialized arrays

为数组引入了一个新的初始化器，该初始化器不用预先填充缺省值。 这是以前作为一个私有 API 提供的，这意味着 Xcode 不会在代码完成中列出它，但是如果你愿意的话，你仍然可以使用它——如果你愿意承担风险，它将来不会被取消！

若要使用初始化器，请告诉它所需的容量，然后提供一个闭包，以便按需要填充值。 闭包将会得到一个不安全的可变缓冲区指针，您可以在该指针中写入值，还会得到一个 `inout` 第二个参数，用于报告实际使用了多少值。

例如，我们可以创建一个由 10 个随机整数组成的数组:

```
let randomNumbers = Array<Int>(unsafeUninitializedCapacity: 10) { buffer, initializedCount in
    for x in 0..<10 {
        buffer[x] = Int.random(in: 0...10)
    }

    initializedCount = 10
}
```

这里有一些规则:

1. 你申请的数组空间不一定使用完，但是你能超过你申请的空间
2. 如果你不初始化最终在数组中的元素的，剩下的空间很可能由随机数填充
3.
