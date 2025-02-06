//1.定时器
//该功能主要由setTimeout()和setInterval()这两个函数来实现

//2.setTimeout()       ******只执行一次的定时器 
//用来指定某个函数或某段代码,在多少毫秒之后执行
//  参数一：函数名或者语句     参数二：延迟时间参数 ，单位ms


//3.setInterval()      ******循环多次执行  其他同上

/*var i = 1;
setTimeout(function() {
    console.log(i)
}, 6000)

setInterval(() => {

}, 1000);
*/

//4.定时器的清除
//清除timeout             清除interval    
//clearTimeout           clearInterval()
//************必须要有个变量指向function,才能清除
//例如：
var ti = setTimeout(function() {
    console.log("eeeeeeeee")
}, 1000);
clearTimeout(ti);

var ti = setInterval(function() {
    console.log("handle")
}, 1000)
clearInterval(ti);