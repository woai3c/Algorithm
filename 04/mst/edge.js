function Edge(v, w, weight) {
    this.v = v
    this.w = w
    this.weight = weight
}

Edge.prototype = {
    getWeight() {
        return this.weight
    },

    getEither() {
        return this.v
    },

    getOther(v) {
        if (v == this.v) return this.w
        return this.v
    },

    compareTo(that) {
        if (this.weight < that.weight) return -1
        if (this.weight > that.weight) return 1
        return 0
    },

    toString() {
        return `${this.v}-${this.w} ${this.weight}`
    }
}

module.exports = Edge