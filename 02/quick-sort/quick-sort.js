const { exchange } = require('../../utils') 

/**
 * @param {number[]} arry
 * @return {void}
 */
function quickSort(arry) {
	sort(arry, 0, arry.length - 1)
}

/**
 * @param {number[]} arry
 * @param {number} start
 * @param {number} end
 * @return {void}
 */
function sort(arry, start, end) {
	if (start >= end) return
	const segmentIndex = partition(arry, start, end)
	sort(arry, start, segmentIndex - 1)
	sort(arry, segmentIndex + 1, end)
}

/**
 * @param {number[]} arry
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
function partition(arry, start, end) {
	const val = arry[start]
	let i = start, j = end + 1
	while (true) {
		while (arry[++i] < val && i < end) {}

		while (arry[--j] > val && j > start) {}

		if (i >= j) break
		exchange(arry, i, j)
	}

	exchange(arry, start, j)
	return j
}

module.exports = quickSort