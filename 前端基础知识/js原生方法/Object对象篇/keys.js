//用处：将对象的key转成一个数组合集
const obj = {
    name: "林三新",
    age: "22",
    gender: "男"
}

Object.prototype.sx_keys = function(obj) {
    const keys = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && keys.push(key)
    }
    return keys
}

console.log(Object.keys(obj))
    //['name','age','gender']