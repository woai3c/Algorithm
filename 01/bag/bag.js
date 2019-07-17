function Bag() {
    this.arry = []
}

Bag.prototype = {
    add(item) {
        this.arry.push(item)
    },

    isEmpty() {
        return this.arry.length == 0
    },

    size() {
        return this.arry.length
    }
}