const msd = require('../msd')
const { getData } = require('../utils')
const data = getData('../data/data-msd.txt')

msd(data)
console.log(data)