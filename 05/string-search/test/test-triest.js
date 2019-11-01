const TrieST = require('../triest')
const st = new TrieST()
const data = [
    {
        abc: 1
    },
    {
        ab: 2
    },
    {
        abd: 3
    },
    {
        good: 'j'
    }
]

for (let i = 0, len = data.length; i < len; i++) {
    const obj = data[i]
    for (let key in obj) st.set(key, obj[key])
}

console.log(st.keys())
console.log(st.keysWithPrefix('ab'))
console.log(st.keysThatMatch('ab.'))
console.log(st.longestPrefixOf('abcdefg'))
console.log(st.size())
console.log(st.contains('ab'))
console.log(st.get('ab'))
console.log(st.delete('ab'))
console.log(st.get('ab'))
console.log(st.contains('ab'))
console.log(st.keys())