---
date: "2020-01-18"
title: "Flutter Android Development"
---

# Flutter Android 开发环境

- sdkmanager --licenses 的[问题](https://stackoverflow.com/a/55641042/4610600)

macOS:

```sh
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/jdk/Contents/Home
yes | ~/Library/Android/sdk/tools/bin/sdkmanager --licenses
```

## 发布

- 打包 apk

```sh
flutter build apk --split-per-abi
```
