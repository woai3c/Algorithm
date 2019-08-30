const { createDigraph } = require('../utils')
const graph = createDigraph('../data/tinyDG.txt')

console.log(graph.toString())
console.log('反向图')
console.log(graph.reverse().toString())