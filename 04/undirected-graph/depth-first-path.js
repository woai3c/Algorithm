function DepthFirstPath(graph, s) {
    this.marked = []
    this.edgeTo = []
    this.s = s
    this.dfs(graph, s)
}

DepthFirstPath.prototype = {
    dfs(graph, v) {
        this.marked[v] = true
        graph.getAdj(v).forEach(w => {
            if (!this.marked[w]) {
                this.edgeTo[w] = v
                this.dfs(graph, w)
            }
        })
    },

    pathTo(v) {
        if (!this.hasPathTo(v)) return null
        const s = this.s
        const paths = []
        for (let w = v; w != s; w = this.edgeTo[w]) {
            paths.push(w)
        }

        paths.push(s)
        return paths
    },

    hasPathTo(v) {
        return this.marked[v] == true
    },
}

module.exports = DepthFirstPath