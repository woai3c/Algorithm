const bubbleSort = require('./bubble-sort/bubble-sort')
const heapSort = require('./heap-sort/heap-sort')
const insertionSort = require('./insertion-sort/insertion-sort')
const mergeSort = require('./merge-sort/merge-sort')
const quickSort = require('./quick-sort/quick-sort')
const quick3Way = require('./quick-sort/quick3way')
const selectionSort = require('./selection-sort/selection-sort')
const shellSort = require('./shell-sort/shell-sort')
const { generateRandomIntegerArry } = require('../utils')

valLimit = ~~process.argv[2]
valNum = ~~process.argv[3]
if (!valLimit || !valNum) {
    console.log('请按照命令格式运行测试：node test 生成值的上限 生成值的个数')
    return
}

function test(valLimit, valNum) {
    const arry = generateRandomIntegerArry(valLimit, valNum)
    const sortFunc = {
        bubbleSort,
        selectionSort,
        insertionSort,
        shellSort,
        quickSort,
        quick3Way,
        mergeSort,
        heapSort,
    }

    const map = {
        bubbleSort: '冒泡排序',
        selectionSort: '选择排序',
        insertionSort: '插入排序',
        shellSort: '希尔排序',
        quickSort: '快速排序',
        quick3Way: '三向切分快速排序',
        mergeSort: '归并排序',
        heapSort: '堆排序',
    }

    console.log(`包含${valNum}个数的数组排序时间：`)
    for (const key in sortFunc) {
        const tempArry = [...arry]
        console.time(`${map[key]}耗时`)
        sortFunc[key](tempArry)
        console.timeEnd(`${map[key]}耗时`)
    }

    console.time(`JavaScript数组原生方法sort排序耗时`)
    arry.sort((a, b) => a - b)
    console.timeEnd(`JavaScript数组原生方法sort排序耗时`)
}

test(valLimit, valNum)