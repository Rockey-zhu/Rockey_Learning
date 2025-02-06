//1.object.js()
//：相等运算符（==）:前者会自动转换数据类
//严格相等运算符（===）：后者的NaN不等于自身，以及+0等于-0

//Object.is就是部署这个算法的新方法。它用来比较两个值是否严格相等，与严格比较运算符（===）的行为基本一致。

console.log(Object.is('foo', 'foo'))
    //true
console.log(Object.is({}, {}))
    //false

+
console.log(0 === -0) //true
console.log(NaN === NaN) // false

console.log(Object.is(+0, -0), // false
        Object.is(NaN, NaN)) // true

Object.defineProperty(Object, 'is', {
    value: function(x, y) {
        if (x === y) {
            return x != 0 || 1 / x === 1 / y;
        }
    }
});

//2.object.assign()方法 ，用于对象的合并

// const target = { a: 1 };
// const source1 = { b: 2 };
// const source2 = { c: 3 };

// Object.assign(target, source1, source2);
// console.log(target) //{a:1,b:2,c:3}   已经被合并
// console.log(source1)
//Object.assign()方法第一个参数是目标对象，后面的参数都是源对象

// const target = { a: 1, b: 1 };
// const source1 = { b: 2, c: 2 };
// const source2 = { c: 3 };
// Object.assign(target, source1, source2);
// console.log(target)
//如果目标对象和源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性

//只有一个参数，object.assign()会直接返回该参数
const obj = { a: 1 }
console.log(Object.assign(obj) === obj) //true

//如果该参数不是对象，则会先转成对象，然后返回。
console.log(typeof Object.assign(2)) // "object"

//由于undefined和null无法转成对象，所以如果它们作为参数，就会报错。
// Object.assign(undefined) // 报错
// Object.assign(null) // 报错

//非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着，如果undefined和null不在首参数，就不会报错。
// let obj = { a: 1 };
// Object.assign(obj, undefined) === obj // true
// Object.assign(obj, null) === obj // true
// Object(true), // {[[PrimitiveValue]]: true}
// Object(10) //  {[[PrimitiveValue]]: 10}
// Object('abc') // {0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"}

//Object.assign()拷贝的属性是有限制的，只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
// Object.assign({ b: 'c' },
//         Object.defineProperty({}, 'invisible', {
//             enumerable: false,
//             value: 'hello'
//         })
//     ) // { b: 'c' }

//Object.assign()要拷贝的对象只有一个不可枚举属性invisible，这个属性并没有被拷贝进去。

//属性名为 Symbol 值的属性，也会被Object.assign()拷贝。
// Object.assign({ a: 'b' }, {
//     [Symbol('c')]: 'd'
// })

//浅拷贝  Object.assign()方法实行的是浅拷贝，而不是深拷贝
// const obj1 = { a: { b: 1 } };
// const obj2 = Object.assign({}, obj1);

// obj1.a.b = 4;
// console.log(obj2.a.b) // 4
//obj1的a属性的值是一个对象，Object.assign()拷贝得到的是这个对象的引用。这个对象的任何变化，都会反映到目标对象上面。

//同名属性的替换  
//对于这种嵌套的对象，一旦遇到同名属性，
//Object.assign()的处理方法是替换，而不是添加。

// const target = { a: { b: 'c', d: 'e' } }
// const source = { a: { b: 'hello' } }
// Object.assign(target, source)
// { a: { b: 'hello' } }
//target对象的a属性被source对象的a属性整个替换掉了，而不会得到{ a: { b: 'hello', d: 'e' } }的结果。

//数组的处理
//object.assign()可以用来处理数组，但是会把数组视为对象
Object.assign([1, 2, 3], [4, 5])
    //上面代码中，Object.assign()把数组视为属性名为 0、1、2 的对象，因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。

//取值函数的处理
//Object.assign()只能进行值得复制，如果要复制得值是一个取值函数，求值后再复制

const source = {
    get foo() { return 1 }
};
const target = {};

Object.assign(target, source)
    //{foo:1}
    //上面代码中，source对象的foo属性是一个取值函数，Object.assign()不会复制这个取值函数，只会拿到值以后，将这个值复制过去。

