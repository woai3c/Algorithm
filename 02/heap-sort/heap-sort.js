const { exchange } = require('../../utils')

/**
 * @param {number[]} arry
 * @return {void}
 */
function heapSort(arry) {
    const len = arry.length
    let maxIndex = len - 1
    for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
        sink(arry, i, maxIndex)
    }

    while (maxIndex) {
        exchange(arry, 0, maxIndex--)
        sink(arry, 0, maxIndex)
    }
}

/**
 * @param {number[]} arry
 * @param {number} i
 * @param {number} maxIndex
 * @return {void}
 */
function sink(arry, i, maxIndex) {
    while ((2 * i + 1) <= maxIndex) {
        let j = 2 * i + 1
        if (j < maxIndex && arry[j] < arry[j + 1]) {
            j++
        }

        if (arry[i] >= arry[j]) {
            break
        }

        exchange(arry, i, j)
        i = j
    }
}


module.exports = heapSort