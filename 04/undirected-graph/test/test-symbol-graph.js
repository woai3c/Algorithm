const { createSymbolGraph } = require('../utils')
const symbolGraph = createSymbolGraph('../data/routes.txt', ' ')

console.log(symbolGraph.toString())
console.log(symbolGraph.getIndex('JFK'))
console.log(symbolGraph.getName(0))