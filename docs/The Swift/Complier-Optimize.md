# 编译优化

## 工具

- [代码统计 cloc](https://github.com/AlDanial/cloc)
- [Xcode 编译分析](https://github.com/RobertGummesson/BuildTimeAnalyzer-for-Xcode)
- 代码统计脚本：

简单命令行:

```sh
find . -name "*.swift" -print0 | xargs -0 wc -l
```

cloc 使用脚本:

```sh
cloc . --exclude-dir=Carthage,Frameworks,generated,.idea,output,derivedData,Fastlane --not-match-d=.*\.framework --by-file --xml --out=output/cloc.xml
```

```sh
find . -type d \( -path ./Pods -o -path ./Vendor \) -prune -o \( -iname \*.m -o -iname \*.mm -o -iname \*.h -o -iname \*.swift \) -print0 | xargs -0 wc -l
```

- [SLOCCount Plugin](https://wiki.jenkins.io/display/JENKINS/SLOCCount+Plugin)

## 条件编译分析

- **Xcode build duration**

```sh
defaults write com.apple.dt.Xcode ShowBuildOperationDuration -bool YES
```

- **Faster build times by leveraging multi-core CPU**

```sh
defaults write com.apple.dt.Xcode IDEBuildOperationMaxNumberOfConcurrentCompileTasks `sysctl -n hw.ncpu`
```

- **Flag to emit warnings whenever a function takes longer than some threshold to compile. Add the following to Other Swift Flags**

```sh
//设置常函数块阈值为 100ms
-Xfrontend -warn-long-function-bodies=100
```

- **To enable warn about individual expressions that take a long time to type check, go the Build Settings, “Swift Compiler - Custom Flags”, “Other Swift Flags”, and add**

```
    -Xfrontend -warn-long-expression-type-checking=<limit>
```

其中<limit>是表达式为了输入警告而必须键入的毫秒数的下限。

- 有一个脚本

```sh
xcodebuild -workspace App.xcworkspace -scheme App clean build OTHER_SWIFT_FLAGS="-Xfrontend -debug-time-function-bodies" | grep [1-9].[0-9]ms | sort -nr > culprits.txt
```

## 代码优化

- 属性观察器

```swift
didSet{
    // 不要放入过多代码,特别是设置Cell中设置UI时
}
```

- 注释

```swift
let a = 0 // 注释：......
```

一定要规范的编写注释，像这种代码和注释同行，会有影响到编译速度的

- 可选值`nil`判空问题

```swift
var block:(()->Void)?

// error:
if block != nil {
    block()
}
// correct:
block?()
if let b = block {
    b()
}
```

- 少用批量定义变量

```swift
var a = 0, b = 0, c = 0
```

- 复杂表达式过长

```swift
 DispatchQueue.main.asyncAfter(
            deadline: DispatchTime.now() + Double(Int64(second * Double(NSEC_PER_SEC))) / Double(NSEC_PER_SEC), execute: closure)
```

- 数组合并

- `if-else` 层级

- 模块化代码，减少重复编译
- 生产环境下，可以关掉 dSYM 生成
- 移除废弃代码

## 其他阅读

- [Swift 编译性能](https://github.com/apple/swift/blob/master/docs/CompilerPerformance.md)
