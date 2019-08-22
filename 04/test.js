const { createGraph } = require('./utils')
const DepthFirstSearch = require('./depth-first-search')
const graph = createGraph()
const search = new DepthFirstSearch(graph, 1)
let str = ''
for (let v = 0, V = graph.getV(); v < V; v++) {
    if (search.isMarked(v)) str += v + ' '
}

str += '\n'
if (search.getCount() != graph.getV()) str += 'NOT '
str += 'connected'

console.log(str)