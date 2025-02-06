// this的5种绑定方式
// 1）默认绑定(非严格模式下this指向全局对象，严格模式下函数内的this指向undefined)
// 2）隐式绑定(当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo内的this指向obj)
// 3）显示绑定(通过call或者apply方法直接指定this的绑定对象, 如foo.call(obj))
// 4）new构造函数绑定，this指向新生成的对象
// 5）箭头函数，this指向的是定义该函数时，外层环境中的this，箭头函数的this在定义时就决定了，不能改变

// demo 1
"use strict";
// var a = 10; // var定义的a变量挂载到window对象上

// function foo() {
//     console.log('this1', this); // undefined
//     console.log(Window.a) //10
//     console.log(this.a); ///  严格模式undefined 报错，Uncaught TypeError: Cannot read properties of undefined (reading 'a')
// }
// console.log('this2', this) // window
// foo()


//demo2
// let a = 10
// const b = 20

// function foo() {
//     console.log(this.a) // undefined
//     console.log(this.b) // undefined
// }
// foo();
// console.log(window.a) // undefined
//如果把 var 改成了 let 或 const，变量是不会被绑定到window上的，所以此时会打印出三个undefined


//demo3
var a = 1

function foo() {
    var a = 2
    console.log(this) // window
    console.log(this.a) // 1
}
foo()

//foo()函数内的this指向的是window，因为是window调用的foo，打印出的this.a是window下的a