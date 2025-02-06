let s = Symbol();
console.log(typeof s) //symbol

//Symbol函数可以接受一个字符串作为参数
let s1 = Symbol('foo');
let s2 = Symbol('bar');

console.log(s1.toString(),
        s2.toString())
    // "Symbol(foo)"      "Symbol(bar)"
    //s1和s2是两个 Symbol 值。如果不加参数，它们在控制台的输出都是Symbol()

//如果symbol的参数是一个对象，就会调用改对象tostring方法，将其转为字符串，生成一个 Symbol 值
const obj = {
    toString() {
        return 'abc';
    }
};
const sym = Symbol(obj);
console.log(sym) // Symbol(abc)

//Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
//没有参数的情况
let s1 = Symbol();
let s2 = Symbol();

s1 === s2 //false

//有参数情况
let s1 = Symbol('foo');
let s2 = Symobl('foo');

s1 === s2 //false
    //s1和s2都是Symbol函数的返回值，而且参数相同，但是它们是不相等的。

//Symbol 值不能与其他类型的值进行运算，会报错
let sym = Symbol('My symbol');
"your symbol is " + sym // TypeError: can't convert symbol to string
    `your symbol is ${sym}` // TypeError: can't convert symbol to string

let sym = Symbol('My symbol');
String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'
    //Symbol 值可以显式转为字符串。

let sym = Symbol();
Boolean(sym) //true
    !sym //false

if (sym) {

}
Number(sym)
sym + 2 //TypeError

//2.Symbol.prototype.description方法
const sym = Symbol('foo'); //sym的描述就是字符串foo

const sym = Symbol('foo');
String(sym) // "Symbol(foo)"
sym.toString() // "Symbol(foo)"

const sym = Symobl('foo');
sym.description //"foo"

