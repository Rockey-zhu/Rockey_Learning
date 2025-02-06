//字符的拼接 和模板字符串的拼接效果

let value = 5
let exponent = 'second'
let a = value + 'to be' + exponent + 'power is' + value;
let b = `${value} to be ${exponent} power is ${value}`;

if (a = b) {
    console.log("a和b的效果一样");
}

//所有插入的值都会使用toString()强制转型为字符串，任何js表达式
//都可以用于插值，嵌套的模板字符串无须转义