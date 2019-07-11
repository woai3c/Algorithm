/**
 * @param {number[]} arry
 * @return {number[]}
 */
function selectionSort(arry) {
	const len = arry.length - 1
	for (let i = 0, l = len - 1; i < l; i++) {
		let minIndex = i
		for (let j = i + 1; j < len; j++) {
			if (arry[j] < arry[minIndex]) {
				minIndex = j
            }
        }
		
		const temp = arry[i]
		arry[i] = arry[minIndex]
		arry[minIndex] = temp
	}
	
	return arry
}

module.exports = selectionSort