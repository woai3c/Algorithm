const binarySearch = require('./binary_search.js') 

/**
 * [循环查找]
 * @param  {array} 
 * @param  {number} val  [value]
 * @return {number}      [index]
 */
function loopSearch(arry, val) { 
	let len = arry.length
	for (let i = 0; i < len; i++) {
		if (arry[i] === val) {
			return i
		}
	}
	return -1
}

/**
 * [创建随机数组]
 * @param  {number} 
 * @param  {number} 
 * @return {array}        
 */
function createData(len, limit) {
	const arry = []
	let temp = 0
	for (let i = 0; i < len; i++) {
		do {
			temp = Math.floor(Math.random() * limit)
		}
		while (arry.indexOf(temp) !== -1) 
		arry.push(temp)
	}
	return arry
}


/**
 * [测试函数]
 * @param  {number}  
 * @param  {number} num   [生成数量]
 * @param  {number} num2  [要查找的次数]
 * @return {none}       
 */
function test(limit, num1, num2) {
	if (num1 > limit) {
		console.log('生成数数量不能大于上限值')
		return
	}

	const arry1 = createData(num1, limit).sort((a, b) => a - b)
	const arry2 = createData(num2, limit)
	
	let t1 = new Date()
	arry2.forEach(e => {
		binarySearch(arry1, e)
	})
	let t2 = new Date()
	console.log((t2 - t1) / 1000 + 's')

	let t3 = new Date()
	arry2.forEach(e => {
		loopSearch(arry1, e)
	})
	let t4 = new Date()
	console.log((t4 - t3) / 1000 + 's')
}

test(1000000, 100000, 100000)