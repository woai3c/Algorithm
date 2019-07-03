/**
 * @param {number[]} arry
 * @return {number[]}
 */
function bubble(arry) {
	let len = arry.length - 1
	let temp
	for (let i = 0; i < len; i++) {
		// len - i 可以排除上一轮最大的数 不用再对比 减少对比次数
		for (let j = 0, l = len - i; j < l; j++) {
			if (arry[j] > arry[j + 1]) {
				temp = arry[j]
				arry[j] = arry[j + 1]
				arry[j + 1] = temp
			}
		}
	}
	
	return arry
}