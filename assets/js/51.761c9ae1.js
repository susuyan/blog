(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{488:function(e,n,a){"use strict";a.r(n);var s=a(12),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"closure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#closure"}},[e._v("#")]),e._v(" Closure")]),e._v(" "),a("p",[a("code",[e._v("闭包")]),e._v("（Closure），平日的开发中，时不时都会用到，类似于 Objective-C 中 Block。通常来讲的话，依照各种 demo 和开源库，照葫芦画瓢地也很容易的使用这个"),a("code",[e._v("闭包")]),e._v("（Closure）去写，完成某个功能的巧妙调用。但是，停留在表面上的粘贴复制使用，知其然，而不知所以然，是不行的。总是在感叹，人家写的一手很棒的代码，为何不自己去动手去尝试呢，去掌握原理，给出自己的问题解决方案，这样的话，编程才是会越来越有趣的。")]),e._v(" "),a("p",[a("strong",[e._v("集中的学习和整理 Closure 想达成下列这些目标")]),e._v("：")]),e._v(" "),a("ol",[a("li",[e._v("能够很清楚讲出 Closure 是一个什么东西")]),e._v(" "),a("li",[e._v("概念上的描述术语要分的清（逃逸闭包，值捕获）")]),e._v(" "),a("li",[e._v("Closure 有哪些坑，如何避免？")]),e._v(" "),a("li",[e._v("吸收 Closure 给我们带来的一些便利")])]),e._v(" "),a("p",[a("strong",[e._v("闭包声明和定义")])]),e._v(" "),a("p",[e._v("首先，可以这样理解，闭包就是没有名字的函数。单从闭包来讲（先忽略其他东西），定义就长下边这样：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(ParameterTypes) -> ReturnType\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("然后呢，再看函数块的定义和声明的位置，作为属性变量，作为函数的参数，对吧，就这两种形式，闭包就作为一种特殊的类型来看。闭包可以捕获和存储其所在上下文中任意常量和变量的引用.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 作为属性变量\nvar closureName: (ParameterTypes) -> ReturnType\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 作为函数参数\nfuncName(parameter: (ParameterTypes) -> ReturnType)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//逃逸闭包\nfuncName(parameter: @escaping(ParameterTypes) -> ReturnType)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[a("strong",[e._v("调用闭包")])]),e._v(" "),a("p",[e._v("闭包作为参数时的调用，先这样粗暴的理解吧。"),a("code",[e._v("in")]),e._v("关键字后边的就是闭包函数块，")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("funcName({ (ParameterTypes) -> ReturnType in statements })\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("在 Swift3.0 后，闭包默认都是"),a("code",[e._v("非逃逸闭包")]),e._v("，"),a("code",[e._v("逃逸闭包")]),e._v("需要在闭包前加上关键字"),a("code",[e._v("@escaping")]),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"常见的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的使用场景"}},[e._v("#")]),e._v(" 常见的使用场景")]),e._v(" "),a("p",[a("strong",[e._v("As a variable")]),e._v(" （UITableViewCell 中的有一些按钮点击事件）")]),e._v(" "),a("p",[e._v("TableViewCell.Swift")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("class TableViewCell: UITableViewCell {\n    //作为一个变量声明一个闭包\n    var btnTapActionClosure: ((UIButton)->Void)?\n    @IBAction func tapAction(_ sender: UIButton) {\n        guard btnTapActionClosure != nil else {\n            return\n        }\n        btnTapActionClosure!(sender)\n    }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("ViewController.swift")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('class ViewController: UIViewController {\n\n    @IBOutlet weak var tableView: UITableView!\n    override func viewDidLoad() {\n        super.viewDidLoad()\n        // Do any additional setup after loading the view, typically from a nib.\n    }\n\n}\n\nextension ViewController: UITableViewDataSource {\n    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {\n        return 10\n    }\n\n    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {\n        let cell = tableView.dequeueReusableCell(withIdentifier: "TableViewCell", for: indexPath) as! TableViewCell\n\n        cell.btnTapActionClosure = { sender in\n            //响应 Tap 点击事件\n            print("tap action")\n        }\n        return cell\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br")])]),a("h3",{attrs:{id:"进一步阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进一步阅读"}},[e._v("#")]),e._v(" 进一步阅读")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://fuckingclosuresyntax.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("How Do I Declare a Closure in Swift?"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/cb4333807954",target:"_blank",rel:"noopener noreferrer"}},[e._v("如何理解逃逸闭包"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://swifter.tips/retain-cycle/",target:"_blank",rel:"noopener noreferrer"}},[e._v("内存管理，WEAK 和 UNOWNED"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://swift.gg/2016/11/15/optional-non-escaping-closures/",target:"_blank",rel:"noopener noreferrer"}},[e._v("可选型的非逃逸闭包"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/@kumarpramod017/what-do-mean-escaping-and-nonescaping-closures-in-swift-d404d721f39d",target:"_blank",rel:"noopener noreferrer"}},[e._v("What do mean @escaping and @nonescaping closures in Swift?"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=t.exports}}]);