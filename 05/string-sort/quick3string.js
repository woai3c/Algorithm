const { exchange } = require('../utils')
function quick3string(arry) {
    sort(arry, 0, arry.length - 1, 0)
}


function sort(arry, start, end, d) {
    if (end <= start) return
    let lt = start, gt = end, i
    const v = charAt(arry[start], d)
    i = start + 1

    while (i <= gt) {
        const t = charAt(arry[i], d)
        if (t < v) {
            exchange(arry, lt++, i++)
        } else if (t > v) {
            exchange(arry, i, gt--)
        } else {
            i++
        }
    }

    sort(arry, start, lt - 1, d)
    // v < 0 代表已经到了字符串末尾
    if (v >= 0) sort(arry, lt, gt, d + 1)
    sort(arry, gt + 1, end, d)
}

function charAt(s, d) {
    return d < s.length? s[d].charCodeAt() : -1
}

module.exports = quick3string