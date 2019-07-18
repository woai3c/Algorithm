/**
 * @param {number[]} arry
 * @return {void}
 */
function selectionSort(arry) {
	const len = arry.length
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
}

module.exports = selectionSort