let array
console.log('a. ', array)

array = null
console.log('b.', array)

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c.',array.length) // 11

let i = 0
console.log('i.', array[9]) //12

array[i+1] = 19
console.log('e.', array)

const valor = array[i+6]
console.log('f.', valor)