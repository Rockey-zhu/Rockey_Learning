//js类型分为  基本数据类型    引用数据类型
/*
    基本数据类型：数值类型   字符串类型  布尔类型  空类型===> undefined  null

    数值类型：常见的数值 以及 不同进制的数值   十六进制：0 ， 1， 2，.....,9  a,b,c....f,  16进位了==>>10

    字符串类型： '' 或者 "" 包起来的一般属于此类型  js中不区分单引号和双引号

    布尔类型：true  表示真  false 表示假

    空类型: null ：表示有值，有一个空值  var  k1==null    
            undefined:表示没有值   var k2


    引用数据类型  使用typeof关键字检查数据类型    
    
*/

//运用typeof判断数据类型
var n1 = 100;
var result = typeof n1;
console.log(result); //number


//***特殊的null类型返回*****
var n2 = null;
var result5 = typeof n2;
console.log(result5) //object