//其他用途
//（1）为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, { x, y })
    }
}
//通过Object.assign()方法，将x属性和y属性添加到Point类的对象实例。

//(2)为对象添加方法
// Object.assign(SomeClass.prototype, {
//     someMethod(arg1, arg2) {
//       ···
//     },
//     anotherMethod() {
//       ···
//     }
//   });

//   // 等同于下面的写法
//   SomeClass.prototype.someMethod = function (arg1, arg2) {
//     ···
//   };
//   SomeClass.prototype.anotherMethod = function () {
//     ···
//   };
//用了对象属性的简洁表示法，直接将两个函数放在大括号中，再使用assign()方法添加到SomeClass.prototype之中

//（克隆对象）
// function clone(origin) {
//     return Object.assign({}, origin);
// }
//上面代码将原始对象拷贝带一个空对象

//（4）合并多个对象

// const merge =
//   (target, ...sources) => Object.assign(target, ...sources);

//   const merge =
//   (...sources) => Object.assign({}, ...sources)

//为属性指定默认值
// const DEFAULTS = {
//     logLevel: 0,
//     outputFormat: 'html'
//   };

//   function processContent(options) {
//     options = Object.assign({}, DEFAULTS, options);
//     console.log(options);
//     // ...
//   }

// const DEFAULTS = {
//     url: {
//         host: 'example.com',
//         port: 7070
//     },
// };

// processContent({ url: { port: 8000 } })

// const DEFAULTS = {
//     url: {
//         host: 'example.com',
//         port: 7070
//     },
// };

// processContent({ url: { port: 8000 } })
// {
//   url: {port: 8000}
// }

//Object.getOwnPropertyDescriptors()
// const obj = {
//     foo: 123,
//     get bar() { return 'abc' }
// };
// Object.getOwnPropertyDescriptors(obj)
//Object.getOwnPropertyDescriptors()方法返回一个对象，所有原对象的属性名都是该对象的属性名，对应的属性值就是该属性的描述对象

//为了解决Object.assign()无法正确拷贝get属性和set属性的问题。
//const source = {
// set foo(value) {
//     console.log(value);
//   }
// };

// const target1 = {};
// Object.assign(target1, source);

// Object.getOwnPropertyDescriptor(target1, 'foo')

//_proto_属性
//__proto__属性（前后各两个下划线），用来读取或设置当前对象的原型对象（prototype）

// var obj = Object.create(someOtherObj);
// obj.method = function() { ... };

//__proto__调用的是Object.prototype.__proto__
// Object.defineProperty(Object.prototype, '__proto__', {
//     get() {
//       let _thisObj = Object(this);
//       return Object.getPrototypeOf(_thisObj);
//     },
//     set(proto) {
//       if (this === undefined || this === null) {
//         throw new TypeError();
//       }
//       if (!isObject(this)) {
//         return undefined;
//       }
//       if (!isObject(proto)) {
//         return undefined;
//       }
//       let status = Reflect.setPrototypeOf(this, proto);
//       if (!status) {
//         throw new TypeError();
//       }
//     },
//   });

//   function isObject(value) {
//     return Object(value) === value;
//   }

object.getPrototypeof({ _proto_: null })
    // null
    //如果一个对象本身部署了__proto__属性，该属性的值就是对象的原型。

//Object.setPrototypeOf() 方法
//Object.setPrototypeOf方法的作用与__proto__相同，用来设置一个对象的原型对象

// Object.setPrototypeOf(object, prototype)

// // 用法
// const o = Object.setPrototypeOf({}, null);

//等同于
// function setPrototypeOf(obj, proto) {
//     obj.__proto__ = proto;
//     return obj;
//   }

// let proto = {};
// let obj = { x: 10 };
// Object.setPrototypeOf(obj, proto);

// proto.y = 20;
// proto.z = 40;

// obj.x // 10
// obj.y // 20
// obj.z // 40
//将proto对象设为obj对象的原型，所以从obj对象可以读取proto对象的属性

