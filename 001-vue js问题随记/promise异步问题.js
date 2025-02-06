// 回调函数异步  可能会漏执行

// function validata() {
//     console.log("wait for it");
//     setTimeout(function() {
//         console.log("result first");
//         setTimeout(function() {
//             console.log("result second");
//             setTimeout(function() {
//                 console.log("result third");
//                 setTimeout(function() {
//                     console.log("result fourth")
//                 }, 1000)
//             }, 1000)
//         }, 1000);
//     }, 1000);
// }
// validata();



//node.js 优化
var a = 0;

function log(data) {
    console.log("%d %s", ++a, data)
}

function async(arg, callback) {
    setTimeout(function() {
        console.log('result' + arg);
        callback();
    }, 1000)
}


function validatas() {
    console.log("Wait for it.....");
    async('first', function() {
        async('second', function() {
            async('third', function() {
                async('fourth', function() {})
            })
        })
    })
}
validatas();



//var promise1 = new Promise(function(resolve, reject) {}  );

//如果执行完成调用 resolve    如果失败调用 reject

// pending: 初始状态，既不是成功，也不是失败状态。
// fulfilled: 意味着操作成功完成。
// rejected: 意味着操作失败。

var promise1 = new Promise(function(resolve, reject) {
    //这里通常执行一个异步任务比如网络请求数据，成功返回调用resolve,失败reject
    resolve("执行成功")
})

promise1.then(function(s) {
    console.log("成功" + s);
}, function(s) {
    console.log("失败" + s);
})

//状态变化只能有 pending-> fulfilled 或者 pending-> rejected 两种方式，一旦状态发生变化则保持固定不变。