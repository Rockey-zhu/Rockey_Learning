// var、let、const的区别
// 1）var定义的变量，没有块的概念，可以跨块访问, 可以变量提升
// 2）let定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问，无变量提升，不可以重复声明
// 3）const用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改，无变量提升，不可以重复声明


//let和const声明的变量只在块级作用域内有效
function func() {
    if (true) {
        let i = 3;
        //const i = 3;
    }
    console.log(i); // 报错 "i is not defined"
}
func();