class Person {
    //传入参数
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        return "我的名字是" + this.name + "，今年" + this.age + "岁";
    }
}

//object.assign方法来为对象动态增加方法
Object.assign(Person.prototype, {
    getName: function() {
        return this.name;
    },
    getAge: function() {
        return this.age;
    }
})

//继承
class Stuedent extends Person {
    //构造函数
    constructor(name, age, sub1, sub2) {
        //导入父类参数
        super(name, age);

        this.sub1 = sub1;
        this.sub2 = sub2;
    }
    score() {
        return this.sub1 + ":" + parseInt(Math.random() * 100 + 40) + "," + this.sub2 + ":" + parseInt(Math.random() * 100 + 40);
    }
}

// var xiaoming = new Person("小明", 15);
// console.log(xiaoming.show());
// console.log(xiaoming.getName);
var xioahua = new Stuedent("小花", 18, "英语", "语文");
console.log(xioahua.show());
console.log(xioahua.score());

//Object getPrototypeOf()
//从子类上获得父类
//判断一个类是否继承了另一个类
console.log(Object.getPrototypeOf(Stuedent) === Person); //true