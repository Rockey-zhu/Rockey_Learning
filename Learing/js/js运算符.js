//算数运算符
//赋值运算符
//比较运算符
//逻辑运算符
//自增自减运算符

/*
    算数运算符:  "+"    1.当符号两边都是数字或布尔的时候，会进行数学运算
                        2.只要符号任意一边是字符串的时候,就会进行字符串拼接

                -  *  /   % 只是进行数学运算

    
    赋值运算符   "="  ==>表示讲右边的值赋给左边                 +=  -=  *=  /=   %=    n+=10; ==> n=n+10       

    
    比较运算符    比较结果一定是 true or false  >=  <  <=  
               特殊补充：  ==：等于比较   只比较 值 是不是相等的 ，不考虑数据类型
                          ===：全等于比较    不仅比较值 还比较数据类型是否一样
                          != : 不等于比较 
                          !== : 不全等比较


    逻辑运算符  && : 与 运算      || :或 运算    !: 非 运算

                && :  相同 true  相当于数学 交集
                || :  任意一边相同  最终结果 true   相当于数学 并集
                 ! :  取反 运算

    自增自减运算符     前置++   后置加加   相同点：让变量自身的值+1
                                            不同点：  前置++ 先变化，后运算
                                                        后置++  先运算，后变化

                       前置--   后置--     相同点：让变量自身值-1
                                            不同点： 前置--：先变化 ，后运算
                                                    后置-- ：先运算 ，后变化
*/


var n1 = 10;
var n2 = 20;

//计算 n1+n2 的结果，赋值给n3
var n3 = n1 + n2
console.log(n3) //30

var s1 = 10;
var s2 = 'abc';
var s3 = s1 + s2;
console.log(s3) //10abc

console.log(10 == 10); //true
console.log(10 == '10'); //true

console.log(10 === 10); //true
console.log(10 === '10') //false

console.log("-----------------")
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)


console.log("***************")
var n = 5
    //console.log(1 + --n); //5
    //console.log(1 + n--); //6

//console.log(1 + ++n); //7
//console.log(1 + n++); //6