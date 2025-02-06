// 用处 将数组用分隔符拼成字符串,分隔符默认为,

Array.prototype.sx_join = function(s = ',') {
    let str = ''
    for (let i = 0; i < this.length; i++) {
        str = i === 0 ? `${str}${this[i]}` : `${str}${s}${this[i]}`

    }
    return str
}

console.log([1, 2, 3].sx_join());
console.log([1, 2, 3].sx_join('*'));

// 1,2,3
// 1*2*3