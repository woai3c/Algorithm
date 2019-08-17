// red: true  black: false
const RED = true
const BLACK = false

function Node(val, color = false) {
    this.val = val
    this.left = null
    this.right = null
    // 结点总数
    this.size = 1
    this.color = color
}

function RedBlackTree(data) {
    this.root = null
    this.arry = []
    this.init(data)
}

// 生成红黑书
RedBlackTree.prototype.init = function(data) {
    if (!data || !data.length) return
    data.forEach(val => {
        this.insert(val)
    })
}

// 返回节点数 默认返回根节点 即整棵树的节点数
RedBlackTree.prototype.getSize = function(node) {
    node = node || this.root
    return subGetSize(node)
}

function subGetSize(node) {
    return node? node.size : 0
}

// 查找val对应的节点
RedBlackTree.prototype.find = function(val) {
    return subFind(val, this.root)
}

function subFind(val, node) {
    if (!node) return null
    if (val == node.val) return node
    if (val > node.val) return subFind(val, node.right)
    if (val < node.val) return subFind(val, node.left)
}

// 查找包含最大值的节点
RedBlackTree.prototype.findMax = function(node) {
    node = node || this.root
    if (!node) return null
    return subFindMax(node)
}

function subFindMax(node) {
    if (node.right) {
        return subFindMax(node.right)
    } else {
        return node
    }
}

// 查找包含最小值的节点
RedBlackTree.prototype.findMin = function(node) {
    node = node || this.root
    if (!node) return null
    return subFindMin(node)
}

function subFindMin(node) {
    if (node.left) {
        return subFindMin(node.left)
    } else {
        return node
    }
}

// 删除节点
RedBlackTree.prototype.delete = function(val, node) {
    node = node || this.root
    if (!isRed(node.left) && !isRed(node.right)) root.color = RED
    node = subDelete(val, node)
    if (node) node.color = BLACK
}

function subDelete(val, node) {
    if (!node) return null
    if (val < node.val) {
        node.left = subDelete(val, node.left)
    } else if (val > node.val) {
        node.right = subDelete(val, node.right)
    } else {
        if (!node.left) return node.right
        if (!node.right) return node.left
        const tempNode = subFindMin(node.right)
        node.val = tempNode.val
        node.right = subDelete(tempNode.val, node.right)
    }

    node.size = subGetSize(node.left) + subGetSize(node.right) + 1
    return node
}

// 插入节点
RedBlackTree.prototype.insert = function(val) {
    if (!this.root) {
        this.root = new Node(val)
        return
    }

    if (this.find(val)) return
    this.root = subInsert(this.root, val)
    this.root.color = BLACK
}

function subInsert(node, val) {
    if (val > node.val) {
        if (node.right) {
            node.right = subInsert(node.right, val)
        } else {
            node.right = new Node(val, RED)
        }
    } else if (val < node.val) {
        if (node.left) {
            node.left = subInsert(node.left, val)
        } else {
            node.left = new Node(val, RED)
        }
    }

    if (!isRed(node.left) && isRed(node.right)) node = rotateLeft(node)
    if (isRed(node.left) && isRed(node.left.left)) node = rotateRight(node)
    if (isRed(node.left) && isRed(node.right)) flipColors(node)

    node.size = subGetSize(node.right) + subGetSize(node.left) + 1
    return node
}

function rotateLeft(node) {
    const x = node.right
    node.right = x.left
    x.left = node
    x.color = node.color
    node.color = RED
    x.size = node.size
    node.size = subGetSize(node.right) + subGetSize(node.left) + 1
    return x
}

function rotateRight(node) {
    const x = node.left
    node.left = x.right
    x.right = node
    x.color = node.color
    node.color = RED
    x.size = node.size
    node.size = subGetSize(node.right) + subGetSize(node.left) + 1
    return x
}

function isRed(node) {
    if (!node) return false
    return node.color == RED
}

function flipColors(node) {
    node.color = !node.color
    node.left.color = !node.left.color
    node.right.color = !node.right.color
}

// 升序排序其实就是中序遍历一遍红黑书
RedBlackTree.prototype.sort = function() {
    this.arry = []
    if (!this.root) return this.arry
    subSort(this.root.left, this.arry)
    this.arry.push(this.root.val)
    subSort(this.root.right, this.arry)
    return [...this.arry]
}

function subSort(node, arry) {
    if (!node) return
    subSort(node.left, arry)
    arry.push(node.val)
    subSort(node.right, arry)
}

module.exports = RedBlackTree