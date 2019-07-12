/**
 * @param {number[]} arry
 * @return {void}
 */
function insertionSort(arry) {
	for (let i = 1, len = arry.length; i < len; i++) {
        for (let j = i; j > 0; j--) {
            if (arry[j] < arry[j - 1]) {
                const temp = arry[j]
                arry[j] = arry[j - 1]
                arry[j - 1] = temp
            } else {
                break
            }
        }
	}
}

module.exports = insertionSort