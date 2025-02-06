//参数代表含义
//start:开始截取的字符索引(包含此字符)
//end:结束截取的字符索引(不包含此字符)注意
//start>end:返回空字符串
//start<0:start=数组长度+start

// String.prototype.sx_slice = function(start = 0, end) {
//     start = start < 0 ? this.length + start : start
//     end = !end && end !== 0 ? this.length : end

//     if (start >= end) return ''
//     let str = ''
//     for (let i = start; i < end; i++) {
//         str += this[i]
//     }

//     return str
// }

// console.log(str.sx_slice(2))

var str = "Hello happy world!"
console.log(str.slice(6))
console.log(str.slice(6, 11))