# 协议 & 面向协议编程

平日的业务代码编写中，使用协议的场景，除了写 delegate 有使用到，几乎是很少使用协议来优化代码的编写，所以是很不 Swift。在 Swift2.0 中，苹果引入了新的编程范式，就是面向协议编程。近日，在阅读 `Alamfire`、`Moya`、`Reusable` 等源码，面向协议的编码方式，感受颇深。`Moya` 利用协议属性集中管理 API 接口，`Reusable` 通过协议扩展，为我们提供了更加又优雅的使用`reuseIdentifier`。

所以本文，对于`协议`相关的操作进行了详细的总结

- 对`协议`进一步的加深理解
- 了解`面向协议`编程范式
- 总结平日的开发中`协议`使用的常见场景
- 使用协议，更有效的组织我们的代码

## 协议（Protocol）

`协议` 定义了一个蓝图，规定了用来实现某一特定任务或者功能的方法、属性，以及其他需要的东西。类、结构体或枚举都可以遵循协议，并为协议定义的这些要求提供具体实现。某个类型能够满足某个协议的要求，就可以说该类型遵循这个协议。

所谓`协议`，就是一组属性和/或方法的定义，而如果某个具体类型想要遵守一个协议，那它需要实现这个协议所定义的所有这些内容。协议实际上做的事情不过是“关于实现的约定”。

高度的协议化有助于解耦、测试以及扩展，而结合泛型来使用协议，更可以让我们免于动态调用和类型转换的苦恼，保证了代码的安全性。

## Protocol 基础语法

```
public protocol URLConvertible {
    /// Returns a URL that conforms to RFC 2396 or throws an `Error`.
    ///
    /// - throws: An `Error` if the type cannot be converted to a `URL`.
    ///
    /// - returns: A URL or throws an `Error`.
    func asURL() throws -> URL
}

extension String: URLConvertible {
    /// Returns a URL if `self` represents a valid URL string that conforms to RFC 2396 or throws an `AFError`.
    ///
    /// - throws: An `AFError.invalidURL` if `self` is not a valid URL string.
    ///
    /// - returns: A URL or throws an `AFError`.
    public func asURL() throws -> URL {
        guard let url = URL(string: self) else { throw AFError.invalidURL(url: self) }
        return url
    }
}
```

1. 属性要求 ：
   - { get set } ：指定读写属性
   - static／class：指定类型属性
2. 方法要求：
   - static／class：指定类方法
   - mutating：要求实现可变方法（针对值类型的实例方法，可以在该方法中修改它所属的实例以及实例的任意属性的值）
3. 构造器要求：
   - 在遵循协议的类中，必须使用 required 关键字修饰，保证其子类也必须提供该构造器的实现。（除非有 final 修饰的类，可以不用 required，因为不会再有子类）

## 了解 POP

> 面向对象的问题就是，你想要一根香蕉，但你得到的是一只持有香蕉和整个丛林的大猩猩。 --- Joe Armstrong

在面向对象编程中，子类是在多个类之间共享代码的有效方式。一个子类将从它的父类继承所有的方法，然后选择重写其中的某些方法。

面向对象是一种不错的抽象方式，但是肯定不是最好的方式。它无法描述两个不同事物具有某个相同特性这一点。在这里，特性的组合要比继承更贴切事物的本质。

有一些语言有多继承的特性，其中最常见的是 C++。但是这也导致了钻石问题 (或者叫菱型缺陷) 的麻烦。举例来说，如果可以多继承，那么我们就可以让 NSMutableAttributedString 同时继承 NSMutableString 和 NSAttributedString。但是要是这两个类中都重写了 NSString 中的某个方法的时候，该怎么办？你可以通过选择其中一个方法来解决这个问题。但是要是这个方式是 isEqual: 这样的通用方法又该怎么处理呢？实际上，为多继承的类提供合适的行为真的是一件非常困难的事情。

协议扩展是一种可以在不共享基类的前提下共享代码的方法。协议定义了一组最小可行的方法集合，以供类型进行实现。而类型通过扩展的方式在这些最小方法上实现更多更复杂的特性。

