// 五种基本数据类型  (简单数据类型)  Undefined Null  Boolean  Number String   
//  基本类型存放在栈内存

//引用数据类型(复杂数据类型)  Object Array
// 引用数据类型放在堆内存

//Undefined 其实就是已声明未赋值的变量输出的结果

//null 其实就是一个不存在的对象的结果。

//基本数据类型
//他们的值在内存中占据着固定大小的空间，并被保存在栈内存中。
//当一个变量向另一个变量复制基本类型的值，会创建这个值的副本，并且我们不能给基本数据类型的值添加属性

var a = 1;
var b = a;
b.name = 'hanna';
console.log(a) //1
console.log(b.name) //undefined

//上面代码中，a是解百纳数据类型(number)   b是a的副本，两者占有不同位置但相等的内存空间，只是值相等，改变其中一方，另一方不会随之改变