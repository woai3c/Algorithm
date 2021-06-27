const MaxPQ = require('./priority-queue')

const pq = new MaxPQ([10, 1, 12, 100, 5, 7, 3, 99, 8, 2, 4, 201])

console.log(pq.getVal()) // 201
console.log(pq.getVal()) // 100
console.log(pq.getVal()) // 99
pq.insert(1000)
pq.insert(10000)
console.log(pq.getVal()) // 10000
console.log(pq.getVal()) // 1000