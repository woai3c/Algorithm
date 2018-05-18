/**
 * [冒泡排序]
 * @param  {array} [乱序数组]
 * @return {array} [顺序/倒序数组]
 */
function bubble(arry) {
	let len = arry.length - 1
	let temp
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (arry[j] > arry[j + 1]) {
				temp = arry[j]
				arry[j] = arry[j + 1]
				arry[j + 1] = temp
			}
		}
	}
	return arry
}

module.exports = bubble