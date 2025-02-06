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

Array.prototype.sx_some = function(callback) {
    let flag = false
    for (let i = 0; i < this.length; i++) {
        flag = callback(this[i], i, this)
    }
    return flag
}
console.log(players.sx_some(item => item.num >= 23)) // true
console.log(players.sx_some(item => item.num >= 50)) // false