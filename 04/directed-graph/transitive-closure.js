const DirectedDFS = require('./directed-dfs')

function TransitiveClosure(graph) {
    this.all = []
    this.init(graph)
}

TransitiveClosure.prototype = {
    init(graph) {
        for (let v = 0, V = graph.getV(); v < V; v++) {
            this.all[v] = new DirectedDFS(graph, v)
        }
    },

    isReachable(v, w) {
        return this.all[v].isMarked(w)
    }
}

module.exports = TransitiveClosure