## 想法

- NSCache
- Dictionary
- YYCache
- Kingfisher 的缓存是怎么做的

## 如何自己实现 Cache

1. 线程安全怎么做？
2. 存储和访问怎么做？

### 为什么需要 Cache

Cache 的目的是为了追求更高的速度体验，Cache 的源头是两种数据读取方式在成本和性能上的差异。Cache 的本质是以空间换时间
Cache，iOS 系统的 clean page 和 dirty page 机制，HTTP 的 tag 机制等，这些背后都是 Cache 设计思想的应用。

在开始着手设计 Cache 之前，需要先理清数据存储的媒介。作为客户端开发人员来说，我们所关注的数据存储方式也有不少种：

- 数据最开始是存储在 Server 上，这些数据需要通过网络请求获取。
- 从 Server 获取数据时，会经过各种中间网络节点（比如代理），这些节点有时会缓存我们的数据。
  把数据下载到本地之后，我们会在本地 disk 缓存一份，这样或许不用每次都重新去服务器请求。
- 存到 disk 之后，数据的存储方式会影响到读取的速度，以 B+ Tree 存储的 sqlite 就比直接序列化 NSArray 到文件之中要快不少。
- App 启动时，系统会将从 Server 下载到的数据，从 disk 加载到 memory，memory 的读写性能比 disk 要快很多。
- 到了 Memory 中，不同的数据结构存储方式也会存在速度上的差异。用 NSDictionary（hash 表）形式存储读数据，写性能都比 Array 好，但 space 开销更大。虽说 memory 的读写性能比 disk 都高了很多，但在大集合类数据操作的时候有时也会遇到瓶颈。
- 比 Memory 更快的还有 Register，L1，L2，只不过对于 iOS App 开发来说，很少深入到这一层面的优化。
