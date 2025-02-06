//ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
{
    let a = 10;
    var b = 1;
}
//ReferenceError: a is not defined
//console.log(b) //b=1

//*--let声明的变量只在它所在的代码块有效--*


// 例如for循环的计数器就很适合let命令
// for (let i = 0; i < 10; i++) {

// }
// console.log(i)
//ReferenceError: i is not defined
var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i, "i1")
    }
}
a[6]() //10
    //由于 i是var 定义的，是全局性的，每次循环都会跟着变，导致运行时输出的是最后一轮的i的值，也就是 10。

//如果是let定义的则
var a = []
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i, "i2")
    }
}
a[6]() //6
    //变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6

//for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。
//这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域（同一个作用域不可使用 let 重复声明同一个变量）。
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}
//abc abc abc



//不存在变量提升
// var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined
// let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错

//var 情况
console.log(foo)
var foo = 2;
//undefined

//let 情况
console.log(bar)
let bar = 2;
//ReferenceError: Cannot access 'bar' before initialization

//var有变量提升，脚本自上而下运行时变量foo已经声明，但没有值
//let声明的bar不会变量提升，所以自上而下运行时，bar不存在，这时候会抛出错误



// ES6 明确规定，如果区块中存在let和const命令，
// 这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
var tmp = 123;
if (true) {
    tmp = 'abc'
    let tmp;
}
//ReferenceError: Cannot access 'tmp' before initialization

//在代码块内，使用let命令声明变量之前，该变量都是不可用的。
//这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。
if (true) {
    //TDZ开始
    tmp = 'abc'; //ReferenceError
    console.log(tmp);
    //TDZ结束
    let tmp
    console.log(tmp) //undefined

    tmp = 123;
    console.log(tmp) //123
}


//"死区"比较隐蔽
function bar(x = y, y = 2) {
    return [x, y]
}
bar(); //报错
//调用bar函数之所以报错（某些实现可能不报错），是因为参数x默认值等于另一个参数y，而此时y还没有声明，属于“死区”。


//special---
// 不报错
var x = x;

// 报错
let x = x;
// ReferenceError: x is not defined
//变量x的声明语句还没执行完成前，就去取x的值，导致报错x未定义


//ES6允许块级作用域的任意嵌套
{
    {
        {
            {
                {
                    let insane = 'Hello World'
                }
                console.log(insane); // 报错
            }
        }
    }
};
//第四层作用域无法读取到第五层作用域的内部变量