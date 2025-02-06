//1.扩展运算符 ===》三个点（...）  将一个素组转为用逗号分隔的参数序列

// console.log(...[1, 2, 3]);
// console.log(1, ...[2, 3, 4], 5);
// // [...document.querySelectorAll('div')]

// function push(array, ...items) {
//     array.push(...items);
// }

// function add(x, y) {
//     return x + y;
// }

// const numbers = [4, 38];
// console.log(add(...numbers))  //42

// function f(v, w, x, y, z) {}
// const args = [0, 1];
// console.log(f(-1, ...args, 2, ...[3]));

//代替函数的apply方法

// function f(x, y, z) {
//     //...
// }
// let args = [0, 1, 2];
// f(...args);

// console.log(Math.max(...[14, 3, 77])) //77

//push函数，将一个数组添加到另一个数组的尾部
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// arr1.push(...arr2);

// const a1 = [1, 2];
// const a2 = a1;

// a2[0] = 2;
// a2[1] = 1;
// console.log(a1)
//a2并不是a1的克隆，而是指向同一份数据的另一个指针。修改a2，会直接导致a1的变化

// const a1 = [1, 2];

// const a2 = [...a1]; // 写法一

// const [...a2] = a1; // 写法二
//上面的两种写法，a2都是a1的克隆。

//合并数组
// const arr1 = ['a', 'b'];
// const arr2 = ['c'];
// const arr3 = ['d', 'e'];
// console.log([...arr1, ...arr2, ...arr3])

// const a1 = [{ foo: 1 }];
// const a2 = [{ bar: 2 }];

// const a3 = a1.concat(a2);
// const a4 = [...a1, ...a2];

// a3[0] === a1[0] // true
// a4[0] === a1[0] // true

// const [first, ...rest] = [1, 2, 3, 4, 5];
// console.log(first, rest)

// const [first, ...rest] = [];
// console.log(first // undefined
//         , rest) // []

// const [first, ...rest] = ["foo"];
// console.log(first // "foo"
//         , rest) // []

//如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。
// const [...butLast, last] = [1, 2, 3, 4, 5];
// 报错

// const [first, ...middle, last] = [1, 2, 3, 4, 5];
// 报错

// console.log([...
//     'hello'
// ])

// let str = 'x\uD83D\uDE80y';

// str.split('').reverse().join('')
// // 'y\uDE80\uD83Dx'

// console.log([...str].reverse().join(''))

// let map = new Map([
//     [1, 'one'],
//     [2, 'two'],
//     [3, 'three'],

// ]);
// let arr = {...map.keys() }; //[1,2,3]

// const go = function*() {
//     yield 1;
//     yield 2;
//     yield 3;
// };
// console.log([...go()])


//Array.from()方法
// let arrayLike = {
//     '0': 'a',
//     '1': 'b',
//     '2': 'c',
//     length: 3
// };
// let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
// console.log(arr2)

// Array.from(arrayLike, x => x * x);
// // 等同于
// Array.from(arrayLike).map(x => x * x);

// console.log(Array.from([1, 2, 3], (x) => x * x))
//     // [1, 4, 9]

// Array.from([1, , 2, , 3], (n) => n || 0)

// function typesOf() {
//     return Array.from(arguments, value => typeof value)
// }
// console.log(typesOf(null, [], NaN))

// console.log(Array.of(3, 11, 8), // [3,11,8]
//         Array.of(3), // [3]
//         Array.of(3).length) // 1

// Array() // []
// Array(3) // [, , ,]
// Array(3, 11, 8) // [3, 11, 8]
// 只有当参数个数不少于 2 个时，Array()才会返回由参数组成的新数组。参数只有一个正整数时，实际上是指定数组的长度。

// console.log(Array.of(), // []
//         Array.of(undefined), // [undefined]
//         Array.of(1), // [1]
//         Array.of(1, 2)) // [1, 2]
//Array.of()总是返回参数值组成的数组。如果没有参数，就返回一个空数组。

//使用这个方法，会修改当前数组  .copyWithin()

// target(必需)：从该位置开始替换数据。如果是负值，表示倒数。

// 　　start(可选)：从该位置开始读取需要被复制到其他位置的成员(包括该位置的成员)，
// 　　　　　　      默认为0。如果负值，表示倒数。

// 　　end(可选)：到该位置停止读取需要被复制到其他位置的成员(不包括该位置的成员)，
// 　　　　　　     默认为数组长度。如果是负值，表示倒数。


// 将3号位复制到0号位
// [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]

// -2相当于3号位，-1相当于4号位
// console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1))
// [4, 2, 3, 4, 5]

// 将3号位复制到0号位
// [].copyWithin.call({length: 5, 3: 1}, 0, 3)
// {0: 1, 3: 1, length: 5}

// 将2号位到数组结束，复制到0号位
// let i32a = new Int32Array([1, 2, 3, 4, 5]);
// i32a.copyWithin(0, 2);
// Int32Array [3, 4, 5, 4, 5]

