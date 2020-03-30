---
date: "2019-12-25"
title: "Go 开发环境搭建(Mac + VSCode)"
permalink: "go-develop-env"
type: "blog"
---

# Go 开发环境搭建

- 系统：Mac
- IDE：VSCode

## Go 安装

- 下载安装包

使用 Homebrew 安装，官方手动[下载安装包](https://golang.org/dl/)也行。

```sh
brew install golang
```

- 配置环境变量

```vim
// ~/.zshrc
#GOROOT
export GOROOT=/usr/local/opt/go/libexec

#GOPATH WORKSPACE
export GOPATH=~/Documents/work/go_work

#GOROOT BIN
export PATH=$PATH:$GOROOT/bin

#GOPATH BIN
export PATH=$PATH:$GOPATH/bin

```

执行 `source ~/.zshrc` 使环境变量生效。

最后，查看 `go env`。

## 配置 VSCode 开发环境

- 安装插件 [vscode-go](https://github.com/Microsoft/vscode-go/wiki/Go-tools-that-the-Go-extension-depends-on)
- 设置 go.toolsGopath

进入 VSCode 的偏好设置，将你的`$GOPATH`路径设置到 go.toolsGopath 中

```sh
cd $GOPATH
// 将路径设置到go.toolsGopath中
pwd
```

- go 环境需要的一些包（因为网络的问题需要手动下载）
  先`cd`到\$GOPATH 下，选择性的安装需要的包。VSCode 第一次打开 go 文件会提示你安装相关包，但是会失败，所以就根据缺少的包来选择安装。

```sh
go get -u -v github.com/ramya-rao-a/go-outline
go get -u -v github.com/acroca/go-symbols
go get -u -v github.com/mdempsky/gocode
go get -u -v github.com/rogpeppe/godef
go get -u -v golang.org/x/tools/cmd/godoc
go get -u -v github.com/zmb3/gogetdoc
go get -u -v golang.org/x/lint/golint
go get -u -v github.com/fatih/gomodifytags
go get -u -v golang.org/x/tools/cmd/gorename
go get -u -v sourcegraph.com/sqs/goreturns
go get -u -v golang.org/x/tools/cmd/goimports
go get -u -v github.com/cweill/gotests/...
go get -u -v golang.org/x/tools/cmd/guru
go get -u -v github.com/josharian/impl
go get -u -v github.com/haya14busa/goplay/cmd/goplay
go get -u -v github.com/uudashr/gopkgs/cmd/gopkgs
go get -u -v github.com/davidrjenni/reftools/cmd/fillstruct
```

## VSCode 调试

- 依赖于 [delve](https://github.com/derekparker/delve/blob/master/Documentation/installation/README.md)

关于它，暂时还未尝试，所以先留着，随后补上。

## Hello world

新建一个 helloword.go 文件。

```go
// helloword.go
package main

func main() {
	print("hello,world")
}
// $ hello,world
```

## See Also

- [Mac 安装 Golang 和 vscode](http://ddrv.cn/a/314841)
- [vscode-go](https://github.com/Microsoft/vscode-go/wiki/Go-tools-that-the-Go-extension-depends-on)
- [Getting Started](https://golang.org/doc/install)
