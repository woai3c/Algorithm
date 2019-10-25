const fs = require('fs')

function getData(path) {
    const data = fs.readFileSync(path, 'utf-8')
    return data.split('\r\n')
}

module.exports = {
    getData
}