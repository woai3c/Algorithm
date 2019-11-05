function KMP(pat) {
    this.pat = pat
    // 部分匹配值表
    this.matchTable = createMatchTable(pat)
}

KMP.prototype = {
    search(txt) {
        const pat = this.pat
        const M = pat.length
        const N = txt.length
        // 是否已经命中首字母，即pat[0]
        let isInitialMatch = false
        // 字符串索引 匹配模式索引 txt[i] == pat[0]时 i的缓存 cacheMatchIndex = i
        let i = 0, j = 0, cacheMatchIndex = 0
        while (i < N && j < M) {
            if (txt[i] == pat[j]) {
                if (!isInitialMatch) {
                    isInitialMatch = true
                    cacheMatchIndex = i
                }

                j++
                i++
            } else if (isInitialMatch) {
                i = cacheMatchIndex + j - this.matchTable[j - 1]
                j = 0
                isInitialMatch = false
            } else {
                i++
            }
        }

        if (j == M) {
            return i - M
        }

        return -1
    }
}

// 算法参考
// http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html
function createMatchTable(pat) {
    const matchTable = []
    for (let i = 0, len = pat.length; i < len; i++) {
        matchTable[i] = segmentation(pat.slice(0, i + 1))
    }

    return matchTable
}

function segmentation(pat) {
    const prefix = []
    const suffix = []
    let pre = ''
    let suf = ''
    for (let i = 0, len = pat.length; i < len - 1; i++) {
        pre += pat[i]
        suf = pat[len - i - 1] + suf
        prefix.push(pre)
        suffix.push(suf)
    }

    let max = 0
    for (let i = 0, len = prefix.length; i < len; i++) {
        // "部分匹配值"就是"前缀"和"后缀"的最长的共有元素的长度
        if (suffix.includes(prefix[i]) && prefix[i].length > max) {
            max = prefix[i].length
        }
    }

    return max
}

module.exports = KMP