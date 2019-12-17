---
title: "关联类型"
date: "2019-12-17"
permalink: "2019-12-17-swift-associated-types"
---

# 关联类型的一些应用

## [了解关联类型](http://swift.gg/2016/08/01/swift-associated-types/)

## 在 Swift 中对使用 Storyboard 和 Segue 的 View Controller 进行依赖注入

在视频中提到的关于使用 SegueHandlerType 的好处有：

- 如果使用了未定义的 segue 标识，就会有编译期错误
- 更好地支持重用
- 方便的语法

我们同时还见识到了协议的强大：

- 使用协议以及关联类型来让整个 app 的约束更紧密
- 使用特定的协议扩展来共享方法的实现
- 这里面最大的好处就是利用了编译器的优势。你如果使用了这种方法来构建你的代码，编译器将会与你同在，当你犯错时，它就会提醒你。

[关联类型参数](http://swift.gg/2016/04/13/swift-making-the-associated-type-parameter-readable-in-protocols/)

## SegueHandlerType.Swift

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

## ViewController.swift

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

## RedPillViewController.swift

```
class RedPillViewController: UIViewController, Injectable {

    @IBOutlet weak fileprivate var mainLabel: UILabel!

    fileprivate var mainText: String!

    override func viewDidLoad() {
        super.viewDidLoad()

        // this will crash if the IOU is not set
        assertDependencies()


        mainLabel.text = mainText
    }

    // Injectable
    func inject(_ thing: String) {
        mainText = thing
    }

    func assertDependencies() {
        assert(mainText != nil)
    }
}
```