//Object.setPrototypeOf(1, {}) === 1 // true
//Object.setPrototypeOf('foo', {}) === 'foo' // true
//Object.setPrototypeOf(true, {}) === true // true

//由于undefined和null无法转为对象，所以如果第一个参数是undefined或null，就会报错。
Object.setPrototypeOf(undefined, {})
    // TypeError: Object.setPrototypeOf called on null or undefined

//Object.getPrototypeOf()
//该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象

//Object.keys()，Object.values()，Object.entries()

//(1)object.keys()
//Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
// var obj = { foo: 'bar', baz: 42 };
// console.log(Object.keys(obj))
// ["foo", "baz"]

//Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。

let { keys, values, entries } = Object;
let obj = { a: 1, b: 2, c: 3 };

for (let key of keys(obj)) {
    console.log(key); // 'a', 'b', 'c'
}

for (let value of values(obj)) {
    console.log(value); // 1, 2, 3
}

for (let [key, value] of entries(obj)) {
    console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
}

//(2)object.values()
//返回一个数组，成员是参数对象自身的（不含继承）所有可遍历的
const obj = { foo: 'bar', baz: 42 };
object.values(obj)
    //["bar",42]

const obj = { 100: 'a', 2: 'b', 7: 'c' }
object.values(obj)
    //["b","c","a"]

//Object.values只返回对象自身的可遍历属性。
const obj = Object.create({}, { p: { value: 42 } });
Object.values(obj) // []

//Object.values会过滤属性名为 Symbol 值的属性。
Object.values({
    [Symbol()]: 123,
    foo: 'abc'
});
// ['abc']

//object.values方法的参数是一个字符串，会返回各个字符组成的一个数组
object.values('foo')
    //['f','o','o']

//上面代码中，字符串会先转成一个类似数组的对象。字符串的每个字符，就是该对象的一个属性。
//因此，Object.values返回每个属性的键值，就是各个字符组成的一个数组。

//如果参数不是对象，Object.values会先将其转为对象。由于数值和布尔值的包装对象，都不会为实例添加非继承的属性。所以，Object.values会返回空数组
Object.values(42) //[]
Object.values(obj) //[]

//object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的)的所有可遍历（enumerable)属性的键值对数组
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
    //[["foo","bar"],["baz",42]]

//除了返回值不一样，该方法行为与Object.values基本一致

//如果原对象的属性名是一个 Symbol 值，该属性会被忽略。
Object.entries({
    [Symbol()]: 123,
    foo: 'abc'
});
//[['foo','abc']]
//原对象有两个属性，Object.entries只输出属性名非 Symbol 值的属性。将来可能会有Reflect.ownEntries()方法，返回对象自身的所有属性。
let obj = { one: 1, two: 2 };
for (let [k, v] of Object.entries(obj)) {
    console.log(
        `${JSON.stringify(k)}: ${JSON.stringify(v)}`
    );
}
//"one":1
//"two":2

//Object.entries方法的另一个用处是，将对象转为真正的Map结构。
const obj = { foo: 'bar', baz: 42 };
const map = new Map(Object.entries(obj));
map // Map { foo: "bar", baz: 42 }

//自己实现Object.entries方法
// Generator函数的版本
function* entries(obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
}

// 非Generator函数的版本
function entries(obj) {
    let arr = [];
    for (let key of Object.keys(obj)) {
        arr.push([key, obj[key]]);
    }
    return arr;
}

//Object.fromEntries() 方法是Object.entries()逆操作，用于将一个键值对数组转为对象
Object.fromEntries([
        ['foo', 'bar'],
        ['baz', 42]
    ])
    //{'foo':'bar',baz:42}

// 该方法的主要目的，是将键值对的数据结构还原为对象，因此特别适合将 Map 结构转为对象。
// 例一
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

Object.fromEntries(entries)
    // { foo: "bar", baz: 42 }

// 例二
const map = new Map().set('foo', true).set('bar', false);
Object.fromEntries(map)
    // { foo: true, bar: false }

//另一个用处：是配合URLSearchParams对象，将查询字符串转为对象
Object.fromEntries(new URLSearchParams('foo=bar&baz=qux'))
    //{foo:"true",baz:"qux"}