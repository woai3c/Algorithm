const heapSort = require('./heap-sort') 

function test() {
    const arry = [10,9,5,1,2,88,3,9,15,17,4,7,8,95,100]
    console.log('排序前:' + arry)
    heapSort(arry)
    console.log('排序后:' + arry)
}

test()