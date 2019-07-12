/**
 * @param {number[]} arry
 * @return {void}
 */
function bubbleSort(arry) {
	let len = arry.length - 1
	for (let i = 0; i < len; i++) {
		// len - i 可以排除上一轮最大的数 不用再对比 减少对比次数
		for (let j = 0, l = len - i; j < l; j++) {
			if (arry[j] > arry[j + 1]) {
				const temp = arry[j]
				arry[j] = arry[j + 1]
				arry[j + 1] = temp
			}
		}
	}
}

module.exports = bubbleSort