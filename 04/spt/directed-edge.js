function DirectedEdge(v, w, weight) {
    this.v = v
    this.w = w
    this.weight = weight
}

DirectedEdge.prototype = {
    getWeight() {
        return this.weight
    },

    getFrom() {
        return this.v
    },

    getTo() {
        return this.w
    },

    toString() {
        return `${this.v}-${this.w} ${this.weight}`
    }
}

module.exports = DirectedEdge