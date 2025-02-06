//1 Class 类可以看作是构造函数的语法糖



//3 使用static关键字，作为静态方法(静态方法，只能通过类调用，实例不能调用)

class Foo {
    static classMethod() {
        return "hello";
    }
}
Foo.classMethod(); //'hello'

//4  实例属性的简写方法
class Foo {
    bar = "hello";
    baz = "world";
}
//等同于
class Foo {
    constructor() {
        this.bar = "hello";
        this.baz = "world"
    }
}

//5  extends 关键字，底层也是利用的寄生组合式继承
class Parent {
    age = "age"
    getName() {
        console.log(this.name)
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(age);
        this.name = name
    }
}

let child = new Child("li", 16)
child.getName(); //li