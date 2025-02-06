//用处：将对象的所有值转成数组合集

const obj = {
    name: "林三新",
    age: "22",
    gender: "男"
}
Object.prototype.sx_values = function(obj) {
    const values = []
    for (let key in obj) {
        obj.hasOwnProperty(key) && values.push(obj[key])
    }
    return values
}
console.log(Object.sx_values(obj))

//[ '林三新', '22', '男' ]