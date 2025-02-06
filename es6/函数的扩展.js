// console.log("hello  world")
// function log(x, y) {
//     y = y || 'World';
//     console.log(x, y);
// }
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello World
// if (typeof y === 'undefined') {
//     y = 'World';
// }

// function log(x, y = 'World') {
//     console.log(x, y);
// }

// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// function Point(x = 0, y = 0) {
//     this.x = x;
//     this.y = y;
// }

// const p = new Point();
// p // { x: 0, y: 0 }

// let x = 99;

// function foo(p = x + 1) {
//     console.log(p);
// }

// foo() // 100

// x = 100;
// foo() // 101
//参数默认值不是传值的  惰性求值   参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。

// function foo({ x, y = 5 } = {}) {
//     console.log(x, y);
// }
// foo({})
// foo({ x: 1 })
// foo({ x: 1, y: 2 })
// foo()

// function m1({ x = 0, y = 0 } = {}) {
//     return [x, y];
// }

// function m2({ x, y } = { x: 0, y: 0 }) {
//     return [x, y];
// }

// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({ x: 3, y: 8 }) // [3, 8]
// m2({ x: 3, y: 8 }) // [3, 8]

// // x 有值，y 无值的情况
// m1({ x: 3 }) // [3, 0]
// m2({ x: 3 }) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({ z: 3 }) // [0, 0]
// m2({ z: 3 }) // [undefined, undefined]

// var x = 1;

// function f(x, y = x) {
//     console.log(y);
// }

// f(2) // 2

// let x = 1;

// function f(y = x) {
//     let x = 2;
//     console.log(y);
// }

// f() // 1
//     //参数y = x形成一个单独的作用域。这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。函数调用时，函数体内部的局部变量x影响不到默认值变量x。

// let foo = 'outer';

// function bar(func = () => foo) {
//     let foo = 'inner';
//     console.log(func());
// }

// bar(); // outer

// var x = 1;

// function foo(x, y = function() { x = 2; }) {
//     var x = 3;
//     y();
//     console.log(x);
// }

// foo() // 3
// x // 1

// function add(...values) {
//     let sum = 0;

//     for (var val of values) {
//         sum += val;
//     }

//     return sum;
// }

// console.log(add(2, 5, 3)) // 10   //求和函数

// function push(array, ...items) {
//     items.forEach(function(item) {
//         array.push(item);
//         console.log(item);
//     });
// }

// var a = [];
// push(a, 1, 2, 3)

// var f = function() {};

// // ES5
// f.name // ""

// // ES6
// console.log(f.name) //"f"