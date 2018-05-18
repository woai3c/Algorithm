const bubble = require('./bubble.js')
/**
 * [测试函数]
 * @param  {number} limit [上限值]
 * @param  {number} num   [生成数量]
 */
function test(limit, num) {
	const arry = []
	for (let i = 0; i < num; i++) {
		arry.push(Math.floor(Math.random() * limit))
	}
	console.log('排序前：' + arry)
	console.log('排序后：' + bubble(arry))
}

test(1000, 20)