/**
 * @param {number[]} arry
 * @return {void}
 */
function shellSort(arry) {
    const len = arry.length
    const n = len / 3
    let step = 1
    // 以 step 为步长隔开数组，将每相隔一个 step 之间的数组项进行比较
    while (step < n) {
        step = step * 3 + 1 // 1, 4, 13, 40, 121, 364, 1093...
    }

    while (step >= 1) {
        // 将数组变为 step 有序
        for (let i = step; i < len; i++) {
            // 将 arry[i] 插入到 arry[i - step], arry[i - 2 * step], arry[i - 3 * step]... 中
            for (let j = i; j >= step; j -= step) {
                const tempIndex = j - step
                if (arry[j] < arry[tempIndex]) {
                    const tempVal = arry[j]
                    arry[j] = arry[tempIndex]
                    arry[tempIndex] = tempVal
                } else {
                    break
                }
            }
        }

        step = Math.floor(step / 3)
    }
}

module.exports = shellSort