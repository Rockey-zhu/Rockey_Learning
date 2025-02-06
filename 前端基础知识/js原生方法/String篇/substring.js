//功能与splice大致相同
//start>End :互换值

//string.substring(from, to)
// String.prototype.sx_sunstring = function(start = 0, end) {
//     start = start < 0 ? this.length + start : start
//     end = !end && end !== 0 ? this.length : end

//     if (start >= end)[start, end] = [end.start]
//     let str = ''
//     for (let i = start; i < end; i++) {
//         str += this[i]
//     }
//     return str
// }
// console.log(str.sx_sunstring(2))

var str = "hello world!"
console.log(str.substring(3) + "3333")
console.log(str.substring(3, 7))