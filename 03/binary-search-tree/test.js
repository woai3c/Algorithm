const BinarySearchTree = require('./binary-search-tree')
const assert = require('assert')
const tree = new BinarySearchTree([6,7,8,1,2,5,15,10])

assert.strictEqual(8, tree.getSize())
assert.strictEqual('1,2,5,6,7,8,10,15', tree.sort().toString())
assert.strictEqual(15, tree.findMax().val)
assert.strictEqual(1, tree.findMin().val)

tree.delete(6)
tree.delete(7)
assert.strictEqual(6, tree.getSize())
assert.strictEqual('1,2,5,8,10,15', tree.sort().toString())
assert.strictEqual(10, tree.find(10).val)

tree.insert(200)
assert.strictEqual(200, tree.findMax().val)
assert.strictEqual('1,2,5,8,10,15,200', tree.sort().toString())
assert.strictEqual(7, tree.getSize())