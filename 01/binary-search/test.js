const binarySearch = require('./binary-search') 
const { generateRandomIntegerArry, loopSearchFindVal } = require('../../utils')

valLimit = ~~process.argv[2]
valNum = ~~process.argv[3]
if (!valLimit || !valNum) {
    console.log('请按照命令格式运行测试：node test 生成值的上限 生成值的个数')
    return
}

function test(valLimit, valNum) {
    const arry1 = generateRandomIntegerArry(valLimit, valNum).sort((a, b) => a - b)
    const arry2 = generateRandomIntegerArry(valLimit, valNum)

	console.time(`二分查找耗时（查找${valNum}次）`)
	arry2.forEach(val => {
		binarySearch(arry1, val)
    })
	console.timeEnd(`二分查找耗时（查找${valNum}次）`)

	console.time(`循环查找耗时（查找${valNum}次）`)
	arry2.forEach(val => {
		loopSearchFindVal(arry1, val)
	})
	console.timeEnd(`循环查找耗时（查找${valNum}次）`)
}

test(valLimit, valNum)