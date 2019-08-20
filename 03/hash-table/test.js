const HashTable = require('./hash-table')
const assert = require('assert')

const data = []
for (let i = 65; i <= 122; i++) {
    data.push({
        key: String.fromCharCode(i),
        val: i
    })
}

const hash = new HashTable(data)
assert.strictEqual(58, hash.getSize())
hash.put('xx', 500)
assert.strictEqual(59, hash.getSize())
assert.strictEqual(500, hash.find('xx'))
hash.put('xx', 400)
assert.strictEqual(59, hash.getSize())
assert.strictEqual(400, hash.find('xx'))
hash.delete('xx')
assert.strictEqual(58, hash.getSize())
console.log('测试通过')