const { createDigraph } = require('../utils')
const KosarajuSCC = require('../kosaraju-SCC')
const graph = createDigraph('../data/tinyDG.txt')

const scc = new KosarajuSCC(graph)
const counts = scc.getCount()
const components = {}
let str = counts + ' components\n'
for (let i = 1; i <= counts; i++) {
    components[i] = []
}

for (let v = 0, V = graph.getV(); v < V; v++) {
    const component = components[scc.getID(v)]
    if (component) component.push(v)
}


for (const key in components) {
    str += components[key] + '\n'
}

console.log(graph.toString() + '\n')
console.log(graph.reverse().toString() + '\n')
console.log(str)