const BoyerMoore = require('../boyer-moore')
const data = 'AABRAACADABRAACAADABRA'
const pat = 'AACAA'
const bm = new BoyerMoore(pat)
const index = bm.search(data)

let str = `text:   ${data}\n`
str += 'pattern:'
for (let i = 0; i < index; i++) {
    str += ' '
}

str += index < 0? '未命中' : pat
console.log(str)