// 对于没有部署 TypedArray 的 copyWithin 方法的平台
// 需要采用下面的写法
// [].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);
// Int32Array [4, 2, 3, 4, 5]

//find() 和 findIndex()方法
// [1, 4, -5, 10].find((n) => n < 0) //依次查找，找到第一个返回值为true的成员，返回改成员，否则为undefined

// [1, 5, 10, 15].find(function(value, index, arr) {
//         return value > 9;
//     }) // 10

// function f(v) {
//     return v > this.age;
// }
// let person = { name: 'John', age: 20 };
// console.log([10, 12, 26, 15].find(f, person)); //26

// [NaN].indexOf(NaN)

// [NaN].findIndex(y => objedt.is(NaN, y))   //，indexOf方法无法识别数组的NaN成员，但是findIndex方法可以借助Object.is方法做到。


//[7,7,7]
// console.log(['a', 'b', 'c'].fill(7)) //fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。


//['a', 7, 'c']
// console.log(['a', 'b', 'c'].fill(7, 1, 2)) //fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

// entries()，keys() 和 values() 方法
//for...of循环进行遍历，唯一的区别是keys()是对键名的遍历、values()是对键值的遍历，entries()是对键值对的遍历。

for (let index of['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1

for (let elem of['a', 'b'].values()) {
    console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of['a', 'b'].entries()) {
    console.log(index, elem);
}
// 0 "a"
// 1 "b"

//includes()方法
//Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
// [1, 2, 3].includes(2) // true
//     [1, 2, 3].includes(4) // false
//     [1, 2, NaN].includes(NaN) // true

console.log([NaN].indexOf(NaN))
    // -1
    //includes使用的是不一样的判断算法，就没有这个问题。

console.log([NaN].includes(NaN))
    // true

//     Map 结构的has方法，是用来查找键名的，比如Map.prototype.has(key)、WeakMap.prototype.has(key)、Reflect.has(target, propertyKey)。
// Set 结构的has方法，是用来查找值的，比如Set.prototype.has(value)、WeakSet.prototype.has(value)。

//flat()，flatMap()方法
//Array.prototype.flat()用于将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，对原数据没有影响
console.log([1, 2, [3, 4]].flat()) //[1,2,3,4]

//flat()默认只会“拉平”一层 ,想要拉平多层嵌套数组,需要在flat()写你要拉的层数
console.log([1, 2, [3, [4, 5]]].flat())
    // [1, 2, 3, [4, 5]]

console.log([1, 2, [3, [4, 5]]].flat(2))
    // [1, 2, 3, 4, 5]

//********如果不管有多少层嵌套，都要转成一维数组，可以用Infinity关键字作为参数*************
// [1, [2, [3]]].flat(Infinity)

//flatMap()方法对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()），然后对返回值组成的数组执行flat()方法。该方法返回一个新数组，不改变原数组。

// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
// [2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]

//flatMap()只能展开一层数组。

// 相当于 [[[2]], [[4]], [[6]], [[8]]].flat()
// [1, 2, 3, 4].flatMap(x => [
//         [x * 2]
//     ])
// [[2], [4], [6], [8]]
//上面代码中，遍历函数返回的是一个双层的数组，但是默认只能展开一层，因此flatMap()返回的还是一个嵌套数组。

//数组的空位
//数组的空位指，数组的某一个位置没有任何值。比如，Array构造函数返回的数组都是空位。   
console.log(Array(3)) //[, , ,]
    //Array(3)返回一个具有 3 个空位的数组。

console.log(0 in [undefined, undefined, undefined], // true
        0 in [, , , ]) // false

//ES6 则是明确将空位转为undefined。

//Array.from方法会将数组的空位，转为undefined，也就是说，这个方法不会忽略空位。
console.log(Array.from(['a', , 'b']))
    // [ "a", undefined, "b" ]

console.log([...['a', , 'b']])
    // [ "a", undefined, "b" ]
    //扩展运算符（...)也会将空位转为undefined

//copyWithin()会连空位一起拷贝。
console.log([, 'a', 'b', , ].copyWithin(2, 0)) // [,"a",,"a"]

//for ...of循环也hi遍历空位
let arr = [, , ];
for (let i of arr) {
    console.log(1);
}
// 1
// 1

//Array.prototype.sort() 的排序稳定性 
const arr = [
    'peach',
    'straw',
    'apple',
    'spork'
];
const stableSorting = (s1, s2) => {
    if (s1[0] < s2[0]) return -1;
    return 1;
};

arr.sort(stableSorting)
    // ["apple", "peach", "straw", "spork"]


const unstableSorting = (s1, s2) => {
    if (s1[0] <= s2[0]) return -1;
    return 1;
};
arr.sort(unstableSorting)
    // ["apple", "peach", "spork", "straw"]

//stableSorting是稳定排序。unstableSorting是不稳定的