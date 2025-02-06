//typeof 在判断 object 类型时候，有些许的尴尬。它并不能明确的告诉你，该 object 属于哪一种 object
let s = new String('abc');
typeof s === 'object'
typeof null

console.log(typeof s)
console.log(typeof null)

let num1 = Number(12)
let num2 = new Number(12) //new 后成一个对象了 所以不等于 num1 num3
let num3 = 12
console.log(typeof num1, typeof num2) //number object
console.log(num1 === num3) //true
console.log(num1 === num2) //false

console.log(typeof num1.valueOf()) //number
console.log(typeof num2.valueOf()) //number
console.log(typeof num3.valueOf()) //number