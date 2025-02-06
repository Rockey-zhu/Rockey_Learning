//原型被定义为给其它对象提供共享属性的对象，函数的实例可以共享原型上的属性和方法

//!!!原型链和作用域的区别： 原型链是查找对象上的属性，作用域链是查找当前上下文中的变量

// 对象独有：__proto__  和 constructor
// 函数独有: prototype  ***js中，函数也是对象 所以也用有__proto__ 和 constructor

//构造函数.prototype.constructor === 该构造函数本身
//函数创建的对象.__proto__===该函数.prototype


//方法 instanceof 判断一个对象的原型链上是否包含该构造函数的原型，经常用来判断对象是否为该构造函数的实例
// console.log(Object instanceof Object)

function instanceOf(obj, fn) {
    let proto = obj.__proto__;
    if (proto) {
        if (proto === fn.prototype) {
            return true;
        } else {
            return instanceOf(proto, fn)
        }
    } else {
        return false;
    }
}

function Dog() {}
let dog = new Dog();
console.log(instanceOf(dog, Dog), instanceOf(dog, Object)); //true true


//typeof  用来判断一个变量的类型    number undefined symbol string  function  boolean  object 七大类型
//typeof null === 'object'