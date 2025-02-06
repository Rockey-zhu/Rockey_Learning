function Person(name, age) {
    this.name = name,
        this.age = age,

        this.sex = 'male';
}
Person.prototype.isHandsome = true;

Person.prototype.sayName = function() {
    console.log(`Hello,my name is ${this.name}`);

}


//new 一个对象 继承父 Person属性
let handsomeBoy = new Person('zhp', 25);

console.log(handsomeBoy.name) //Nealyang
console.log(handsomeBoy.sex) //male
console.log(handsomeBoy.isHandsome) //true
console.log(handsomeBoy.age) //25
handsomeBoy.sayName(); //Hello,my name is Nealyang

//访问到 Person 构造函数里的属性
//访问到 Person.prototype 中的属性