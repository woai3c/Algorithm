const quickSort = require('./quick-sort') 
const quick3Way = require('./quick3way') 

function test() {
    let arry = [10,9,5,1,2,3,4,7,8,95,100]
    console.log('quickSort排序前:' + arry)
    quickSort(arry)
    console.log('quickSort排序后:' + arry)
    arry = [10,9,5,1,2,3,4,7,8,95,100]
    console.log('quick3Way排序前:' + arry)
    quick3Way(arry)
    console.log('quick3Way排序后:' + arry)
}

test()