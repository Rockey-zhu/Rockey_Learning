//apply 通过 apply() 方法，您能够编写用于不同对象的方法
//apply() 方法与 call() 方法非常相似


// call() 和 apply() 之间的区别
// 不同之处是：

// call() 方法分别接受参数。

// apply() 方法接受数组形式的参数。

// 如果要使用数组而不是参数列表，则 apply() 方法非常方便。

Function.prototype.sx_apply = function(obj, args) {
    obj = obj || window
        // Symbol是唯一的，防止重名key
    const fn = Symbol()
    obj[fn] = this

    //执行，返回执行值
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
testobj.testFn.sx_apply(testobj2, [22])