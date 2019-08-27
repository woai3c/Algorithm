function createGraph(path) {
    const Graph = require('./graph')
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

function getDegree(graph, v = 0) {
    let degree = 0
    graph.getAdj(v).forEach(() => {
        degree++
    })

    return degree
}

function getMaxDegree(graph) {
    let max = 0
    for (let v = 0, V = graph.getV(); v < V; v++) {
        let degree = getDegree(graph, v)
        if (degree > max) max = degree
    }

    return max
}

function getAveDegree(graph) {
    return graph.getE() * 2 / graph.getV()
}

function getNumberOfSelfLoops(graph) {
    let count = 0
    for (let v = 0, V = graph.getV(); v < V; v++) {
        graph.getAdj(v).forEach(w => {
            if (v == w) count++
        })
    }

    return count / 2
}

module.exports = {
    getDegree,
    getMaxDegree,
    getNumberOfSelfLoops,
    getAveDegree,
    createGraph
}