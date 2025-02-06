//item:遍历项
//index:遍历项的索引
// arr 数组本身
//测试数组
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

Array.prototype.sx_filter = function(callback) {
    const res = []
    for (i = 0; i < this.length; i++) {
        callback(this[i], i, this) && res.push(this[i])
    }
    return res
}
console.log(players.sx_filter(item => item.num <= 23))
    // [
    //     { name: '科比', num: 24 },
    //     { name: '詹姆斯', num: 23 },
    //     { name: '杜兰特', num: 35 }
    // ]