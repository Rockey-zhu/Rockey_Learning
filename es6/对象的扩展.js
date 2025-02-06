// const foo = 'bar';
// const baz = { foo };
// console.log(baz)
//====>等同于 
// const baz = { foo: foo }
//上面代码中，变量foo直接写在大括号里面。这时，属性名就是变量名, 属性值就是变量值

// function f(x, y) {
//     return { x, y };
// }

// //等同于
// function f(x, y) {
//     return { x: x, y: y };
// }
// console.log(f(1, 2)) //object {x:1,y:2}

//属性可以简写外，方法也能简写
// const o = {
//     method() {
//         return "hello!";
//     }
// };

//等同于
// const o = {
//     method: function() {
//         return "hello!";
//     }
// }

// let birth = '2000/01/01';
// const person = {
//     name: '张三',
//     birth: birth,

//等同于hello:function(){console.log('我的名字是',this.name)}
//     hello() { console.log('我的名字是', this.name); }
// }
// console.log(person)

// function getPoint() {
//     const x = 1;
//     const y = 10;
//     return { x, y };
// }
// getPoint()
//{x:1,y:10}


//模块输出一组变量，就非常适合简写
// let ms = {};

// function getItem(key) {
//     return key in ms ? ms[key] : null;
// }

// function setItem(key, value) {
//     ms[key] = value;
// }

// function clear() {
//     ms = {};
// }
// module.exports = { getItem, setItem, clear };
// //等同于
// module.exports = {
//     getItem: getItem,
//     setItem: setItem,
//     clear: clear
// }

//赋值器：setter 和取值器(getter)
// const cart = {
//     _wheels: 4,

//     get wheels() {
//         return this._wheels;
//     },

//     set wheels(value) {
//         if (value < this._wheels) {
//             throw new Error('数值太小了!');
//         }
//         this._wheels = value;
//     }
// }

//简洁写法在打印对象时也很有用。
// let user = {
//     name: 'test'
// };

// let foo = {
//     bar: 'baz'
// };

// console.log(user, foo)
//     // {name: "test"} {bar: "baz"}
// console.log({ user, foo })
// {user: {name: "test"}, foo: {bar: "baz"}}


//属性名表达式
//JavaScript 定义对象的属性，有两种方法。
// obj.foo = true; //方法一:直接用标识符为属性名

// obj['a' + 'bc'] = 123; //方法二：用表达式作为属性名，这时要将表达式放在方括号之内

// var obj = {
//     foo: true,
//     abc: 123
// }; //es5定义

// let propKey = 'foo';

// let obj = {
//     [propKey]: true,
//     ['a' + 'bc']: 123
// }; //方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

// let lastWord = 'last word';

// const a = {
//     'first word': 'hello',
//     [lastWord]: 'world'
// };
// console.log(a['first word'], //"hello"
//         a[lastWord], //"world"
//         a['last word']) //"world"

// let obj = {
//     ['h' + 'ello']() {
//         return 'hi';
//     }
// };
// console.log(obj.hello()) //hi

// const foo = 'bar';
// const bar = 'abc';
// const baz = {
//     [foo] };  报错

// const foo = 'bar';
// const baz = {
//     [foo]: 'abc'
// }

//属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]

const keyA = { a: 1 };
const keyB = { b: 2 };

const myobject = {
    [keyA]: 'valueA',
    [keyB]: 'valueB'
};
console.log(myobject) //{ '[object Object]': 'valueB' }
    //[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。


//方法的name属性
const person = {
    sayName() {
        console.log("hello1!");
    },
};
console.log(person.sayName.name) //"sayName"
    //方法的name属性返回函数名

// const obj = {
//     get foo() {},
//     set foo(x) {}
// };
// obj.foo.name

// const descriptor = Object.getOwnPropertyDescriptor(obj, 'foo');

// console.log(descriptor.get.name, //"get foo"
//         descriptor.set.name) //"set foo"


//bind方法创造的函数，name属性返回bound加上原函数的名字；
//Function构造函数创造的函数，name属性返回anonymous。
// (new Function()).name // "anonymous"

