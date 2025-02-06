//1.forEach

//.item 遍历项 
// index 遍历项的索引
// arr:数组本身

//测试数组
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

Array.prototype.sx_forEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}
players.sx_forEach((item, index, arr) => {
    console.log(item, index)
})

// { name: '科比', num: 24 } 0
// { name: '詹姆斯', num: 23 } 1
// { name: '保罗', num: 3 } 2
// { name: '威少', num: 0 } 3
// { name: '杜兰特', num: 35 } 4