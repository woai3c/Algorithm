const BinarySearchTree = require('./binary-search-tree')
const assert = require('assert')
const tree = new BinarySearchTree([6,7,8,1,2,5,15,10])

assert.strictEqual(8, tree.getSize())