const { createDigraph } = require('../utils')
const BreadthFirstDirectedPath = require('../breadth-first-directed-path')
const graph = createDigraph('../data/tinyDG.txt')
const s = 0
const search = new BreadthFirstDirectedPath(graph, s)
let str = ''
for (let v = s, V = graph.getV(); v < V; v++) {
    if (search.hasPathTo(v)) {
        str += s + ' to ' + v + ': '
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