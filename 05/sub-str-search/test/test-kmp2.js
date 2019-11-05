const KMP = require('../kmp-2')
const data = 'AABRAACADABRAACAADABRA'
const pat = 'AACAA'
const kmp = new KMP(pat)
const index = kmp.search(data)

let str = `text:   ${data}\n`
str += 'pattern:'
for (let i = 0; i < index; i++) {
    str += ' '
}

str += index < 0? '未命中' : pat
console.log(str)