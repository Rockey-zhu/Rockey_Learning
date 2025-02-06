// 浅拷贝就是只复制引用  不复制真正的值

//对象浅拷贝
var a = 1;
var b = a;
b.name = 'hanna';
console.log(a); //1
console.log(b.name); //undefined

//数组的浅拷贝
var arr = [1, 2, 3, '4'];

var arr2 = arr;
arr2[1] = "test";
console.log(arr) //[ 1, 'test', 3, '4' ]
console.log(arr2); //[ 1, 'test', 3, '4' ]

arr[0] = "first"
console.log(arr) //[ 'first', 'test', 3, '4' ]
console.log(arr2); //[ 'first', 'test', 3, '4' ]

//利用 = 赋值操作符实现了一个浅拷贝 随着arr2 和arr 改变 arr和arr2也随之发生变化


//Es6扩展运算符 实现数组的浅拷贝     //一层对象是深拷贝  多层引用是浅拷贝
var arr3 = [1, 2, 3, 4, 5]
var [...arr4] = arr3
arr4[2] = 5
console.log(arr3) //[ 1, 2, 3, 4, 5 ]
console.log(arr4) //[ 1, 2, 5, 4, 5 ]