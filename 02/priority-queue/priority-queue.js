const { exchange } = require('../../utils')

// 最大优先队列
class MaxPQ {
    constructor(arr = []) {
        this.pq = [...arr]
        const len = this.pq.length
        // 从当前数组的中间节点开始，构造最大优先队列
        for (let i = Math.floor(len / 2 - 1); i >= 0; i--) {
            this.sink(i)
        }
    }

    isEmpty() {
        return this.pq.length === 0
    }

    getSize() {
        return this.pq.length
    }

    getVal() {
        // 将最小的值放到最前面，然后再执行 sink()，这样就可以把比它大的值逐个换到前面
        exchange(this.pq, 0, this.pq.length - 1)
        const val = this.pq.pop()
        this.sink(0)
        return val
    }

    insert(val) {
        this.pq.push(val)
        this.swim()
    }

    swim() {
        const pq = this.pq
        let i = pq.length - 1
        // 添加到最后面的元素可能比它的父节点要大，所以要逐个上浮比较替换
        while (i > 0) {
            // 将索引转换为从 1 开始计算，也就是将当前索引加 1，然后除以 2，再将这个数减 1，就能得到父节点的索引
            let j = ~~((i + 1) / 2) - 1
            if (pq[i] < pq[j]) break
            exchange(pq, i, j)
            i = j
        }
    }

    sink(i) {
        const pq = this.pq
        const maxIndex = pq.length - 1
        // 当前节点的值可能比较小，所以要与它的子节点比较，将大的值换到上面，如此直到末尾
        while ((2 * i + 1) <= maxIndex) {
            let j = 2 * i + 1
            if (j < maxIndex && pq[j] < pq[j + 1]) {
                j++
            }
    
            if (pq[i] >= pq[j]) {
                break
            }
    
            exchange(pq, i, j)
            i = j
        }
    }
}

module.exports = MaxPQ