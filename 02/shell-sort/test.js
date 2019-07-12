const shellSort = require('./shell-sort') 

function test() {
    const arry = [10,9,5,1,2,3,4,7,8,95,100]
    console.log('排序前:' + arry)
    shellSort(arry)
    console.log('排序后:' + arry)
}

test()