// 转数值   把其他数据类型转换成 数值类型
//转字符串  把其他数据类型转换成 字符串类型
//转布尔    把其他数据类型转换成 布尔类型

/*
转数值
1.Number();   Number(要转换的内容)

2.parseInt();  ParseInt(要转换的内容)转换内容一位位看   "100abc"===>100

3.parseFloat() ParseInt(要转换的内容)转换内容一位位看   "100.234abc"===>100.234abc  可以解析到小数部分



转字符串
1.String(要转换的内容)
2.toString()  要转换的内容.toString()


转布尔
1.Boolean()  Boolean(要转换的内容)        false: 0   NaN  ''  undefined  null  其他均为true
*/



//准备一个变量，赋值为字符串类型内容
var s1 = '100';
console.log(s1); //100
console.log(typeof s1) //string

//使用Number()方法转换
var n1 = Number(s1);
console.log(n1); //100
console.log(typeof n1) //number

//准备一个变量，赋值为字符串类型内容
var s2 = 'abc';
console.log(s2); //abc
console.log(typeof s2) //string

//使用Number()方法转换
var n2 = Number(s2);
console.log(n2); //NaN    =>>>>非数字 ：Not a Number
console.log(typeof n2) //number

//准备一个变量，赋值为字符串类型内容
var s3 = '100abc';
console.log(s3); //100abc
console.log(typeof s3) //string

//使用parseInt()方法转换
var n3 = parseInt(s3);
console.log(n3); //100
console.log(typeof n3) //number

//准备一个变量，赋值为字符串类型内容
var s4 = '100.234abc';
console.log(s4); //100.234
console.log(typeof s4) //string

//使用parseFloat()方法转换
var n4 = parseFloat(s4);
console.log(n4); //100.234
console.log(typeof n4) //number

//准备一个变量，赋值为字符串类型内容
var b1 = true;
console.log(b1); //true
console.log(typeof b1) //boolean

//使用String()方法转换
var d1 = String(b1);
console.log(d1); //t-r-u-e  true
console.log(typeof d1) //string

//使用toString()/方法转换
var b2 = true;
var d2 = b2.toString();
console.log(d2);
console.log(typeof d2)