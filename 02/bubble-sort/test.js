const bubbleSort = require('./bubble-sort') 

function test() {
    const arry = [10,9,5,1,2,3,4,7,8,95,100]
    console.log('排序前:' + arry)
    console.log('排序后:' + bubbleSort(arry))
}

test()