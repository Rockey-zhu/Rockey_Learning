//用处 跟 entries相反，将键值对数组转成数组


Object.prototype.sx_fromEntries = function(arr) {
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        const [key, value] = arr[i]
        obj[key] = value
    }
    return obj
}
console.log(Object.sx_fromEntries([
    ['name', '林三新'],
    ['age', '22'],
    ['gender', '男']
]))

//// { name: '林三心', age: 22, gender: '男' }