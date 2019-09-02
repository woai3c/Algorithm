function DirectedCycle(graph) {
    this.marked = []
    this.edgeTo = []
    this.onStack = []
    this.cycle = null
    this.init(graph)
}

DirectedCycle.prototype = {
    init(graph) {
        for (let v = 0, V = graph.getV(); v < V; v++) {
            if (!this.marked[v]) this.dfs(graph, v)
        }
    },

    dfs(graph, v) {
        this.marked[v] = true
        this.onStack[v] = true
        graph.getAdj(v).forEach(w => {
            if (this.hasCycle()) return
            if (!this.marked[w]) {
                this.edgeTo[w] = v
                this.dfs(graph, w)
            } else if (this.onStack[w]) {
                this.cycle = []
                for (let x = v; x != w; x = this.edgeTo[x]) {
                    this.cycle.push(x)
                }

                this.cycle.push(w, v)
            }
        })

        this.onStack[v] = false
    },

    getCycle() {
        return this.cycle
    },

    hasCycle() {
        return this.cycle !== null
    }
}

module.exports = DirectedCycle