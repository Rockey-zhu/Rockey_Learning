//ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

//Set本身是一个构造函数，用来生成 Set 数据结构。
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
} //2 3 5 4
//上面代码通过add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值

//Set函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
//例一
const set = new Set([1, 2, 3, 4, 4]);
[...set] //[1,2,3,4]

//例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size //5

//例三
const set = new Set(document.querySelectorAll('div'));
set.size //56

//类似于
const set = new Set();
document
    .querySelectorAll('div')
    .forEach(div => set.add(div));
set.size
    //上面代码中，例一和例二都是Set函数接受数组作为参数，例三是接受类似数组的对象作为参数。

//去除数组重复成员的方法
//去除数组的重复成员
//[...new Set(array)]

//上面的方法也可以用于，去除字符串里面重复字符
// [...new Set('abcabbc')].join('')
//"abc"
//向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值

let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
//上面代码向 Set 实例添加了两次NaN，但是只会加入一个
//在 Set 内部，两个NaN是相等的。

//两个对象总是不相等的
let set = new Set();
set.add({})
set.size //1

set.add({});
set.size //2

//上面代码表示，两个空对象不相等，所以他们被视为两个值

//set实例的属性和方法
//Set结构的实例有以下属性
// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。

//Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
// Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
// Set.prototype.clear()：清除所有成员，没有返回值。

s.add(1).add(2).add(2);
//注意2被加入了两次

s.size //2
s.has(1) //true
s.has(2) //true
s.has(3) //false

s.delete(2);
s.has(2) // false

//下面是一个对比，看看在判断是否包括一个键上面，Object结构和Set结构的写法不同。
// 对象的写法
const properties = {
    'width': 1,
    'height': 1
};

if (properties[someName]) {
    // do something
}

// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
    // do something
}

//Array.from方法可以将set结构转为数组
const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);

//这就提供了去除数组重复成员的另一种用法
function dedupe(array) {
    return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]) //[1,2,3]

//遍历操作
// Set结构的实例有四个遍历方法，可以用于遍历成员。
//  Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员
//Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。

//（1）keys()，values()，entries()
//keys方法、values方法、entries方法返回的都是遍历器对象

let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.values()) {
    console.log(item);
}
// red
// green
// blue

for (let item of set.entries()) {
    console.log(item);
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

//上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

Set.prototype[Symbol.iterator] === Set.prototype.values
    //true

//这意味着，可以省略values方法，直接用for...of循环遍历set
let set = new Set(['red', 'green', 'blue']);
for (let x of set) {
    console.log(x);
}
//red
//green
//blue

//(2)forEach()
//Set结构Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
// let set =new Set([1,4,9]);
// set.forEach((value,key))= >console.log(key+':'+value)
//1:1
//4:4
//9:9
//foreach方法的参数是一个处理函数，该函数的参数与数组的foreach一致，Set结构的键名就是键值
//foreach 还可以有第二个参数，表示绑定处理函数内部的this对象

//(遍历的应用)

let set = new Set(['red', 'green', 'yellow']);
let arr = [...set]
    //['red','green','yellow']

//扩展运算符和set结构相结合，就可以去除数组的重复成员
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
//[3,5,2]

//而且，数组的map和filter方法也可以间接用于 Set 了。
let set = new Set([1, 2, 3]);
set = new Set([...set].map(x => x * 2));
//返回Set结构：{2，4，6}

let set = new Set([1, 2, 3, 4, 5]);
set = new Set([...set].filter(x => (x % 2) == 0));
// 返回Set结构：{2, 4}

// 因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}

//如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。
//一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用Array.from方法。
// 方法一

let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6

//2.weakset
//WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。
//首先，WeakSet 的成员只能是对象，而不能是其他类型的值
//其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，

//语法
//weakset是一个构造函数，可以使用new命令，创建WeakSet数据结构
//const ws = new WeakSet();

//作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。
//（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。

const a = [
    [1, 2],
    [3, 4]
];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}

//上面代码中，a是一个数组，它有两个成员，也都是数组。
//将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。
//注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。

const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…)
//上面代码中，数组b的成员不是对象，加入 WeakSet 就会报错。

//WeakSet 结构有以下三个方法。
// WeakSet.prototype.add(value) ：向 WeakSet 实例添加一个新成员。
// WeakSet.prototype.delete(value) ：清除 WeakSet 实例的指定成员。
// WeakSet.prototype.has(value) ：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

const ws = new WeakSet();
const obj = {};
const foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo); // false

ws.delete(window);
ws.has(window); // false

//WeakSet 没有size属性，没有办法遍历它的成员。
ws.size // undefined
ws.forEach // undefined

ws.forEach(function(item) { console.log('WeakSet has ' + item) })
    // TypeError: undefined is not a function
    //WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。
    //WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

const foos = new WeakSet()
class Foo {
    constructor() {
        foos.add(this)
    }
    method() {
        if (!foos.has(this)) {
            throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
        }
    }
}
//只能在Foo的实例上调用。这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制


//Map
//含义和基本用法
// JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。
const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['object HTMLDivElement'] //"metadata"
    //上面代码原意是将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，
    //所以element被自动转为字符串[object HTMLDivElement]。

//ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
//也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，

const m = new Map();
const o = { p: 'Hello World' };

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false

//作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
const map = new Map([
    ['name', '张三'],
    ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"

//Map构造函数接受数组作为参数，实际上执行的是下面的算法。
const items = [
    ['name', '张三'],
    ['title', 'Author']
];

const map = new Map();

items.forEach(
    ([key, value]) => map.set(key, value)
);
//Set和Map都可以用来生成新的 Map。
const set = new set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo') //1

const m2 = new Map([
    ['baz', 3]
]);
const m3 = new Map(m2);
m3.get('baz') //3

// 上面代码中，我们分别使用 Set 对象和 Map 对象，当作Map构造函数的参数，结果都生成了新的 Map 对象。
// 如果对同一个键多次赋值，后面的值将覆盖前面的值。

const map = new Map();
map
    .set(1, 'aaa')
    .set(1, 'bbb');

console, log(map.get(1)) //"bbb"
    //上面代码对键1连续赋值两次，后一次的值覆盖前一次的值

//如果读取一个未知的键，则返回undefined
new Map().get('asfddfsasadf')
    // undefined
    //注意，只有对同一个对象的引用，Map结构才将其视为同一个键

const map = new Map();
map.set(['a'], 555);
map.get(['a']) //undefined
    //上面代码的set和get方法，表面是针对同一个键，但实际上这是两个不同的数组实例，内存地址是不一样的，因此get方法无法读取该键，返回undefined。

//同样的值，在Map结构中被视为两个键
const map = new Map();
const k1 = ['a'];
const k2 = ['a'];

map
    .set(k1, 111)
    .set(k2, 222);

map.get(k1) //111
map.get(k2) //222
    //上面代码中，变量k1和k2的值是一样的，但是它们在 Map 结构中被视为两个键。

// 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键，比如0和-0就是一个键，布尔值true和字符串true则是两个不同的键。
// 另外，undefined和null也是两个不同的键。
// 虽然NaN不严格相等于自身，但 Map 将其视为同一个键

let map = new Map();

map.set(-0, 123);
map.get(+0) // 123

map.set(true, 1);
map.set('true', 2);
map.get(true) // 1

map.set(undefined, 3);
map.set(null, 4);
map.get(undefined) // 3

map.set(NaN, 123);
map.get(NaN) // 123

//实例的属性和操作方法
//size属性   size属性返回 Map 结构的成员总数。
const map = new Map();
map.set('foo', true)
map.set('bar', false);
map.size //2

//Map.prototype.set(key, value)
//set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
const m = new Map();
m.set('edition', 6) //键时字符串
m.set(256, 'standard') //键是数值
m.set(undefined, 'nah') //键是undefind
    //set方法返回的是当前的Map对象，因此可以采用链式写法。

//set方法返回的是当前的Map对象，因此可以采用链式写法
let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

//(3)Map.prototype.get(key)
//get方法读取key对应的键值，如果找不到key，返回undefined
const m = new Map();

const hello = function() { console.log('hello'); };
m.set(hello, 'Hello ES6!') // 键是函数

m.get(hello) // Hello ES6!

//Map.prototype.has(key)
//has返回一个布尔值，表示某个键是否在当前Map对象之中
const m = new Map();

const m = new Map();

m.set('edition', 6);
m.set(262, 'standard');
m.set(undefined, 'nah');

m.has('edition') // true
m.has('years') // false
m.has(262) // true
m.has(undefined) // true

//（5）Map.prototype.delete(key)
//delete方法删除某个键，返回true。如果删除失败，返回false。

const m = new Map();
m.set(undefined, 'nah');
m.has(undefined) // true

m.delete(undefined)
m.has(undefined) // false

//(6)Map.prototype.clear()
//clear方法清除所有成员，没有返回值。

let map = new Map();
map.set('foo', true);
map.set('bar', false);

map.size // 2
map.clear()
map.size // 0

//遍历方法
//Map结构原生提供三个遍历器生成函数和一个遍历方法
// Map.prototype.keys()：返回键名的遍历器。
// Map.prototype.values()：返回键值的遍历器。
// Map.prototype.entries()：返回所有成员的遍历器。
// Map.prototype.forEach()：遍历 Map 的所有成员。

//需要特别注意的是，Map的遍历顺序就是插入顺序
const map = new Map([
    ['F', 'no'],
    ['T', 'yes'],
]);

for (let key of map.keys()) {
    console.log(key);
}
// "F"
// "T"

for (let value of map.values()) {
    console.log(value);
}
// "no"
// "yes"

for (let item of map.entries()) {
    console.log(item[0], item[1]);
}
// "F" "no"
// "T" "yes"

// 或者
for (let [key, value] of map.entries()) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"

// 等同于使用map.entries()
for (let [key, value] of map) {
    console.log(key, value);
}
// "F" "no"
// "T" "yes"
//上面代码最后的那个例子，表示 Map 结构的默认遍历器接口（Symbol.iterator属性），就是entries方法。
map[Symbol.iterator] === map.entries
    // true

// Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
const map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

[...map.key()],
//[1,2,3]
[...map.values()],
// ['one', 'two', 'three']

[...map.entries()],
// [[1,'one'], [2, 'two'], [3, 'three']]

[...map]
// [[1,'one'], [2, 'two'], [3, 'three']]


//***************************总结************************
//新的数据结构Set,类似数组，但是成员的值都是唯一的，没有重复的值

//Set本身是一个构造函数，用来生成 Set 数据结构。

const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
    console.log(i);
}
// 2 3 5 4

//set数组去重
{
    function dedupe(array) {
        return Array.from(new Set(array));
    }

    console.log(dedupe([1, 1, 2, 3])); // [1, 2, 3]
}

//set 结构实例
/*
Set.prototype.constructor:构造函数，默认就是set函数
Set.prototype.constructor: 返回Set实例的成员总数

Set.prototype.add(value):添加某个值，返回Set结构本身
Set.prototype.delete(value):删除某个值，返回一个布尔值，表示删除是否成功
Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员
Set.prototype.clear()：清除所有成员，没有返回值。
*/

{
    const s = new Set();

    s.add(1).add(2).add(2);
    // 注意2被加入了两次

    s.size; // 2

    s.has(1); // true
    s.has(2); // true
    s.has(3); // false

    s.delete(2);
    s.has(2); // false
}

//遍历操作
/*
Set.prototype.keys()：返回键名的遍历器
Set.prototype.values()：返回键值的遍历器
Set.prototype.entries()：返回键值对的遍历器
Set.prototype.forEach()：使用回调函数遍历每个成员
*/
{
    let set = new Set(['red', 'green', 'blue']);

    for (let item of set.keys()) {
        console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.values()) {
        console.log(item);
    }
    // red
    // green
    // blue

    for (let item of set.entries()) {
        console.log(item);
    }
    // ["red", "red"]
    // ["green", "green"]
    // ["blue", "blue"]

    let set = new Set([1, 4, 9]);
    set.forEach((value, key) => console.log(key + ' : ' + value))
        // 1 : 1
        // 4 : 4
        // 9 : 9
}

//可以省略values方法，直接使用for...of循环遍历set
{
    let set = new Set(['red', 'green', 'blue']);

    for (let x of set) {
        console.log(x);
    }
    // red
    // green
    // blue
}
//扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。
{
    let arr = [3, 5, 2, 2, 5, 5];
    let unique = [...new Set(arr)];
    console.log(unique); // [ 3, 5, 2 ]
}

//set实现交集，并集和差集
{
    let a = new Set([1, 2, 3]);
    let b = new Set([4, 3, 2]);

    // 并集
    let union = new Set([...a, ...b]);
    // Set {1, 2, 3, 4}

    // 交集
    let intersect = new Set([...a].filter(x => b.has(x)));
    // set {2, 3}

    // （a 相对于 b 的）差集
    let difference = new Set([...a].filter(x => !b.has(x)));
    // Set {1}
}

//WeakSet § ⇧
//与 Set 类似
//区别:1.WeakSet 的成员只能是对象，而不能是其他类型的值
{
    //可以使用new命令，创建 WeakSet 数据结构
    const ws1 = new WeakSet();
    /*
    WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
    WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
    WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。 
    */
    const ws = new WeakSet();
    const obj = {};
    const foo = {};
    const window = {}
    ws.add(window);
    ws.add(obj);

    ws.has(window); // true
    ws.has(foo); // false

    ws.delete(window);
    ws.has(window); // false
}

map
//他类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值(包括对象)都可以当作键；
//Object结构提供了“字符串-值”的对应，Map的结构提供了“值-值”的对应，

//类似于集合，列表
{
    //第一个是键，第二个是值
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    //为map新增属性（传值）.“键”的范围不限于字符串的体现
    map.set(555, '18');

    //传入多个值
    map.set(555, '18');

    //传入多个值
    map.set(666, '19')
        .set(777, '20');

    console.log(map); //Map(3) { 'name' => '张三', 'title' => 'Author', 555 => '18' }
    console.log(map.get(555)); //18

    //获取长度
    console.log(map.size); // 5
    console.log(map.has('name')); // true
    map.get('name') // "张三"
    map.has('title'); // true
    map.get('title'); // "Author"


    //删除某个元素
    map.delete(777);
    console.log(map.size); //4

    //清空
    /*map.clear();
    console.log(map.size); //0
    */

    //获取所有的键赋给k
    for (let k of map.keys()) {
        console.log(k); //name    title   555   666
    }

    //获取所有的值赋给v
    for (let v of map.values()) {
        console.log(v); //张三   Author   18  19
    }

    //获取所有的键值
    for (let kv of map.entries()) {
        console.log(kv[0] + "---" + kv[1]); //name---张三 ........
    }

    //解构赋值 --- 获取所有的键值
    for (let [k, v] of map.entries()) {
        console.log(k + "---" + v); //name---张三 ........
    }
}
//Map构造函数接受数组作为参数
{
    const items = [
        ['name', '张三'],
        ['title', 'Author']
    ];

    const map = new Map();

    items.forEach(
        ([key, value]) => map.set(key, value)
    );
}