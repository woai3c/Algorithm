function LazyPrimMST(graph) {
    this.mst = []
    this.marked = []
    // 横切边
    this.pq = []
    this.init(graph)
}

LazyPrimMST.prototype = {
    init(graph) {
        this.visit(graph, 0)
        while (this.pq.length) {
            const e = getMin(this.pq)
            const v = e.getEither()
            const w = e.getOther(v)
            if (this.marked[v] && this.marked[w]) continue
            this.mst.push(e)
            if (!this.marked[v]) this.visit(graph, v)
            if (!this.marked[w]) this.visit(graph, w)
        }
    },

    visit(graph, v) {
        this.marked[v] = true
        graph.getAdj(v).forEach(edge => {
            if (!this.marked[edge.getOther(v)]) this.pq.push(edge)
        })
    },

    getEdges() {
        return this.mst
    },

    getWeight() {
        const mst = this.mst
        if (!mst.length) return null
        let sum = 0
        for (let i = 0, len = mst.length; i < len; i++) {
            sum += parseFloat(mst[i].getWeight())
        }

        return sum
    }
}

function getMin(data) {
    let min = 100
    let minIndex = 0
    for (let i = 0, len = data.length; i < len; i++) {
        if (min > data[i].getWeight()) {
            min = data[i].getWeight()
            minIndex = i
        }
    }

    return data.splice(minIndex, 1)[0]
}

module.exports = LazyPrimMST