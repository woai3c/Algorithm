const Graph = require('./graph')

function SymbolGraph(data, delim) {
    this.names = {}
    this.indexs = []
    this.G = null
    this.init(data, delim)
}

SymbolGraph.prototype = {
    init(data, delim) {
        data = data.split('\r\n')
        const E = data.length
        const newData = []
        let index = 0
        for (let i = 0; i < E; i++) {
            data[i].split(delim).forEach(key => {
                newData.push(key)
                if (this.names[key] === undefined) {
                    this.names[key] = index
                    this.indexs[index] = key
                    index++
                }
            })
        }

        this.G = new Graph(index, E, this.translateData(newData))
    },

    translateData(data) {
        for (let i = 0, len = data.length; i < len; i++) {
            data[i] = this.getIndex(data[i])
        }

        return data
    },

    getIndex(key) {
        return this.names[key]
    },

    getName(index) {
        return this.indexs[index]
    },

    contains(key) {
        return this.names[key] !== undefined
    },

    getG() {
        return this.G
    },

    toString() {
        return this.G.toString()
    },
}

module.exports = SymbolGraph