// var doSomething = function() {
//     // ...
// };
// doSomething.bind().name // "bound doSomething"

//如果对象的方法是一个symbol值，那么name属性返回的是这个symbol值的描述
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1]() {},
    [key2]() {},
};
console.log(obj[key1].name, // "[description]"
        obj[key2].name) //""
    //key1对应的 Symbol 值有描述，key2没有。

//属性的可枚举性和遍历

//可枚举性
//Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。
// for...in循环：只遍历对象自身的和继承的可枚举的属性。
// Object.keys()：返回对象自身的所有可枚举的属性的键名。
// JSON.stringify()：只串行化对象自身的可枚举的属性。
// Object.assign()： 忽略enumerable为false的属性，只拷贝对象自身的可枚举的属性。


// （1）for...in

// for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

// （2）Object.keys(obj)

// Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

// （3）Object.getOwnPropertyNames(obj)

// Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

// （4）Object.getOwnPropertySymbols(obj)

// Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。

// （5）Reflect.ownKeys(obj)

// Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
//遵循规则一样’
// 首先遍历所有数值键，按照数值升序排列
// 其次遍历所有字符串键，按照加入时间升序排列
// 最后遍历所有Symbol键，按照加入时间升序排列

// Reflect.ownKeys({
//         [Symbol()]: 0,
//         b: 0,
//         10: 0,
//         2: 0,
//         a: 0
//     }) //['2', '10', 'b', 'a', Symbol()]
//数组的属性次序是这样的，首先是数值属性2和10，其次是字符串属性b和a，最后是 Symbol 属性。

//super关键字   this总是指向函数所在的当前对象
//              super 指向当前对象的原型对象

// const proto = {
//     foo: 'hello'
// };

// const obj = {
//     foo: 'world',
//     find() {
//         return super.foo;
//     }
// };

// Object.setPrototypeOf(obj, proto);
// console.loh(obj.find()) // "hello"

//super表示原型对象时，只能用在对象的方法之中

// const proto = {
//     x: 'hello',
//     foo() {
//         console.log(this.x);
//     },
// };

// const obj = {
//     x: 'world',
//     foo() {
//         super.foo();
//     }
// }

// Object.setPrototypeOf(obj, proto);

// obj.foo() // "world"
//super.foo指向原型对象proto的foo方法，但是绑定的this却还是当前对象obj，因此输出的就是world

//对象的扩展运算符
//解构赋值
// let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x, y, z)
// x 1  y 2  z{a:3,b:4}
// (1)解构赋值要求等号右边是一个对象；
// （2）解构赋值必须时最后一个参数，否则会报错
//     let { ...z } = null; // 运行时错误
//     let { ...z } = undefined; // 运行时错误
//     let { ...x, y, z } = someObject; // 句法错误
// let { x, ...y, ...z } = someObject; // 句法错误

// const o = Object.create({ x: 1, y: 2 });
// o.z = 3;

// let { x, ...newObj } = o;
// let { y, z } = newObj;
// console.log(x, y, z)    1 undefined 3

//解构赋值的一个用处，是扩展某个函数的参数，引入其他操作。

// function baseFunction({ a, b }) {
//   // ...
// }
// function wrapperFunction({ x, y, ...restConfig }) {
//   // 使用 x 和 y 参数进行操作
//   // 其余参数传给原始函数
//   return baseFunction(restConfig);
// }
//上面代码中，原始函数baseFunction接受a和b作为参数，函数wrapperFunction在baseFunction的基础上进行了扩展，能够接受多余的参数，并且保留原始函数的行为。


//对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。
let z = { a: 3, b: 4 }
let n = {...z }
console.log(n)
    //n  {a:3,b:4}

let foo = {...['a', 'b', 'c'] };
console.log(foo)
    //{0:"a",1:"b",2:"c"}

console.log({... {}, a: 1 }) //{a:1}
    //扩展运算符后面是一个空对象，则没有任何效果

