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
let age: number = 18;

//age未来赋值只能是数字，赋值错误会有提示
//age ='hello' 报错

let item: string = "hello";

let booleans = true; //声明和赋值之后，他的类型就是boolean
//booleans="world";  //报错

//函数参数
function sum(a: number, b: number) {
  return a + b;
}
//参数不能传多，也不能传错类型 --达能通过编译！
sum(12, 13);

//函数返回值，强制类型
function sum2(a: number, b: number): number {
  return a + b;
}
let result1 = sum2(1, 2);

//字面量
let as: 10; //类似于const as=10
let as2: 10 | "hello"; //as2可以是10 也可以是“hello”

//联合类型
let as3: number | string;

//any
let any1; //什么都不写，默认是any类型
