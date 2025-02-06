const PI = 3.1415
PI //3.1415
PI = 3;
// TypeError: Assignment to constant variable.

//*******const 声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值

//const foo; // SyntaxError: Missing initializer in const declaration
//const 只声明不赋值，就会报错

// *******constde 作用域与let相同，只在声明所在的块级作用域内生效
if (true) {
    const Max = 5;
}
// Uncaught ReferenceError: MAX is not defined
//*******const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。

if (true) {
    console.log(Max) //ReferenceError
    const Max = 5;
}

//与let一样，未声明之前就调用

//与let一样不可重复声明
var message = "Hello!";
let age = 25;

// 以下两行都会报错
const message = "Goodbye!";
const age = 30;



//****const本质******
//const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动

const foo = {}

//为foo添加一个属性，可以成功
foo.prop = 123;
foo.prop = 321;
foo.prop //123
console.log(foo.prop) //321
    //将foo指向另一个对象，就会报错
foo = {} //TypeError: "foo" is read-only

//常量foo存储的是一个地址，这个地址指向一个对象，不可变的只是这个地址，
//既不能把foo指向另一个地址，但对象本身是可变的，所以依然为其添加新属性


const a = []
a.push('hello') //可执行
a.length = 0; //可执行
a = ['Dave'] //报错

//常量a是一个数组，这个数组本身是可写的，但是如果将另一个数组赋值给a，就会报错


//ES6声明变量的六种方法

// var   function  let  const import class