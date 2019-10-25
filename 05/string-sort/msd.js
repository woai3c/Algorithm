const aux = []
const R = 256

function msd(arry) {
    sort(arry, 0, arry.length - 1, 0)
}


function sort(arry, start, end, d) {
    if (end <= start) return
    const count = new Array(R + 2).fill(0)

    for (let i = start; i <= end; i++) {
        count[charAt(arry[i], d) + 2]++
    }

    for (let r = 0; r < R + 1; r++) {
        count[r + 1] += count[r]
    }

    for (let i = start; i <= end; i++) {
        aux[count[charAt(arry[i], d) + 1]++] = arry[i]
    }

    for (let i = start; i <= end; i++) {
        arry[i] = aux[i - start]
    }

    for (let r = 0; r < R; r++) {
        sort(arry, start + count[r], start + count[r + 1] - 1, d + 1)
    }
}

function charAt(s, d) {
    return d < s.length? s[d].charCodeAt() : -1
}

module.exports = msd