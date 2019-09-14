const { createGraph } = require('../utils')
const DijkstraSP = require('../dijkstra-sp')
const graph = createGraph('../data/tinyEWD.txt')
const s = 0
const sp = new DijkstraSP(graph, s)

let str = ''
for (let t = 0, V = graph.getV(); t < V; t++) {
    str += s + ' to ' + t + ' (' + sp.getDistTo(t) + '): '
    if (sp.hasPathTo(t)) {
        sp.getPathTo(t).forEach(edge => {
            str += edge.toString() + ' '
        })
    }

    str += '\n'
}

console.log(str)