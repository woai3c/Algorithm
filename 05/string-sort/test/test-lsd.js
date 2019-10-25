const lsd = require('../lsd')
const { getData } = require('../utils')
const data = getData('../data/data.txt')

lsd(data, data[0].length)
console.log(data)