Swift 的协议的另一个强大特性是我们可以使用完整的方法实现来扩展一个协议。你可以扩展你自己的协议，也可以对已有协议进行扩展。

## 常见的使用场景

- **委托（代理）模式**

`委托`是一种设计模式，它允许类或结构体将一些需要它们负责的功能委托给其他类型的实例。`委托模式`的实现很简单：定义协议来封装那些需要被委托的功能，这样就能确保遵循协议的类型能提供这些功能。`委托模式`可以用来响应特定的动作，或者接收外部数据源提供的数据，而无需关心外部数据源的类型。

```
protocol CustomViewDelegate: class {
    func selectedItem(_ view:CustomView, index: Int)
}

class CustomView: UIView {

    open weak var delegate: CustomViewDelegate?
    open fileprivate(set) var selectedIndex = 0

    func selectedAction() {
        delegate?.selectedItem(self, index: selectedIndex)
    }
}
```

- [**对 Alamofire 进一步封装的 Moya**](https://github.com/Moya/Moya)

对 API 的各种接口统一起来进行管理，使用 Moya 这个库再好不过啦。首先，我们会对 API 接口建立一个枚举，然后枚举实现下面接口，完成基本的属性配置。如：服务器地址，接口路径，测试数据

```
public protocol TargetType {

    /// The target's base `URL`.
    var baseURL: URL { get }

    /// The path to be appended to `baseURL` to form the full `URL`.
    var path: String { get }

    /// The HTTP method used in the request.
    var method: Moya.Method { get }

    /// Provides stub data for use in testing.
    var sampleData: Data { get }

    /// The type of HTTP task to be performed.
    var task: Task { get }

    /// The type of validation to perform on the request. Default is `.none`.
    var validationType: ValidationType { get }

    /// The headers to be used in the request.
    var headers: [String: String]? { get }
}
```

- [**更加优雅的实现 Cell 的 Register 和 Reuse**](https://github.com/AliSoftware/Reusable)

```
public protocol Reusable: class {
  /// The reuse identifier to use when registering and later dequeuing a reusable cell
  static var reuseIdentifier: String { get }
}

/// Make your `UITableViewCell` and `UICollectionViewCell` subclasses
/// conform to this typealias when they *are* NIB-based
/// to be able to dequeue them in a type-safe manner
public typealias NibReusable = Reusable & NibLoadable

// MARK: - Default implementation

public extension Reusable {
  /// By default, use the name of the class as String for its reuseIdentifier
  static var reuseIdentifier: String {
    return String(describing: self)
  }
}
```

- **使用 Storyboard 构建控制器，关于控制器间的依赖注入**

SegueHandlerType.swift

```
protocol SegueHandlerType {
    associatedtype SegueIdentifier: RawRepresentable
}

protocol Injectable {
    associatedtype T
    func inject(_ : T)
    func assertDependencies()
}

extension SegueHandlerType where Self: UIViewController,
    SegueIdentifier.RawValue == String
{

    func performSegueWithIdentifier(_ segueIdentifier: SegueIdentifier,
        sender: AnyObject?) {

        performSegue(withIdentifier: segueIdentifier.rawValue, sender: sender)
    }

    func segueIdentifierForSegue(_ segue: UIStoryboardSegue) -> SegueIdentifier {

        guard let identifier = segue.identifier,
            let segueIdentifier = SegueIdentifier(rawValue: identifier) else { fatalError("Invalid segue identifier \(String(describing: segue.identifier)).") }

        return segueIdentifier
    }
}
```

ViewController.swift

```
class ViewController: UIViewController, SegueHandlerType {

    enum SegueIdentifier: String {
        case TheRedPillExperience
        case TheBluePillExperience
    }

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {

        switch segueIdentifierForSegue(segue) {

        case .TheRedPillExperience:
            let redPillVC = segue.destination as? RedPillViewController
            redPillVC?.inject("😈")
        case .TheBluePillExperience:
            let bluePillVC = segue.destination as? BluePillViewController
            bluePillVC?.inject("👼")
        }
    }

    @IBAction func onRedPillButtonTap(_ sender: AnyObject) {
        performSegueWithIdentifier(.TheRedPillExperience, sender: self)
    }

    @IBAction func onBluePillButtonTap(_ sender: AnyObject) {
        performSegueWithIdentifier(.TheBluePillExperience, sender: self)
    }
}

```

RedPillViewController.swift

```
class RedPillViewController: UIViewController, Injectable {

    @IBOutlet weak fileprivate var mainLabel: UILabel!

    // this is my original dependency (IOU)
    // I can now make this private!
    fileprivate var mainText: String!

    override func viewDidLoad() {
        super.viewDidLoad()

        // this will crash if the IOU is not set
        assertDependencies()


        mainLabel.text = mainText
    }

    // Injectable
    func inject(_ thing : String) {
        mainText = thing
    }

    func assertDependencies() {
        assert(mainText != nil)
    }
}

```

- [**自定义枚举的映射关系**](http://swift.gg/2016/06/13/stupid-swift-tricks-5-enums/)
- [**NotificationCenter 协议**](http://swift.gg/2017/04/13/swift-nsnotificationcenter-protocol/)

## 在阅读相关资料是遇到的疑问点

- **mutating 关键字**

Swift 的 protocol 不仅可以被 class 类型实现，也适用于 struct 和 enum。因为这个原因，我们在写给别人用的接口时需要多考虑是否使用 mutating 来修饰方法，比如定义为 mutating func myMethod()。Swift 的 mutating 关键字修饰方法是为了能在该方法中修改 struct 或是 enum 的变量，所以如果你没在接口方法里写 mutating 的话，别人如果用 struct 或者 enum 来实现这个接口的话，就不能在方法里改变自己的变量了。

- 关联类型
- 关联类型的协议和普通协议的不同点
- 协议允许我们进行动态派发（区分静态派发）

![1_SIcSsfmBCp4tNzLxGJAbd](media/15216224458140/1_SIcSsfmBCp4tNzLxGJAbdw.png)

## 总结和思考

通过集中的了解协议的相关特性，已经迫不及待的想去 Review 自己的代码了。`协议`就是定义一种约束和描述，更加方便的管理类与类之间、对象与对象之间的关系。然后就是`协议扩展`提供默认实现的这一机制，简直太赞了，是不是可以给 ViewController 进行瘦身，还有就是不太喜欢 BaseController，所有 Controller 都继承，这么样的一个写法。这样的话，可以将 Base 类中的一些行为，用协议扩展的方式来进行提供，插件式功能编写，即用即有。

另外，MVVM 的架构中，也是有蛮多协议的使用场景来支撑。泛型和协议的配合也是非常爆炸。

## 进一步相关阅读

1. [面向协议编程与 Cocoa 的邂逅 (上)](https://onevcat.com/2016/11/pop-cocoa-1/)
2. [面向协议编程与 Cocoa 的邂逅 (下)](https://onevcat.com/2016/12/pop-cocoa-2/)
3. [真刀真枪 面向协议编程](https://academy.realm.io/cn/posts/appbuilders-natasha-muraschev-practical-protocol-oriented-programming/)
4. [Swift 面向协议编程入门](https://juejin.im/entry/589439622f301e00693567e5)
5. [从 Swift 的面向协议编程说开去 ](https://bestswifter.com/pop/)
6. [Design-Patterns-In-Swift](https://github.com/ochococo/Design-Patterns-In-Swift)
7. [OOD-Principles-In-Swift](https://github.com/ochococo/OOD-Principles-In-Swift)
8. [设计模式](http://wiki.c2.com/?DesignPatternsBook)
9. [面向协议的 Swift 编程](https://www.pluralsight.com/guides/swift/protocol-oriented-programming-in-swift)
10. [面向协议编程，灵丹妙药或是饮鸩止渴](https://zhuanlan.zhihu.com/p/24451309)
