const DepthFirstOrder = require('./depth-first-order')

function KosarajuSCC(graph) {
    this.marked = []
    this.id = []
    this.count = 0
    this.init(graph)
}

KosarajuSCC.prototype = {
    init(graph) {
        const order = new DepthFirstOrder(graph.reverse())
        order.getReversePost().forEach(v => {
            if (!this.marked[v]) {
                this.count++
                this.dfs(graph, v)
            }
        })
    },

    dfs(graph, v) {
        this.marked[v] = true
        this.id[v] = this.count
        graph.getAdj(v).forEach(w => {
            if (!this.marked[w]) this.dfs(graph, w)
        })
    },

    getCount() {
        return this.count
    },

    getID(v) {
        return this.id[v]
    },

    isStronglyConnected(v, w) {
        if (this.id[v] && this.id[w]) {
            return this.id[v] == this.id[w]
        }

        return false
    }
}

module.exports = KosarajuSCC