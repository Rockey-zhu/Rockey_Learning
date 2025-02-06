//原本函数
var n = 10;
var total = 1;
while (n >= 1) {
    //将每一个数字阶乘到total变量
    total = total * n
    n--
}
//输出阶乘结果
console.log(total)


//定义 形参 使其分装成一个可以计算任何数阶乘的算法

function fn(n) {
    var total = 1;
    while (n >= 1) {
        total = total * n;
        n--
    }
    console.log(total)
}
fn(10)


//通过定义不同实参可以计算出任何数的阶乘


//通过返回值来分别控制输出的值
function fn(n) {
    var total = 1;
    while (n >= 1) {
        total = total * n;
        n--
    }
    //把计算结果作为函数的返回值
    return total
}

//调用这个函数，求12的阶乘，把结果赋值给r1
var r1 = fn(12)
    //调用这个函数，求10的阶乘，把结果赋值给r2
var r2 = fn(10)

document.write(r1);
console.log(r2)