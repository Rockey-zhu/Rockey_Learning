//  ...扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。

console.log(...[1, 2, 3]) //1,2,3

function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y
}
const numbers = [4, 38];

console.log(add(...numbers)) //42


//扩展运算符的应用
//（1）复制数组

const a1 = [1, 2]
const a2 = a1;
a2[0] = 2
console.log(a1) //[2,2]
    // 上面代码中，a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化。

const a1 = [1, 2]
    //写法一
const a2 = [...a1];
//写法二
const [...a2] = a1;
//上面的两种写法，a2都是a1的克隆。


//(2)合并数组
const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e']

//es5合并数组
arr1.concat(arr2, arr3);

//es6合并数组
[...arr1, ...arr2, ...arr3];
//['a','b','c','d','e']

//（3）与解构赋值结合