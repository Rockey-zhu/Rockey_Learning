// 用处 填充数组
// initValue 填充的值
// start 开始填充索引 默认0
// end 结束填充索引 默认length

//测试数组
const players = [
    { name: '科比', num: 24 },
    { name: '詹姆斯', num: 23 },
    { name: '保罗', num: 3 },
    { name: '威少', num: 0 },
    { name: '杜兰特', num: 35 }
]

Array.prototype.sx_fill = function(value, start = 0, end) {
    end = end || this.length
    for (let i = start; i < end; i++) {
        this[i] = value
    }
    return this
}

console.log(players.sx_fill('朱海鹏', 1, 4))
    //[
    //     { name: '科比', num: 24 },
    //     '朱海鹏',
    //     '朱海鹏',
    //     '朱海鹏',
    //     { name: '杜兰特', num: 35 }
    //   ]
    //掐头留尾