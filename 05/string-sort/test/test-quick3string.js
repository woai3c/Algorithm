const quick3string = require('../quick3string')
const { getData } = require('../utils')
const data = getData('../data/data-quick3string.txt')

quick3string(data)
console.log(data)