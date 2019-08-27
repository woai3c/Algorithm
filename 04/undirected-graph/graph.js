const Bag = require('../../01/bag/bag')
function Graph(V = 0, E = 0, data = []) {
    this.data = data
    this.V = V
    this.E = E
    this.adj = []
    this.init()
}

Graph.prototype = {
    init() {
        for (let v = 0; v < this.V; v++) {
            this.adj[v] = new Bag()
        }

        let start = 0
        for (let i = 0; i < this.E; i++) {
            const v = this.data[start++]
            const w = this.data[start++]
            this.addEdge(v, w)
        }
    },

    getV() {
        return this.V
    },

    getE() {
        return this.E
    },

    // 添加 v-w 的一条边 
    addEdge(v, w) {
        this.adj[v].add(w)
        this.adj[w].add(v)
    },
    
    // 和 v 相邻的所有顶点
    getAdj(v) {
        return this.adj[v].getData().reverse()
    },

    toString() {
        let str = this.V + ' 顶点， ' + this.E + ' 边\n'
        for (let v = 0; v < this.V; v++) {
            str += v + ': '
            this.getAdj(v).forEach(w => str += w + ' ')
            str += '\n'
        }

        return str
    }
}

module.exports = Graph