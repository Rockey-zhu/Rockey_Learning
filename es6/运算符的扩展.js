//1.指数运算符
//ES2016 新增了一个指数运算符（**）
console.log(2 ** 2) // 4
console.log(2 ** 3) // 8

//这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。
console.log(2 ** 3 ** 2) //==>相当于2**(3**2)     512

//指数运算符可以与等号相结合，形成一个新的赋值运算符（**=）
let a = 1.5;
console.log(a **= 2);
//等同于a=a*a;  //2.25

let b = 4;
console.log(b **= 3);
//等同于b=b*b*b    ==> 64

//2.链判断运算符
// 错误的写法
const firstName = message.body.user.firstName || 'default';

// 正确的写法
const firstName = (message &&
    message.body &&
    message.body.user &&
    message.body.user.firstName) || 'default';

//上面例子中，firstName属性在对象的第四层，所以需要判断四次，每一层是否有值。
//三元运算符?:也常用于判断对象是否存在。  

const fooInput = myForm.querySelector('input[name=foo]')
const fooValue = fooInput ? fooInput.value : undefined
    //首先判断fooinput是否存在，才能读取fooInput.value

//==》简化
//const firstName = message ?.body ?.user ?.firstName || 'default';
//const fooValue = myForm.querySelector('input[name=foo]') ? .value
//上面代码使用了?.运算符，左侧的对象是否为null或undefined。如果是的，就不再往下运算，而是返回undefined

//下面判断对象是否存在，如果存在就立刻执行
//iterator.return ? .()

//对于那些可能没有实现的方法，这个运算符尤其有用
// if (myForm.checkValidity ? .() === false) {
//     // 表单校验失败
//     return;
// }

//链判断运算符?.有三种写法。

// obj?.prop // 对象属性是否存在
// obj?.[expr] // 同上
// func?.(...args) // 函数或对象方法是否存在

// a?.b
// // 等同于
// a == null ? undefined : a.b

// a?.[x]
// // 等同于
// a == null ? undefined : a[x]

// a?.b()
// // 等同于
// a == null ? undefined : a.b()

// a?.()
// // 等同于
// a == null ? undefined : a()

//（1）短路机制
//本质上，?.运算符相当于一种短路机制，只要不满足条件，就不再往下执行。
//a.?[++x]
//等同于
//a == null ? undefined : a[++x]
//如果a是undefined或null，那么x不会进行递增运算。也就是说，链判断运算符一旦为真，右侧的表达式就不再求值。

//(2)括号的影响
//如果属性链有圆括号，链判断运算符对圆括号外部没有影响，只对圆括号内部有影响。
//(a ? .b).c
//等价于
//(a == null ? undefined : a.b).c
//上述代码中 ?.对圆括号外部没有影响，不管a对象是否存在，圆括号后面的.c总是会执行。

//（3）报错场合
//以下写法是禁止的，会报错。

// 构造函数
// new a?.()
// new a?.b()

// // 链判断运算符的右侧有模板字符串
// a?.`{b}`
// a?.b`{c}`

// // 链判断运算符的左侧是 super
// super?.()
// super?.foo

// // 链运算符用于赋值运算符左侧
// a?.b = c

//（4）右侧不得为十进制数值
// 为了保证兼容以前的代码，允许foo?.3:0被解析成foo ? .3 : 0，因此规定如果?.后面紧跟一个十进制数字，那么?.不再被看成是一个完整的运算符，
// 而会按照三元运算符进行处理，也就是说
// ，那个小数点会归属于后面的十进制数字，形成一个小数。

//3.null判断运算符
//读取对象属性的时候，如果某个属性的值是null或undefined，有时候需要为它们指定默认值。常见做法是通过||运算符指定默认值。

//ES2020 引入了一个新的 Null 判断运算符??。它的行为类似||，但是只有运算符左侧的值为null或undefined时，才会返回右侧的值
// const headerText = response.settings.headerText ?? 'Hello, world!';
// const animationDuration = response.settings.animationDuration ?? 300;
// const showSplashScreen = response.settings.showSplashScreen ?? true;
//上面代码中，默认值只有在左侧属性值为null或undefined时，才会生效。
//如果response.settings是null或undefined，或者response.settings.animationDuration是null或undefined，就会返回默认值300。

//4.逻辑赋值运算符
//三个新的逻辑赋值运算符（logical assignment operators），将逻辑运算符与赋值运算符进行结合。
// 或赋值运算符
// x ||= y
// // 等同于
// x || (x = y)

// // 与赋值运算符
// x &&= y
// // 等同于
// x && (x = y)

// // Null 赋值运算符
// x ??= y
// // 等同于
// x ?? (x = y)

//它们的一个用途是，为变量或属性设置默认值。

// 老的写法
//user.id = user.id || 1;

// 新的写法
//user.id || = 1;