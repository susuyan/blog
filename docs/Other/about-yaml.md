---
date: "2019-12-19"
title: "About YAML"
permalink: "2019-12-19-about-yaml"
---

# 了解 YAML

YAML 是一个可读性高，用来表达数据序列化的格式，用来编写配置文件，阅读起来会比 JSON 要方便。

## 基本规则

- 大小写敏感
- `---`作为分区
- \# 表示注释，从这个字符一直到行尾，都会被解析器忽略
- 使用缩进表示层级关系
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可

## 语法

- 数组：

```yaml
--- # 最喜欢的電影
- Casablanca
- North by Northwest
- Notorious
```

```yaml
--- # 购物清单
[milk, pumpkin pie, eggs, juice]
```

- 对象:

```yaml --- # 区块形式
name: John Smith
age: 33
--- # 內置形式
{ name: John Smith, age: 33 }
```

- 纯量

  - 字符串、整数、浮点数 number: 10
  - 布尔值 isshow: true
  - Null name: ~
  - 时间 iso8601: 2001-12-14t21:59:43.10-05:00
  - 日期 date: 1976-07-31

- 字符串 str: 这是一行字符串

## See Also

- [YAML 语言教程](https://www.ruanyifeng.com/blog/2016/07/yaml.html)
