const assert = require('assert')
const { createGraph } = require('../utils')
const DepthFirstPath = require('../depth-first-path')
const graph = createGraph('../data/tiny.txt')
const s = 0
const search = new DepthFirstPath(graph, s)
let str = ''
for (let v = s, V = graph.getV(); v < V; v++) {
    str += s + ' to ' + v + ': '
    if (search.hasPathTo(v)) {
        const paths = search.pathTo(v)
        for (let i = paths.length - 1; i >= 0; i--) {
            const w = paths[i]
            if (w != s) {
                str += '-' + w
            } else {
                str += w
            }
        }

        str += '\n'
    }
}

console.log(str)