// pre: 前一项
// next: 下一项
// index: 当前索引
// arr: 数组本身
//测试数组
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

Array.prototype.sx_reduce = function(callback, ...args) {
    let start = 0,
        pre
    if (args.length) {
        pre = args[0]
    } else {
        pre = this[0]
        start = 1
    }
    for (i = start; i < this.length; i++) {
        pre = callback(pre, this[i], this)
    }
    return pre
}

//计算所有的num相加
const sum = players.sx_reduce((pre, next) => {
    return pre + next.num
}, 0)
console.log(sum)

//计算数组元素相加后的总和