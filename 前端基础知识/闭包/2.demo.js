// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }

// console.log(new Date, i);

//如果期望代码的输出变成：5 -> 0,1,2,3,4，该怎么改造代码

// for (var i = 0; i < 5; i++) {
//     (function(j) {
//         setTimeout(function() {
//             console.log(new Date, j)
//         }, 1000)
//     })(i)
// }

//方法二
// for (var i = 0; i < 5; i++) {
//     setTimeout(function(j) {
//         console.log(new Date, j);
//     }, 1000, i)
// }
// console.log(new Date, i)


//方法三
var output = function(i) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000)
}

for (var i = 0; i < 5; i++) {
    output(i) //这里传过去的i值被复制了
}
console.log(new Date, i)