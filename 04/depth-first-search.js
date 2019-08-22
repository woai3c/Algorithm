function DepthFirstSearch(graph, s) {
    this.marked = []
    this.count = 0
    this.dfs(graph, s)
}

DepthFirstSearch.prototype = {
    dfs(graph, v) {
        this.marked[v] = true
        this.count++
        graph.getAdj(v).forEach(w => {
            if (!this.marked[w]) this.dfs(graph, w)
        })
    },

    getCount() {
        return this.count
    },

    isMarked(v) {
        return this.marked[v]? true : false
    }
}

module.exports = DepthFirstSearch