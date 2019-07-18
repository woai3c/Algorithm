const { exchange } = require('../../utils') 

/**
 * @param {number[]} arry
 * @return {void}
 */
function quick3Way(arry) {
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
    let lt = start, i = start + 1, gt = end
    const val = arry[start]
    while (i <= gt) {
        if (arry[i] < val) {
            exchange(arry, lt++, i++)
        } else if (arry[i] > val) {
            exchange(arry, i, gt--)
        } else {
            i++
        }
    }

    sort(arry, start, lt - 1)
    sort(arry, gt + 1, end)
}

module.exports = quick3Way