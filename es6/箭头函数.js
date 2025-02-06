// var f = v => v;

import nest from "../vue/src/store";

//等同于
// var f = function(v) {
//     return v;
// };

// var f = () => 5;
// //等同于
// var f = function() {
//     return 5;
// }

// var sum = (num1, num2) => num1 + num2;
// //等同于
// var sum = function(num1, num2) {
//     return num1 + num2;
// }

// //报错
// let getTempItem = id => { id: id, name: "Temp" };

// // 不报错
// let getTempItem = id => ({ id: id, name: "Temp" });

// let foo = () => { a: 1 };
// console.log(foo()) // undefined

// const full = ({ first, last }) => first + '' + last;

//等同于
// function full(person) {
//     return person.first + '' + person.last;
// }

// const isEven = n => n % 2 === 0;
// const square = n => n * n;

// [1, 2, 3].map(function(x) {
//     return x * x;
// });

// [1, 2, 3].map(x => x * x);

// var result = values.sort((a, b) => a - b);

// const numbers = (...nums) => nums;
// console.log(numbers(1, 2, 3, 4, 5)) //[1,2,3,4,5]

// const headAndTail = (head, ...tail) => [head, tail];
// console.log(headAndTail(1, 2, 3, 4, 5)) // [1,[2,3,4,5]]



//数组.foreach(箭头函数   ：  返回每一项)

var arry = ["嗯嗯", 2, 3, 4, 5]
arry.forEach(a => {
    console.log(a);
})