//用处：A instanceOf B,判断A是否进过B的原型链

function instanceOf(father, child) {
    const fp = father.prototype
    var cp = child.__proto__

    while (cp) {
        if (cp === fp) {
            return true
        }
        cp = cp.__proto__
    }
    return false
}

function Person(name) {
    this.name = name
}

const sx = new Person('林三新')

//console.log(instanceOf(Person, sx))
console.log(instanceOf(Person, sx2))