// new Promise((resolve, reject) => {
//     doxxx(function(err) {
//         if (err)
//             reject();
//         else
//             resolve()
//     });
// }).then(() => {
//     doyyy();
// })


// new Promise((resolve, reject) => {
//     console.log("promise->hello,world.this is promise." + new Date());
//     setTimeout(() => {
//         resolve("hello,world.this is promise." + new Date())
//     }, 5000)
// }).then((value) => {
//     console.log("then  ->" + value);
// });
//then中的函数始终都会在resolve()执行之后才开始执行


console.log("------------------------------------------------------")
    //这里还有一个reject函数，就是当Promise内部执行出现异常，我们才会调用
    // new Promise((resolve, reject) => {
    //     console.log("promise->hello,world.this is promise." + new Date());
    //     setTimeout(() => {
    //         resolve("hello,world.this is promise." + new Date())
    //     }, 5000)
    // }).then((value) => {
    //     console.log("resolve  ->" + value);
    // }, (value) => {
    //     console.log("reject ->" + value);
    // });



//异步最好写法
// new Promise(resolve => {
//     console.log("promise 1");
//     setTimeout(() => {
//         resolve();
//     }, 1000)
// }).then(() => {
//     return new Promise(resolve => {
//         console.log("promise 2");
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }).then(() => {
//     return new Promise(resolve => {
//         console.log("promise 3");
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
// })



//Promise.all().then()的用法，
//all()表示所有的操作均执行完成，再执行then()中的方法。
//而all()中的函数，不是顺序执行，而是同时执行。
const createPromise = (id) =>
    new Promise(resolve =>
        setTimeout(() => {
            console.log("promise->" + id + ":" + new Date());
            resolve();
        }, 1000)
    )
var tasks = [createPromise(1), createPromise(2), createPromise(3)];
console.log(tasks);
Promise.all(tasks).then(() => console.log("all done."));