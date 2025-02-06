const Choice = require("inquirer/lib/objects/choice");

//ES6 的class可以看作只是一个语法糖
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
}

//另一种方法
class Point {
    //...
}
typeof Point //"function"
Point === Point.prototype.constructor //true
    //方法与方法之间不需要逗号分隔，加了会报错

//类的实例
//生成类的实例的写法，与 ES5 完全一样，也是使用new命令
class Point {
    //...
}
//报错 
var point = Point(2, 3);
//正确
var point = new Point(2, 3)

//取值函数（getter）和存值函数（setter）
//与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为
{
    class Myclass {
        constructor() {
            //...
        }
        get prop() {
            return 'getter';
        }
        set prop(value) {
            console.log('setter:' + value);
        }
    }
    let inst = new Myclass();
    inst.prop = 123;
    // setter: 123
    inst.prop
        // 'getter'
}

//属性表达式
{
    let methodName = 'getArea';

    class Square {
        constructor(length) {
                //...
            }
            [methodName]() {
                //...
            }
    }
}

//class表达式
const Myclass = class Me {
    getClassName() {
        return Me.name;
    }
};
//me只能在class内部可用，指代当前类。在class外部，这个类只能用Myclass引用
{
    class Logger {
        constructor() {
            this.printName = this.printName.bind(this);
        }
    }

    //箭头函数
    class obj {
        constructor() {
            this.getThis = () => this;
        }
    }
    const myobj = new obj();
    myobj.getThis() === myobj //true
}

//分类的静态方法。可以被子类继承
class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Br extends Foo {}
Bar.classMethod() //'hello'

//*  私有属性添加    为class加了私有属性。方法是在属性名之前，使用#表示 */

//in 运算符
//try...catch 结构可以用来判断是否存在某个私有属性。
{
    class A {
        use(obj) {
            try {
                obj.#foo;
            } catch {
                //私有属性#foo不存在
            }
        }
    }

    const a = new A();
    A.use(a); //报错
}

//in运算符，使它也可以用来判断私有属性。
/*
class A{
    ues(obj){
        if(#foo in obj){
            //私有属性 #foo不存在
        }else{
            //私有属性#foo不存在
        }
    }
}
*/