# 数据结构

1. 目的：问题求解，结构：实体 + 关系

- 按照逻辑关系组织起来的一批数据
- 按一定的存储方法把它存储在计算机中
- 在这些数据上定义了一个运算的集合

2. 逻辑组织

- 线性结构（表、栈、队列、串）
- 非线性（树、二叉树、Huffman 树、二叉检索树）
- 图（有向图、无向图）

> 注：先定义逻辑结构，数据对象及其关系，在定义运算，数据操作

3.数据结构运算

- 建立
- 清除
- 增、删、改
- 排序
- 检索

**你是怎么理解数据结构的？**

- 目的：就是问题求解
- 构成：讲问题进行实体关系逻辑，计算运算

### 栈 Stack

> Last-in first-out stack (LIFO)
> Push and pop are O(1) operations.

### 队列 Queue

> First-in first-out queue (FIFO)
> New elements are added to the end of the queue. Dequeuing pulls elements from
> the front of the queue.
> Enqueuing and dequeuing are O(1) operations.

### 链表 LinkedList

链表的边界条件

- 头部、尾部置 nil
- 空链表的处理
- 插入或删除结点时指针勾链的顺序
- 指针移动的正确新（插入、查找、遍历）
