Promise.resolve()
    .then(function() {
        console.log("promise0")
    })
    .then(function() {
        console.log("promise5");
    });
setTimeout(() => {
    console.log("time1");
    Promise.resolve().then(function() {
        console.log("promise2");
    });
    Promise.resolve().then(function() {
        console.log("promise4")
    })
}, 0);
setTimeout(() => {
    console.log("time2");
    Promise.resolve()
        .then(function() {
            console.log("promise3");
        })
}, 0);
Promise.resolve().then(function() {
    console.log("promise1")
});
console.log("start");

// start
// promise0
// promise1
// promise5
// time1
// promise2
// promise4
// time2
// promise3

// 宏任务是一个个执行，执行一个宏任务，然后就把在任务队列中的所有微任务都执行完，
// 再执行下一个宏任务，再执行所有微任务，依次类推