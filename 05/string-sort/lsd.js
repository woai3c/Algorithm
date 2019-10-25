function lsd(arry, w) {
    const len = arry.length
    const aux = []
    const R = 256

    for (let d = w - 1; d >= 0; d--) {
        const count = new Array(R + 1).fill(0)
        for (let i = 0; i < len; i++) {
            count[arry[i][d].charCodeAt() + 1]++
        }

        for (let r = 0; r < R; r++) {
            count[r + 1] += count[r]
        }

        for (let i = 0; i < len; i++) {
            aux[count[arry[i][d].charCodeAt()]++] = arry[i]
        }

        for (let i = 0; i < len; i++) {
            arry[i] = aux[i]
        }
    }
}

module.exports = lsd