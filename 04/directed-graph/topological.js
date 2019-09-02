const DirectedCycle = require('./directed-cycle')
const DepthFirstOrder = require('./depth-first-order')

function Topological(graph) {
    this.order = null
    this.init(graph)
}

Topological.prototype = {
    init(graph) {
        const cycle = new DirectedCycle(graph)
        if (!cycle.hasCycle()) {
            const dfs = new DepthFirstOrder(graph)
            this.order = dfs.getReversePost()
        }
    },

    getOrder() {
        return this.order
    },

    // 是有向无环图吗
    isDAG() {
        return this.order !== null
    }
}

module.exports = Topological