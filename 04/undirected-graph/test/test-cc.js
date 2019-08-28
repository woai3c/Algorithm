const { createGraph } = require('../utils')
const CC = require('../cc')
const graph = createGraph('../data/data.txt')

const cc = new CC(graph)
const counts = cc.getCount()
const components = {}
let str = counts + ' components\n'
for (let i = 1; i <= counts; i++) {
    components[i] = []
}

for (let v = 0, V = graph.getV(); v < V; v++) {
    const component = components[cc.getID(v)]
    if (component) component.push(v)
}


for (const key in components) {
    str += components[key] + '\n'
}

console.log(graph.toString() + '\n')
console.log(str)