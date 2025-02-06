var a; //声明了变量类型为number
// a的类型设置为了number,在以后的使用过程中的a的值只能是数字
a = 10;
a = 30;
//a = "hello"; //类型不同，string类型
//如果变量的声明和赋值是同时进行的，Ts可以直接对变量进行类型检测
var c = false;
c = true;
//c = '11111';
//js中的函数是不考虑参数的类型和个数的
function sum(d, e) {
    return d + e;
}
console.log(sum(123, 456)); //579
