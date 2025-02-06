//Es6新增  promise
new Promise(function(resolve, reject) {
    // 要做的事情...
});

//例如，如果我想分三次输出字符串，第一次间隔 1 秒，第二次间隔 4 秒，第三次间隔 3 秒：
// setTimeout(function(){
//     console.log("First");
//     setTimeout(() => {
//         console.log("Second")

//     }, timeout);
// },timeout
// )
// setTimeout(() => {
//     console.log("First");
//     setTimeout(() => {
//         console.log("Second");
//         setTimeout(() => {
//             console.log("Third");
//         }, 3000);
//     }, 4000);
// }, 1000);

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("First")
//         resolve()
//     }, 1000);
// }).then(function() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log("Second")
//             resolve()
//         }, 4000);
//     }).then(function() {
//         setTimeout(function() {
//             console.log("Third");
//         }, 3000);
//     })
// })

//promise “计时器” Promise 构造函数只有一个参数，是一个函数，这个函数在构造之后会直接被异步运行，所以我们称之为起始函数。
//起始函数包含两个参数 resolve 和 reject。 
//resolve 代表一切正常，reject 是出现异常时所调用的
// new Promise(function(resolve, reject) {
//     var a = 0;
//     var b = 1;
//     if (b == 0) reject("Divide zero");
//     else resolve(a / b)
// }).then(function(value) {
//     console.log("a/b=" + value);
// }).catch(function(err) {
//     console.log(err);
// }).finally(function() {
//     console.log("End")
// })

//.catch() 则是设定 Promise 的异常处理序列，
//.finally() 是在 Promise 执行的最后一定会执行的序列。 
//.then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列



// new Promise(function(resolve, reject) {
//     console.log(1111)
//     resolve(2222);
// }).then(value => {
//     console.log(value)
//     return 3333;
// }).then(value => {
//     console.log(value);
//     throw "An error";
// }).catch(err => {
//     console.log(err)
// })


//封装 Promise函数
function print(delay, message) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(message);
            resolve();
        }, delay);
    });
}

//回到最初问题，三次输出字符串，第一次间隔 1 秒，第二次间隔 4 秒，第三次间隔 3 秒  调用即可

print(1000, "First").then(function() {
    return print(4000, "Second");
}).then(function() {
    return print(3000, "Third")
})