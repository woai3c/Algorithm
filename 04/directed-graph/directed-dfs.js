function DirectedDFS(graph, data) {
    this.marked = []
    this.init(graph, data)
}

DirectedDFS.prototype = {
    init(graph, data) {
        if (Array.isArray(data)) {
            data.forEach(v => {
                this.dfs(graph, v)
            })
        } else {
            this.dfs(graph, data)
        }
    },

    dfs(graph, v) {
        this.marked[v] = true
        graph.getAdj(v).forEach(w => {
            if (!this.marked[w]) this.dfs(graph, w)
        })
    },

    isMarked(v) {
        return this.marked[v] == true
    }
}

module.exports = DirectedDFS