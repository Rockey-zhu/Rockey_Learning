//嵌套数组转一维数组
Array.prototype.sx_flat = function() {
    let arr = this
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

const testArr = [1, [2, 3, [4, 5]],
    [8, 9]
]
console.log(testArr.sx_flat())
    //[  1, 2, 3, 4,5, 8, 9]