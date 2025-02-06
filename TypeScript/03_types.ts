//也可以直接使用字面量进行类型声明
let a: 10;
a = 10;

//可以使用 | 来连接多个类型(联合类型)
let b: "male" | "female";
b = "male";
b = "female";

let c: boolean | string;
c = true;
c = "hello";

//any 表示的是任意类型,一个变量设置类型为any后相当于对该变量关闭了TS的类型检测

//声明变量如果不指定类型，TS解析器会自动判断变量类型为any (隐式any)
let d: any;
d = 10;
d = "hello";
d = true;

//unknown 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: String;

//d的类型是any,她可以赋值给任意变量      unknow只祸害自己，any还祸害别人
//s=d

e = "hello";

//unknown 实际上就是一个类型安全的any
//unknown 类型的变量,不能直接赋值给其他变量
if (typeof e === "string") {
  s = e;
}

//类型断言，可以告诉解析器变量的实际类型
// 语法
//     变量 as类型
//     <类型> 变量

s = e as string;
s = <string>e;

function fn(num) {
  if (num > 0) {
    return true;
  } else {
    return 123;
  }
}

//void 用来表示空，以函数为例，即表示没有返回值的函数
function dn(): void {}

//never 表示永远不会返回结果
function cn(): never {
  throw new Error("报错了!");
}

//object 表示一个js对象
let z: object;
z = {};
z = function () {};

//{} 用来指定对象中可以包含哪些属性
//语法：{属性名:属性值，属性名：属性值}
//在属性名后边加上？，表示属性是可选的
let w: { name: string; age?: number };
w = { name: "孙悟空", age: 18 };

// [propName: string]: any表示任意类型的属性
let x: { name: string; [propName: string]: any };
x = { name: "猪八戒", age: 18, gernder: "男" };

//设置函数结构的类型声明：
// 语法(形参：类型，形参：类型...)=>返回值
let y: (a: number, b: number) => number;
// y = function (n1: String, n2: String): number{
//     return 10
// }

// 数组的类型声明
// 类型[]
//     Array<类型>

//string[]表示字符串数组
let k: string[];
//k = ['a','b',123]

// number[]表示数值数组
let v: number[];
let u: Array<number>;

v = [1, 2, 3];
u = [1, 2, 3];

// 元组，元组就是固定长度的数组  规定几个就只能定义几个数据
let h: [string, string];
h = ["hello", "123"];

//enum 枚举
enum Gender {
  Male = 0,
  Female = 1,
}

let i: { name: string; gender: Gender };
i = {
  name: "孙悟空",
  gender: Gender.Male,
};
console.log(i.gender === Gender.Male);

//&表示同时
let j: { name: string } & { age: number };
j = { name: "孙悟空", age: 18 };

//类型的别名
type mytype = 1 | 2 | 3 | 4 | 5;
let o: 1 | 2 | 3 | 4 | 5;
let m: mytype;
m = 4;
m = 3;
m = 1;
