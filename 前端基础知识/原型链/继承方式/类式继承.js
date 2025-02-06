function SuperClass() {
    this.superValue = true;
}
SuperClass.prototype.getSuperValue = function() {
    return this.superValue;
}

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getSuperValue = function() {
    return this.subValue;
}
var instance = new SubClass();

console.log(instance instanceof SuperClass) //true
console.log(instance instanceof SubClass) //true
console.log(SubClass instanceof SuperClass) //false

//console.log(SubClass.prototype instanceof SuperClass)  //true   函数.prototype链式属性