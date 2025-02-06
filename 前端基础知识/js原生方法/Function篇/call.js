// call() 方法是预定义的 JavaScript 方法。

// 它可以用来调用所有者对象作为参数的方法。

// 通过 call()，您能够使用属于另一个对象的方法。

Function.prototype.sx_call = function(obj, ...args) {
    obj = obj || window

    //Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this

    //执行，范围执行值
    return obj[fn](...args)
}

const testobj = {
    name: '林三新',
    testFn(age) {
        console.log(`${this.name}${age}岁了`)
    }
}
const testobj2 = {
    name: 'sunshine_lin'
}
testobj.testFn.sx_call(testobj2, 22)
    //sunshine_lin22岁了


var person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ",生活在" + city + ",属于" + country;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates"
}
console.log(person.fullName.call(person1, "Seattle", "USA"));