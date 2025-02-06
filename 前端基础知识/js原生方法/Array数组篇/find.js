// item 遍历项
// index 遍历项的索引
// arr 数组本身

//测试数组
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

Array.prototype.sx_find = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}

console.log(players.sx_find(item => item.name === '科比')) // { name: '科比', num: 24 }
console.log(players.sx_find(item => item.name === '安东尼')) //undefinded