/**
 * @param {number} valLimit
 * @param {number} valNum
 * @return {number[]} 
 */
function generateRandomIntegerArry(valLimit, valNum) {
    if (valNum > valLimit) {
		console.log('生成数数量不能大于上限值')
		return []
    }
    
	const arry = []
	for (let i = 0; i < valNum; i++) {
	    let tempVal = 0
		do {
			tempVal = ~~(Math.random() * valLimit)
        } while (arry.includes(tempVal))

        arry.push(tempVal)
    }

	return arry
}

/**
 * @param {number[]} arry
 * @param {number} val
 * @return {number}
 */
function loopSearchFindVal(arry, val) { 
	for (let i = 0, len = arry.length; i < len; i++) {
		if (arry[i] === val) {
			return i
		}
    }
    
	return -1
}

/**
 * @param {number[]} arry
 * @param {number} x
 * @param {number} y
 * @return {void}
 */
function exchange(arry, x, y) { 
	const temp = arry[x]
	arry[x] = arry[y]
	arry[y] = temp
}

module.exports = {
    generateRandomIntegerArry,
	loopSearchFindVal,
	exchange,
}