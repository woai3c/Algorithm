function Queue() {
    this.arry = []
}

Queue.prototype = {
    enqueue(item) {
        this.arry.push(item)
    },

    dequeue() {
        return this.arry.shift(item)
    },

    isEmpty() {
        return this.arry.length == 0
    },

    size() {
        return this.arry.length
    }
}

module.exports = Queue