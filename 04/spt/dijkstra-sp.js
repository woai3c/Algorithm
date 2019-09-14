function DijkstraSP(graph, s) {
    this.distTo = []
    this.edgeTo = []
    // 横切边
    this.pq = []
    this.init(graph, s)
}

DijkstraSP.prototype = {
    init(graph, s) {
        for (let v = 0, V = graph.getV(); v < V; v++) {
            this.distTo[v] = Infinity
        }

        this.edgeTo[s] = null
        this.distTo[s] = 0
        this.pq.push({ 0: 0 })
        while (this.pq.length) {
            this.relax(graph, getMin(this.pq))
        }
    },

    relax(graph, v) {
        graph.getAdj(v).forEach(edge => {
            const w = edge.getTo()
            if (this.distTo[w] > this.distTo[v] + edge.getWeight()) {
                this.distTo[w] = this.distTo[v] + edge.getWeight()
                this.edgeTo[w] = edge
                if (includes(this.pq, w)) {
                    change(this.pq, w, this.distTo[w])
                } else {
                    const obj = {}
                    obj[w] = this.distTo[w]
                    this.pq.push(obj)
                }
            }
        })
    },

    getDistTo(v) {
        return this.distTo[v]
    },

    hasPathTo(v) {
        return this.distTo[v] < Infinity
    },

    getPathTo(v) {
        if (!this.hasPathTo(v)) return null
        const paths = []
        for (let e = this.edgeTo[v]; e != null; e = this.edgeTo[e.getFrom()]) {
            paths.unshift(e)
        }

        return paths
    }
}

function getMin(data) {
    let min = 100
    let minIndex = 0
    let minV = 0
    for (let i = 0, len = data.length; i < len; i++) {
        const obj = data[i]
        const v = Object.keys(obj)[0]
        const weight = obj[v]
        if (min > weight) {
            minIndex = i
            minV = v
            min = weight
        }
    }

    data.splice(minIndex, 1)
    return minV
}

function includes(data, v) {
    for (let i = 0, len = data.length; i < len; i++) {
        const obj = data[i]
        const w = Object.keys(obj)[0]
        if (v == w) return true
    }

    return false
}

function change(data, v, weight) {
    for (let i = 0, len = data.length; i < len; i++) {
        const obj = data[i]
        const w = Object.keys(obj)[0]
        if (v == w) {
            data[i][w] = weight
            return
        }
    }
}

module.exports = DijkstraSP