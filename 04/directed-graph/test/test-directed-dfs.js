const { createDigraph } = require('../utils')
const DirectedDFS = require('../directed-dfs')
const graph = createDigraph('../data/tinyDG.txt')
const search = new DirectedDFS(graph, [1, 2, 6])
let str = ''
for (let v = 0, V = graph.getV(); v < V; v++) {
    if (search.isMarked(v)) str += v + ' '
}

console.log(str)