//3.作为属性名的 Symbol
//用于对象的属性名，就能保证不会出现同名的属性
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
    [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"

//let obj = {
//   [s](arg) { ... }
//  };

//Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的
const log = {}

log.levels = {
    DEBUG: Symobl('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}

//4.消除魔法字符串
//魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。
function getArea(shape, options) {
    let area = 0;

    switch (shape) {
        case 'Triangle': // 魔术字符串
            area = .5 * options.width * options.height;
            break;
            /* ... more code ... */
    }

    return area;
}

getArea('Triangle', { width: 100, height: 100 });
//把Triangle写成shapeType对象的triangle属性，这样就消除了强耦合。

//属性名的遍历 
//该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。

//Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名。该方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
const obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';

const objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols)
    // [Symbol(a), Symbol(b)]

//下面是另一个例子，Object.getOwnPropertySymbols()方法与for...in循环、
const obj = {};
const foo = Symbol('foo');

obj[foo] = 'bar';

for (let i in obj) {
    console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj) // []
Object.getOwnPropertySymbols(obj) // [Symbol(foo)]
    //for...in循环和Object.getOwnPropertyNames()方法都得不到 Symbol 键名

let obj = {
    [Symbol('my_key')]: 1,
    enum: 2,
    nonEnum: 3
};

Reflect.ownKeys(obj)
    //  ["enum", "nonEnum", Symbol(my_key)]

//Symbol值为键名，不会被常规方法遍历到，所以可以定制非私有的，希望只用于内部的方法

let size = Symbol('size');

class Collection {
    constructor() {
        this[size] = 0;
    }

    add(item) {
        this[this[size]] = item;
        this[size]++;
    }

    static sizeOf(instance) {
        return instance[size];
    }
}

let x = new Collection();
Collection.sizeOf(x) // 0

x.add('foo');
Collection.sizeOf(x) // 1

Object.keys(x) // ['0']
Object.getOwnPropertyNames(x) // ['0']
Object.getOwnPropertySymbols(x) // [Symbol(size)]
    //对象x的size属性是一个 Symbol 值，所以Object.keys(x)、Object.getOwnPropertyNames(x)都无法获取它

//Symbol.for()，Symbol.keyFor()方法
//Symbol.for()方法可抑制自动帮你搜索有没有以该参数作为名称的Symbol值，有就返回Symbol值，否则新建一个以该字符串为名称的Symbol值

let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')

s1 === s2 //true
    //s1和s2都是 Symbol 值，但是它们都是由同样参数的Symbol.for方法生成的，所以实际上是同一个值。

//Symobl.for()与Symbol()都会产生新的Symbol 区别是，前者可以在全局环境里搜索。
Symbol.for("bar") === Symbol.for("bar")
    // true

Symbol("bar") === Symbol("bar")
    // false

//上面代码中，由于Symbol()写法没有登记机制，所以每次调用都会返回一个不同的值。

//Symbol.keyFor()方法返回一个已登记的Symbol类型值得key
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) //"foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) //undefined
    //变量s2属于未登记的 Symbol 值，所以返回undefined。

//Symbol.for()为 Symbol 值登记的名字，是全局环境的，不管有没有在全局环境运行。

function foo() {
    return Symbol.for('bar');
}
const x = foo();
const y = Symbol.for('bar');
console.log(x === y); //true

//Symbol.fo('bar')是函数内部运行的，但是生成的 Symbol 值是登记在全局环境的。所以，第二次运行Symbol.for('bar')可以取到这个 Symbol 值.

//模块的Singleton模式
//Singleton 模式指的是调用一个类，任何时候返回的都是同一个实例。

function A() {
    this.foo = 'hello';
}
if (!globalThis._foo) {
    globalThis._foo = new A();
}
module.exports = global._foo;

const a = require('./mod.js');
console.log(a.foo);
//全局变量global._foo是可写的，任何文件都可以修改。

global._foo = { foo: 'world' };

const a = require('./mod.js');
console.log(a.foo);
//上面的代码，会使得加载mod.js的脚本都失真

//为了防止这种情况出现啊，我们可以使用Symbol
const FOO_KEY = Symbol.for('foo');

function A() {
    this.foo = 'hello';
}

if (!global[FOO_KEY]) {
    global[FOO_KEY] = new A();
}

module.exports = global[FOO_KEY];

//内置Symobol值
//Symbol.hasInstance
//当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
class Myclass {
    [Symbol.hasInstance](foo) {
        return foo instanceof Array;
    }
}
[1, 2, 3] instanceof new Myclass() //true
    //MyClass是一个类，new MyClass()会返回一个实例

class Even {
    static[Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
}

// 等同于
const Even = {
    [Symbol.hasInstance](obj) {
        return Number(obj) % 2 === 0;
    }
};

1 instanceof Even // false
2 instanceof Even // true
12345 instanceof Even // false

//Symbol.isConcatSpreadable方法
//Symbol.isConcatSpreadable属性等于一个布尔值，表示该对象用于Array.prototype.concat()时，是否可以展开

let arr1 = ['c', 'd'];
['a', 'b'].concat(arr1, 'e') // ['a', 'b', 'c', 'd', 'e']
arr1[Symbol.isConcatSpreadable] // undefined

let arr2 = ['c', 'd'];
arr2[Symbol.isConcatSpreadable] = false;
['a', 'b'].concat(arr2, 'e') //['a','b',['c','d'],'e']
    //上面代码说明，数组的默认行为是可以展开，Symbol.isConcatSpreadable默认等于undefined
    //该属性等于true时，也有展开的效果

//Symbol.isConcatSpreadable属性也可以定义在类里面
class A1 extends Array {
    constructor(args) {
        super(args);
        this[Symbol.isConcatSpreadable] = true;
    }
}
class A2 extends Array {
    constructor(args) {
        super(args);
    }
    get[Symbol.isConcatSpreadable]() {
        return false;
    }
}
let a1 = new A1();
a1[0] = 3;
a1[1] = 4;
let a2 = new A2();
a2[0] = 5;
a2[1] = 6;
[1, 2].concat(a1).concat(a2)
    // [1, 2, 3, 4, [5, 6]]

//类A1是可展开的，类A2是不可展开的，所以使用concat时有不一样的结果。

//Symbol.species 属性，指向一个构造函数，创建衍生对象时，会使用该属性
class MyArray extends Array {

}
const a = new MyArray(1, 2, 3);
const b = a.map(x => x);
const c = a.filter(x => x > 1);

b instanceof MyArray //true
c instanceof MyArray //true
//子类MyArray继承了父类Array，a是MyArray的实例，b和c是a的衍生对象

class MyArray extends Array {
    static get[Symbol.species]() { return Array; }
}
//定义了Symbol.species属性，创建衍生对象时就会使用这个属性返回的函数，作为构造函数。这个例子也说明，定义Symbol.species属性要采用get取值器。

// static get [Symbol.species]() {
//     return this;
//   }


//=====================总结=================
//Symbol 值通过Symbol函数生成。
//保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。
{
    let a = Symbol('abc');
    console.log(a) //Symbol(abc)
    console.log(a.toString()); //Symbol(abc)
}

//2.Symbol.prototype.description
//提供了一个实例属性description,直接返回 Symbol 的描述。
const sym = Symbol('foo');
console.log(sym.description); //"foo"

//3.作为属性名的 Symbol § ⇧
//由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名
{
    let mySymbol = symbol();
    let a = {
        [mySymbol]: 'Hello!'
    };
    console.log(a[mySymbol]); //"Hello!"
}

//4.消除魔法字符串
//魔术字符串：在代码之中多次出现，与代码形成强耦合的某一具体的字符串或数值
{
    const shapeType = {
        triangle: 'triangle'
    };

    function getArea(shape, options) {
        let area = 0;
        switch (shape) {
            case shapeType.triangle:
                area = 1 / 2 * options.width * options.height;
                break;
        }
        return area;
    }

    getArea(shapeType.triangle, { width: 100, height: 100 });
    console.log(getArea());
}

//属性名的遍历
//Object.getOwnPropertySymbols()方法，可以获取指定对象的所有 Symbol 属性名
{
    const obj = {};
    let a = Symbol('a');
    let b = Symbol('b');

    obj[a] = 'Hello';
    obj[b] = 'World';

    const objectSymbols = Object.getOwnPropertySymbols(obj);

    console.log(objectSymbols); // [Symbol(a), Symbol(b)]
}

//6.我们希望重新使用同一个 Symbol 值，Symbol.for()方法可以做到这一点

let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
s1 === s2 //true
    //s1和s2都是 Symbol 值，但是它们都是由同样参数的Symbol.for方法生成的，所以实际上是同一个值。

//7.探究symbol()与symbol.for()
//symbol()，会生成新的Symbol，但是生成后被全局环境中供搜索
//symbo.for()会生成新的symbol,但不会每次调用就返回一个新的Symbol类型的值，先检查，没有才创建
Symbol.for("bar") === Symbol.for("bar")
    // true

Symbol("bar") === Symbol("bar")
    // false

//8.Symbol.keyFor()方法返回一个已登记的 Symbol 类型值的key。
let s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"

let s2 = Symbol("foo");
Symbol.keyFor(s2) // undefined

//9.内置Symobl的值
// (1)Symbol.hasInstance    当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
// (2)Symbol.isConcatSpreadable属性等于一个布尔值       表示该对象用于Array.prototype.concat()时，是否可以展开
// (3)Symbol.species属性                  ，指向一个构造函数。创建衍生对象时，会使用该属性
// (4)Symbol.match属性                      ，指向一个函数，如果该属性存在，会调用它，返回该方法的返回值。
// (5)Symbol.replace属性             如果该属性存在，会调用它，返回该方法的返回值。
// (6)Symbol.search属性                  
// (7)Symbol.spli
// (8)Symbol.iterator
// (9)Symbol.toPrimitive
// (10)Symbol.toStringTag
// (11)Symbol.unscopables