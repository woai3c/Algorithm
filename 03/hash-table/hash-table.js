function HashTable(data = []) {
    this.size = data.length
    this.keys = new Array(this.size)
    this.vals = new Array(this.size)
    this.n = 0
    this.init(data)
}

HashTable.prototype = {
    init(data) {
        data.forEach(item => {
            this.set(item.key, item.val)
        })
    },
    // 返回哈希表键的数量 非哈希表大小
    getSize() {
        return this.n
    },

    get(key) {
        for (let i = this.hashCode(key); this.keys[i] !== undefined; i = (i + 1) % this.size) {
            if (this.keys[i] == key) return this.vals[i]
        }

        return undefined
    },

    delete(key) {
        if (!this.contains(key)) return
        let i = this.hashCode(key)
        while (this.keys[i] !== key) {
            i = (i + 1) % this.size
        }

        this.keys[i] = undefined
        this.vals[i] = undefined
        this.n--
        i = (i + 1) % this.size
        while (this.keys[i] !== undefined) {
            const tempKey = this.keys[i]
            const tempVal = this.vals[i]
            this.keys[i] = undefined
            this.vals[i] = undefined
            this.n--
            this.set(tempKey, tempVal)
            i = (i + 1) % this.size
        }

        if (this.n > 0 && this.n == this.size / 8) this.resize(this.resize / 2)
    },

    contains(key) {
        const { size, keys } = this
        const index = this.hashCode(key)
        for (let i = index; i < size; i++) {
            if (keys[i] == key) return true
        }

        for (let i = 0; i < index; i++) {
            if (keys[i] == key) return true
        }

        return false
    },

    set(key, val) {
        if (this.n >= this.size / 2) this.resize(2 * this.size)
        let i = this.hashCode(key)
        for (; this.keys[i] !== undefined; i = (i + 1) % this.size) {
            if (this.keys[i] == key) {
                this.vals[i] = val
                return
            }
        }

        this.n++
        this.keys[i] = key
        this.vals[i] = val
    },

    hashCode(key) {
        return (keyToHash(key) & 0x7fffffff) % this.size
    },

    resize(newSize) {
        const arry = new Array(newSize)
        const tempTable = new HashTable(arry)
        for (let i = 0; i < this.size; i++) {
            if (this.keys[i] !== undefined) {
                tempTable.set(this.keys[i], this.vals[i])
            }
        }

        this.keys = tempTable.keys
        this.vals = tempTable.vals
        this.size = tempTable.size
    }
}

function keyToHash(key) {
    let hash = 0
    key += ''
    if (key.length == 0) return hash
    for (let i = 0, len = key.length; i < len; i++) {
        char = key.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash // Convert to 32bit integer
    }

    return hash
}

module.exports = HashTable