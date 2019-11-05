function KMP(pat) {
    this.pat = pat
    this.R = 256
    this.dfa = createTwoDimensionalArray(256, pat.length, 0)
    this.init()
}

KMP.prototype = {
    init() {
        this.dfa[this.pat.charCodeAt(0)][0] = 1
        for (let i = 0, j = 1, len = this.pat.length; j < len; j++) {
            for (let c = 0, R = this.R; c < R; c++) {
                this.dfa[c][j] = this.dfa[c][i]
            }

            this.dfa[this.pat.charCodeAt(j)][j] = j + 1
            i = this.dfa[this.pat.charCodeAt(j)][i]
        }
    },

    search(txt) {
        let i, j
        const N = txt.length
        const M = this.pat.length
        for (i = 0, j = 0; i < N && j < M; i++) {
            j = this.dfa[txt.charCodeAt(i)][j]
        }

        if (j == M) {
            return i - M
        }

        return -1
    }
}

function createTwoDimensionalArray(rows, cols, val) {
    const result = []
    for (let i = 0; i < rows; i++) {
        const temp = new Array(cols).fill(val)
        result.push(temp)
    }

    return result
}

module.exports = KMP