console.log({...Object(1) }) //本身没属性，返回一个空对象

//上面代码中，扩展运算符后面是整数1，会自动转为数值的包装对象Number{1}。由于该对象没有自身属性，所以返回一个空对象。

console.log({... 'hello' })
    //扩展运算符后面是字符串，它会自动转成一个类似数组的对象，因此返回的不是空对象

// let aClone = {...a };
// let aClone = Object.assign({}, a);

//写法一
// const clone1 = {
//     _proto_: Object.getPrototypeOf(obj),
//     ...obj
// };
// 写法二
// const clone2 = Object.assign(
//     Object.create(Object.getPrototypeOf(obj)),
//     obj
// );

// 写法三
// const clone3 = Object.create(
//     Object.getPrototypeOf(obj),
//     Object.getOwnPropertyDescriptors(obj)
// )

//扩展运算符可以用于合并两个对象
// let ab = {...a, ...b };

//等同于
// let ab = Object.assign({}, a, b);

// let aWithOverrides = {...a, x: 1, y: 2 };
// 等同于
// let aWithOverrides = {...a, ... { x: 1, y: 2 } };
// 等同于
// let x = 1,
//     y = 2,
//     aWithOverrides = {...a, x, y };
// 等同于
// let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 });

// let newVersion = {
//     ...previousVersion,
//     name: 'New Name'
// }

// let aWithDefaults = { x: 1, y: 2, ...a };
// // 等同于
// let aWithDefaults = Object.assign({}, { x: 1, y: 2 }, a);
// // 等同于
// let aWithDefaults = Object.assign({ x: 1, y: 2 }, a);

// const obj = {
//     ...Object(x > 1 ? { a: 1 } : {}),
//     b: 2,
// };

// let a={
//     get x(){
//         throw new Error('not throw yet');
//     }
// }
// let aWithXGetter={...a};   //报错

// const firstName = (message &&
//     message.body &&
//     message.body.user &&
//     message.body.user.firstName) || 'default';
//firstName属性在对象的第四层，所以需要判断四次，每一层是否有值。
//  三元运算符?:也常用于判断对象是否存在。

// const fooInput = myForm.querySelector('input[name=foo]')
// const fooValue = fooInput ? fooInput.value : undefined
//必须先判断fooInput是否存在，才能读取fooInput.value。

// iterator.return ?.()
//断对象方法是否存在，如果存在就立即执行的例子。

//链判断运算符有三种用法。

// obj ? .prop // 对象属性
// obj ? .[expr] // 同上
// func ? .(...args) // 函数或对象方法的调用
//下面是obj?.[expr]用法的一个例子。

//Null判断运算符
// const headerText = response.settings.headerText || 'Hello, world!';
// const animationDuration = response.settings.animationDuration || 300;
// const showSplashScreen = response.settings.showSplashScreen || true;
//要属性的值为null或undefined，默认值就会生效，但是属性的值如果为空字符串或false或0，默认值也会生效。

// const headerText = response.settings.headerText ? ? 'Hello, world!';
// const animationDuration = response.settings.animationDuration ? ? 300;
// const showSplashScreen = response.settings.showSplashScreen ? ? true;
//只有运算符左侧的值为null或undefined时，才会返回右侧的值


//拓展：很适合判断函数参数是否赋值
// function Component(props) {
//     const enable = props.enabled ? ? true;
//     // …
// }

// function component(props) {
//     const enable = props.enabled ?? true;
// }

// function Component(props){
//     const enable =props.enabled?? true;
// }

//??有一个运算优先级问题，它与&&和||的优先级孰高孰低
//如果多个逻辑运算符一起使用，必须用括号表明优先级，否则会报错
//正确如下：
// (lhs && middle) ?? rhs;
// lhs && (middle ?? rhs);

// (lhs ?? middle) && rhs;
// lhs ?? (middle && rhs);

// (lhs || middle) ?? rhs;
// lhs || (middle ?? rhs);

// (lhs ?? middle) || rhs;
// lhs ?? (middle || rhs);