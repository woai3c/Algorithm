# 排序
排序就是将一组对象按照某种逻辑顺序重新排列的过程。排序算法的额外内存开销和运行时间是同等重要的。
排序算法可分为两类：除了函数调用所需的栈和固定数目的实例变量之外无需额外内存的原地排序算法，以及需要额外内存空间来存储另一份数组副本的其他排序算法。

通过提升速度来解决其他方式无法解决的问题是研究算法的设计和性能的主要原因之一。

## 算法
|算法|是否稳定|是否为原地排序|时间复杂度|空间复杂度|备注|
|-|-|-|-|-|-|
|[冒泡排序](https://github.com/woai3c/Algorithm/tree/master/02/bubble-sort)|是|是|N^2|1||
|[选择排序](https://github.com/woai3c/Algorithm/tree/master/02/selection-sort)|否|是|N^2|1|当数据规模较小时，选择排序性能较好|
|[插入排序](https://github.com/woai3c/Algorithm/tree/master/02/insertion-sort)|是|是|介于N和N^2之间|1|若数组基本有序且数据规模较小时，选用插入排序较好（在本人电脑做实验得出，数组长度为 600 左右时，选择和插入排序差不多，数组长度越小，选择排序越快，数组长度越大，插入排序越快）。|
|[希尔排序](https://github.com/woai3c/Algorithm/tree/master/02/shell-sort)|否|是|NlogN - N^2|1|数据量较小且基本有序时（比插入排序更快的排序算法）|
|[快速排序](https://github.com/woai3c/Algorithm/tree/master/02/quick-sort)|否|是|NlogN|logN|快速排序适合处理大量数据排序时的场景|
|[三向快速排序](https://github.com/woai3c/Algorithm/tree/master/02/quick-sort)|否|是|介于N和NlogN之间|logN|运行效率由概率提供保证，同时也取决于输入元素的分布情况|
|[归并排序](https://github.com/woai3c/Algorithm/tree/master/02/merge-sort)|是|否|NlogN|N|数据量较大且要求排序稳定时|
|[堆排序](https://github.com/woai3c/Algorithm/tree/master/02/heap-sort)|否|是|NlogN|1|堆排序适合处理数据量大的情况，数据呈流式输入时用堆排序也很方便|

![](../imgs/2-15.png)

![](../imgs/2-16.png)

![](../imgs/2-17.png)

## 数据结构
### 优先队列
[优先队列实现](./priority-queue)

![](../imgs/2-8.png)

#### 二叉堆
当一棵二叉树的每个节点都大于等于它的两个子节点时，它被称为堆有序。

![](../imgs/2-9.png)

堆有序化过程中又分为上浮和下沉两种情况：

![](../imgs/2-10.png)

![](../imgs/2-11.png)

#### 多叉堆
![](../imgs/2-12.png)

## 测试本章所有排序方法
```js
node compare-test.js 生成值的上限 生成值的个数

// example
node compare-test.js 100000 8888
```

## 排序的应用
#### 归约
归约指的是为解决某个问题而发明的算法正好可以用来解决另一个问题。

### 找出中位数
[程序实现](./find-index)

使用快速排序的切分法可以在线性级别的时间内找到中位数。

![](../imgs/2-18.png)

![](../imgs/2-19.png)