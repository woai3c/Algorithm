function Node() {
    this.next = []
    this.val = null
}

let R
function TrieST() {
    this.root = null
    R = 256
}

TrieST.prototype = {
    get(key) {
        const node = get(this.root, key, 0)
        if (!node) return null
        return node.val
    },

    set(key, val) {
        this.root = set(this.root, key, val, 0)
    },

    delete(key) {
        this.root = deleteNode(this.root, key, 0)
    },

    contains(key) {
        const node = get(this.root, key, 0)
        if (!node || node.val === null) return false
        return true
    },

    size() {
        return this.keys().length
    },

    keys() {
        return this.keysWithPrefix('')
    },

    isEmpty() {
        return this.root == null
    },

    longestPrefixOf(s) {
        const length = search(this.root, s, 0, 0)
        return s.substr(0, length)
    },

    keysWithPrefix(pre) {
        const keys = []
        collect(get(this.root, pre, 0), pre, keys)
        return keys
    },

    keysThatMatch(re) {
        const keys = []
        collectMatch(this.root, '', re, keys)
        return keys
    }
}

function set(node, key, val, d) {
    if (!node) node = new Node()
    if (d == key.length) {
        node.val = val
        return node
    }

    const c = key.charCodeAt(d)
    node.next[c] = set(node.next[c], key, val, d + 1)
    return node
}

function get(node, key, d) {
    if (!node) return null
    if (d == key.length) {
        return node
    }
    
    const c = key.charCodeAt(d)
    return get(node.next[c], key, d + 1)
}

function deleteNode(node, key, d) {
    if (!node) return null
    if (d != key.length) {
        const c = key.charCodeAt(d)
        node.next[c] = deleteNode(node.next[c], key, d + 1)
    } else {
        node.val = null
    }

    for (let c = 0; c < R; c++) {
        if (node.next[c]) return node
    }

    return null
}

const fromCharCode = String.fromCharCode
function collect(node, pre, keys) {
    if (!node) return
    if (node.val !== null) keys.push(pre)
    for (let c = 0; c < R; c++) {
        collect(node.next[c], pre + fromCharCode(c), keys)
    }
}

function collectMatch(node, pre, re, keys) {
    const d = pre.length
    if (!node) return
    if (d == re.length && node.val !== null) keys.push(pre)
    if (d == re.length) return

    const next = re[d]
    for (let c = 0; c < R; c++) {
        if (next == fromCharCode(c) || next == '.') {
            collectMatch(node.next[c], pre + fromCharCode(c), re, keys)
        }
    }
}

function search(node, s, d, length) {
    if (!node) return length
    if (node.val !== null) length = d
    if (d == s.length) return length
    const c = s.charCodeAt(d)
    return search(node.next[c], s, d + 1, length)
}

module.exports = TrieST