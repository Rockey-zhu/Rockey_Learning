//Array.prototype.includes
//返回一个布尔值，表上某个数组是否包含给定的值
{
    [1, 2, 3].includes(2); //true
    [1, 2, 3].includes(4); //false
    [1, 2, NaN].includes(NaN); //true
}


let s = 'hello';
s.startsWith('hello'); //true
s.endsWith('hello'); //true
s.includes('o'); //true