/**
 * @param {number[]} arry
 * @return {void}
 */
function mergeSort(arry) {
    sort(arry, 0, arry.length - 1)
}

// 另一种写法 循环
// function mergeSort(arry) {
//     const len = arry.length
//     for (let step = 1; step < len; step += step) {
//         for (let start = 0; start < len - step; start += step + step) {
//             merge(arry, start, start + step - 1, Math.min(start + step + step - 1, len - 1))
//         }
//     }
// }

/**
 * @param {number[]} arry
 * @param {number} start
 * @param {number} end
 * @return {void}
 */
function sort(arry, start, end) {
    if (start >= end) return
    const mid = start + Math.floor((end - start) / 2)
    sort(arry, start, mid)
    sort(arry, mid + 1, end)
    // 如果a[mid] 小于 a[mid + 1] 就可以认为数组已经有序了，路过 merge 方法
    if (arry[mid] < arry[mid + 1]) return
    merge(arry, start, mid, end)
}

/**
 * @param {number[]} arry
 * @param {number} start
 * @param {number} mid
 * @param {number} end
 * @return {void}
 */
function merge(arry, start, mid, end) {
    const tempArry = arry.slice(start, end + 1)
    let i = 0, j = mid - start + 1
    let leftEnd = mid - start, rightEnd = end - start
    for (let k = start; k <= end; k++) {
        if (j > rightEnd) {
            arry[k] = tempArry[i++]
        } else if (i > leftEnd) {
            arry[k] = tempArry[j++]
        } else if (tempArry[i] < tempArry[j]) {
            arry[k] = tempArry[i++]
        } else {
            arry[k] = tempArry[j++]
        }
    }
}

module.exports = mergeSort