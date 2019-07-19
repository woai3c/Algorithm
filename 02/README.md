## 算法
|算法|是否稳定|是否为原地排序|时间复杂度|空间复杂度|备注|
|-|-|-|-|-|-|
|[冒泡排序](https://github.com/woai3c/Algorithm/tree/master/02/bubble-sort)|是|是|N^2|1||
|[选择排序](https://github.com/woai3c/Algorithm/tree/master/02/selection-sort)|否|是|N^2|1||
|[插入排序](https://github.com/woai3c/Algorithm/tree/master/02/insertion-sort)|是|是|介于N和N^2之间|1|取决于输入元素的排列情况|
|[希尔排序](https://github.com/woai3c/Algorithm/tree/master/02/shell-sort)|否|是|NlogN - N^2|1||
|[快速排序](https://github.com/woai3c/Algorithm/tree/master/02/quick-sort)|否|是|NlogN|logN|运行效率由概率提供保证|
|[三向快速排序](https://github.com/woai3c/Algorithm/tree/master/02/quick-sort)|否|是|介于N和NlogN之间|logN|运行效率由概率提供保证，同时也取决于输入元素的分布情况|
|[归并排序](https://github.com/woai3c/Algorithm/tree/master/02/merge-sort)|是|否|NlogN|N||
|[堆排序](https://github.com/woai3c/Algorithm/tree/master/02/heap-sort)|否|是|NlogN|1||


## 数据结构
* 二叉堆
* 多叉堆

## 测试本章所有排序方法
```js
node compare-test.js
```
