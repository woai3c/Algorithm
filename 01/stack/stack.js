function Stack() {
    this.arry = []
}

Stack.prototype = {
    push(item) {
        this.arry.push(item)
    },

    pop() {
        return this.arry.pop()
    },

    isEmpty() {
        return this.arry.length == 0
    },

    size() {
        return this.arry.length
    }
}

module.exports = Stack