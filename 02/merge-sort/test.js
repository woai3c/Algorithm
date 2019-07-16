const mergeSort = require('./merge-sort') 

function test() {
    const arry = [10,9,5,1,2,3,4,7,8,95,100,19,11,15,16,16,18,12,23,27,112,64,84,75,59,68,338,667,755,16,36,33,12]
    console.log('排序前:' + arry)
    mergeSort(arry)
    console.log('排序后:' + arry)
}

test()