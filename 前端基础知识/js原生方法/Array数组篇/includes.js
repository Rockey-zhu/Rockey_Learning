// 用处 查找元素,查到返回true,反之返回false 可查找NaN

//测试数组
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

Array.prototype.sx_includes = function(value, start = 0) {
    if (start < 0) start = this.length + start
    const isNaN = Number.isNaN(value)
    for (let i = start; i < this.length; i++) {
        if (this[i] === value || (isNaN && Number.isNaN(this[i]))) {
            return true
        }
    }
    return false
}

console.log([1, 2, 3].sx_includes(2)) //true
console.log([1, 2, 3, NaN].sx_includes(NaN)) //true
console.log([1, 2, 3].sx_includes(1, 1)) //false