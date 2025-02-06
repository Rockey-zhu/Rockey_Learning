//class demo  定义
class Person {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18
    }
}
let me = new Person('iwillwen', 'man', 19)

console.log(me.isAdult()) //=> true

//继承