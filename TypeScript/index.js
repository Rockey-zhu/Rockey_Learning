/* 基本数据类型

 number
 string
 boolean
 undefined
 null


 any 任意类型(相当于关闭了类型检测，不建议使用)
 viod 没有值或者undefined
 never 没有值，不能是任何值

 object 对象
 array 数组
 tuple 固定长度的数组
 enum 枚举型

*/
//number 是类型注解，类型约束
var age = 18;
//age未来赋值只能是数字，赋值错误会有提示
//age ='hello' 报错
var item = "hello";
var booleans = true; //声明和赋值之后，他的类型就是boolean
//booleans="world";  //报错
//函数参数
function sum(a, b) {
    return a + b;
}
//参数不能传多，也不能传错类型 --达能通过编译！
sum(12, 13);
