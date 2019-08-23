const assert = require('assert')
const { createGraph } = require('../utils')
const DepthFirstSearch = require('../depth-first-search')
const graph = createGraph()

// first test
let search = new DepthFirstSearch(graph, 0)
let str = ''
for (let v = 0, V = graph.getV(); v < V; v++) {
    if (search.isMarked(v)) str += v + ' '
}

assert.strictEqual('0 1 2 3 4 5 6 ', str)

str = ''
if (search.getCount() != graph.getV()) str += 'NOT '
str += 'connected'

assert.strictEqual('NOT connected', str)

// second test
search = new DepthFirstSearch(graph, 7)
str = ''
for (let v = 0, V = graph.getV(); v < V; v++) {
    if (search.isMarked(v)) str += v + ' '
}

assert.strictEqual('7 8 ', str)

str = ''
if (search.getCount() != graph.getV()) str += 'NOT '
str += 'connected'

assert.strictEqual('NOT connected', str)


console.log('测试通过')
