(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{482:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"编译优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译优化"}},[s._v("#")]),s._v(" 编译优化")]),s._v(" "),a("h2",{attrs:{id:"工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[s._v("#")]),s._v(" 工具")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/AlDanial/cloc",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码统计 cloc"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/RobertGummesson/BuildTimeAnalyzer-for-Xcode",target:"_blank",rel:"noopener noreferrer"}},[s._v("Xcode 编译分析"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("代码统计脚本：")])]),s._v(" "),a("p",[s._v("简单命令行:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*.swift"')]),s._v(" -print0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -0 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("cloc 使用脚本:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("cloc "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" --exclude-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Carthage,Frameworks,generated,.idea,output,derivedData,Fastlane --not-match-d"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".framework --by-file --xml --out"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("output/cloc.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -type d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" -path ./Pods -o -path ./Vendor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -prune -o "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" -iname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.m -o -iname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.mm -o -iname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.h -o -iname "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("*.swift "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" -print0 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -0 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("a",{attrs:{href:"https://wiki.jenkins.io/display/JENKINS/SLOCCount+Plugin",target:"_blank",rel:"noopener noreferrer"}},[s._v("SLOCCount Plugin"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"条件编译分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件编译分析"}},[s._v("#")]),s._v(" 条件编译分析")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("Xcode build duration")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("defaults "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.dt.Xcode ShowBuildOperationDuration -bool YES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("Faster build times by leveraging multi-core CPU")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("defaults "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("write")]),s._v(" com.apple.dt.Xcode IDEBuildOperationMaxNumberOfConcurrentCompileTasks "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("sysctl -n hw.ncpu"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("Flag to emit warnings whenever a function takes longer than some threshold to compile. Add the following to Other Swift Flags")])])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("//设置常函数块阈值为 100ms\n-Xfrontend -warn-long-function-bodies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("strong",[s._v("To enable warn about individual expressions that take a long time to type check, go the Build Settings, “Swift Compiler - Custom Flags”, “Other Swift Flags”, and add")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    -Xfrontend -warn-long-expression-type-checking=<limit>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中"),a("limit",[s._v("是表达式为了输入警告而必须键入的毫秒数的下限。")])],1),s._v(" "),a("ul",[a("li",[s._v("有一个脚本")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("xcodebuild -workspace App.xcworkspace -scheme App clean build "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OTHER_SWIFT_FLAGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xfrontend -debug-time-function-bodies"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("-9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("ms "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -nr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" culprits.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"代码优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码优化"}},[s._v("#")]),s._v(" 代码优化")]),s._v(" "),a("ul",[a("li",[s._v("属性观察器")])]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("didSet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不要放入过多代码,特别是设置Cell中设置UI时")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("注释")])]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 注释：......")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一定要规范的编写注释，像这种代码和注释同行，会有影响到编译速度的")]),s._v(" "),a("ul",[a("li",[s._v("可选值"),a("code",[s._v("nil")]),s._v("判空问题")])]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("Void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// error:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" block "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("nil")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// correct:")]),s._v("\nblock"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" block "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("ul",[a("li",[s._v("少用批量定义变量")])]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("复杂表达式过长")])]),s._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("DispatchQueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("asyncAfter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            deadline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("DispatchTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("second "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NSEC_PER_SEC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Double")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("NSEC_PER_SEC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" closure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("数组合并")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("if-else")]),s._v(" 层级")])]),s._v(" "),a("li",[a("p",[s._v("模块化代码，减少重复编译")])]),s._v(" "),a("li",[a("p",[s._v("生产环境下，可以关掉 dSYM 生成")])]),s._v(" "),a("li",[a("p",[s._v("移除废弃代码")])])]),s._v(" "),a("h2",{attrs:{id:"其他阅读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他阅读"}},[s._v("#")]),s._v(" 其他阅读")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/apple/swift/blob/master/docs/CompilerPerformance.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Swift 编译性能"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);