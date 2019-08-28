function BreadthFirstPath(graph, s) {
    this.marked = []
    this.edgeTo = []
    this.queue = []
    this.s = s
    this.bfs(graph, s)
}

BreadthFirstPath.prototype = {
    bfs(graph, v) {
        this.queue.push(v)
        this.marked[v] = true
        while (this.queue.length) {
            v = this.queue.shift()
            graph.getAdj(v).forEach(w => {
                if (!this.marked[w]) {
                    this.edgeTo[w] = v
                    this.marked[w] = true
                    this.queue.push(w)
                }
            })
        }
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

module.exports = BreadthFirstPath