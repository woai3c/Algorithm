const { exchange } = require('../../utils') 

// 寻找第 k 小的元素
function findIndex(arr, k) {
	sort(arr, 0, arr.length - 1, k)
    return arr[k]
}

function sort(arr, start, end, k) {
	if (start >= end) return
	const segmentIndex = partition(arr, start, end)
    if (segmentIndex == k) return
    if (segmentIndex > k) return sort(arr, start, segmentIndex - 1, k)
    return sort(arr, segmentIndex + 1, end, k)
}

function partition(arr, start, end) {
	const val = arr[start]
	let i = start, j = end + 1
	while (true) {
		while (arr[++i] < val && i < end) {}

		while (arr[--j] > val && j > start) {}

		if (i >= j) break
		exchange(arr, i, j)
	}

	exchange(arr, start, j)
	return j
}

module.exports = findIndex