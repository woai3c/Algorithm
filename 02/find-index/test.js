const findIndex = require('./find-index')
const quickSort = require('../quick-sort/quick-sort')
const assert = require('assert')

assert.strictEqual(1, findIndex([6,5,4,6,3,1,2], 0))
assert.strictEqual(2, findIndex([6,5,4,6,3,1,2], 1))
assert.strictEqual(3, findIndex([6,5,4,6,3,1,2], 2))
assert.strictEqual(4, findIndex([6,5,4,6,3,1,2], 3))
assert.strictEqual(5, findIndex([6,5,4,6,3,1,2], 4))
assert.strictEqual(6, findIndex([6,5,4,6,3,1,2], 5))
assert.strictEqual(6, findIndex([6,5,4,6,3,1,2], 6))

const arr = [6,5,4,6,3,1,2,10,11,30,50,4,32,89,45,12636,778,112,5646556,6558,1,2,3,4,887,665,414,55,62,10,1,5,54,4,5,5,566,21,4,4,5,5,22]
const arr1 = [...arr]
const arr2 = [...arr]
console.time('quicksort')
quickSort(arr1)
console.log(arr1[10])
console.timeEnd('quicksort')

console.time('findIndex')
console.log(findIndex(arr2, 10))
console.timeEnd('findIndex')
// 很明显的可以看到，找到第 k 小的元素，findIndex 比排序后再找要快。
console.log('测试通过')