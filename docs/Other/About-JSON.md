---
title: "了解 JSON"
date: "2019-12-17"
permalink: "2019-12-17-about-json"
---

## 了解 JSON

`JSON`(JavaScript Object Notation) 是一种`轻量级的数据交换格式`。 易于人阅读和编写。同时也易于机器解析和生成。 它基于 JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999 的一个子集。 JSON 采用完全独立于语言的文本格式，但是也使用了类似于 C 语言家族的习惯（包括 C, C++, C#, Java, JavaScript, Perl, Python 等）。 这些特性使 JSON 成为理想的数据交换语言。

通常来讲，JSON 数据是服务端给的，而客户端不应该完全信任外界传入的值。如果服务端忽略了这个字段，或者 JSON 数据被中间人 (比如运营商) 拦截修改，那这个字段也仍然可能是 nil。

### **JSON 的几种格式**

![对象](http://www.json.org/object.gif)
![数组](http://www.json.org/array.gif)
![值](http://www.json.org/value.gif)
![字符串](http://www.json.org/string.gif)
![数值](http://www.json.org/number.gif)

## 进一步阅读

- [JSON](http://www.json.org/json-zh.html)
- [JSON 格式化工具](https://jsoneditoronline.org/)
- [Swift 项目中涉及到 JSONDecoder，网络请求，泛型协议式编程的一些记录和想法](https://ming1016.github.io/2018/04/02/record-and-think-about-swift-project-jsondecoder-networking-and-pop/)
- [JSONEncoder.swift](https://github.com/apple/swift/blob/master/stdlib/public/SDK/Foundation/JSONEncoder.swift)
- [Swift 4 JSON 解析指南](https://bignerdcoding.com/archives/37.html)
- [Swift 4.1 中的 Codable 改进](https://bignerdcoding.com/archives/61.html)
- [SwiftyJson 中文介绍](http://tangplin.github.io/swiftyjson/)
- [RawRepresentable](https://www.jianshu.com/p/ded6d91bc9f6)
