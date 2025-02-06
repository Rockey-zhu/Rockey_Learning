//定义一个测试对象
const obj = {
    name: "林三新",
    age: "22",
    gender: "男"
}

//用处：将对象转成键值对数组
Object.prototype.sx_entries = function(obj) {
    const res = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && res.push([key, obj[key]])
    }
    return res
}
console.log(Object.sx_entries(obj))