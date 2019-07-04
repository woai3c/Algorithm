/**
 * @param {number[]} arry
 * @param {number} val
 * @return {number}
 */
function binarySearch(arry, val) {  
	let start = 0
	let end = arry.length - 1
	while (start <= end) {
		let mid = start + Math.floor((end - start) / 2)
		if (arry[mid] < val) {
			start = mid + 1
		} else if (arry[mid] > val) {
			end = mid - 1
		} else {
			return mid
		} 
	} 

	return -1
}

module.exports = binarySearch