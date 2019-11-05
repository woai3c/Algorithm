function BoyerMoore(pat) {
    this.pat = pat
    this.R = 256
    this.right = new Array(this.R).fill(-1)
    this.init()
}

BoyerMoore.prototype = {
    init() {
        for (let i = 0, len = this.pat.length; i < len; i++) {
            this.right[this.pat.charCodeAt(i)] = i
        }
    },

    search(txt) {
        const M = this.pat.length
        const N = txt.length - M
        let skip
        for (let i = 0; i <= N; i += skip) {
            skip = 0
            for (let j = M - 1; j >= 0; j--) {
                if (txt[i + j] != this.pat[j]) {
                    skip = j - this.right[txt.charCodeAt(i + j)]
                    if (skip < 0) skip = 1
                    break
                }
            }

            if (skip == 0) return i
        }

        return -1
    }
}

module.exports = BoyerMoore