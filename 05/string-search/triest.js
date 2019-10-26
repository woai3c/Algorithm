function Node() {
    this.next = []
    this.val = null
}

function TrieST() {
    this.root = null
    this.R = 256
}

TrieST.prototype = {
    get(key) {
        return get(this.root, key, 0)
    },

    set(key, val) {
        this.root = set(this.root, key, val, 0)
    },

    delete(key) {
        this.root = deleteNode(this.root, key, 0)
    },

    contains(key) {
        return get(this.root, key, 0) !== null
    },

    isEmpty() {
        return this.root == null
    },

    longestPrefixOf(s) {

    },

    keysWithPrefix(s) {

    },

    keysThatMatch(s) {

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
        return node.val
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

    for (let i = 0, len = this.R; i < len; i++) {
        if (node.next[c]) return node
    }

    return null
}