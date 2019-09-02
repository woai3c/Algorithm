function DepthFirstOrder(graph) {
    this.pre = []
    this.post = []
    this.reversePost = []
    this.marked = []
    this.init(graph)
}

DepthFirstOrder.prototype = {
    init(graph) {
        for (let v = 0, V = graph.getV(); v < V; v++) {
            if (!this.marked[v]) this.dfs(graph, v)
        }
    },

    dfs(graph, v) {
        this.marked[v] = true
        this.pre.push(v)
        graph.getAdj(v).forEach(w => {
            if (!this.marked[w]) {
                this.dfs(graph, w)
            }
        })

        this.post.push(v)
        this.reversePost.unshift(v)
    },

    getPre() {
        return this.pre
    },

    getPost() {
        return this.post
    },

    getReversePost() {
        return this.reversePost
    },
}

module.exports = DepthFirstOrder