const assert = require('assert')
const { createGraph } = require('../utils')
const DepthFirstSearch = require('../depth-first-search')
const graph = createGraph('../data/data.txt')

// first test
let search = new DepthFirstSearch(graph, 0)
let str = ''
for (let v = 0, V = graph.getV(); v < V; v++) {
    if (search.isMarked(v)) str += v + ' '
}

str += '\n'
if (search.getCount() != graph.getV()) str += 'NOT '
str += 'connected'
console.log(str)

// second test
search = new DepthFirstSearch(graph, 7)
str = ''
for (let v = 0, V = graph.getV(); v < V; v++) {
    if (search.isMarked(v)) str += v + ' '
}

str += '\n'
if (search.getCount() != graph.getV()) str += 'NOT '
str += 'connected'
console.log(str)
