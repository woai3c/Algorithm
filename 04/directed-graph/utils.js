function createDigraph(path) {
    const Graph = require('./digraph')
    const fs = require('fs')
    let data = fs.readFileSync(path, 'utf-8')
    data = data.split('\r\n')
    const V = data[0]
    const E = data[1]
    const vData = []
    for (let i = 2, len = data.length; i < len; i++) {
        vData.push(...data[i].split(' '))
    }
    
    return new Graph(V, E, vData)
}

module.exports = {
    createDigraph,
}