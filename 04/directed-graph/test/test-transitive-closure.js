const { createDigraph } = require('../utils')
const TransitiveClosure = require('../transitive-closure')
const graph = createDigraph('../data/tinyDG.txt')
const closure = new TransitiveClosure(graph)

for (let v = 0, V = graph.getV(); v < V; v++) {
    console.log(closure.isReachable(v, 0))
}

console.log(graph.toString())