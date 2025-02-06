//Promise 对象的构造器（constructor）语法如下：
{
    let Promise =new Promise (function(resolve,reject){
    //(生产者代码，"歌手")
});
}

let Promise =new Promise(function(resolve,reject){
    //当promise被构造完成时，自动执行此函数

    //1秒后发生工作已经被完成的信号，被带有结果"done"
    setTimeout(()=>resolve("done"),1000);
})

//executor只能调用一个resolve或一个reject。任何状态的更改都是最终的。
let Promise =new Promise(function(resolve,reject){
    resolve("done");

    reject(new Error("..."));//被忽略
    setTimeout(()=>resolve("..."));//被忽略
})

//Resolve/reject可以立即进行
let Promise =new Promise(function(resolve,reject){
    //不花时间去做这项工作
    resolve(123);//立即给出结果：123
});

//消费者：then ，catch,finally
//Promise对象充当 executor（“生产者代码”或“歌手”）和消费函数（“粉丝”）之间的连接


//.then
Promise.then(
    function(result){ /* handle a successful result */ },
    function(error){ /* handle an error */ }
)
//.then 的第一个参数是一个函数，该函数将在 promise resolved 后运行并接收结果。
//.then 的第二个参数也是一个函数，该函数将在 promise rejected 后运行并接收 error。

let Promise =new Promise(function(resolve,reject){
    setTimeout(()=>resolve("done!"),1000)
});

//resolve 运行 .then中第一个函数
Promise.then(
    result=>alert(result), //1秒后显示"done!"
    error=>alert(error)//不换行
);

第一个函数被运行了
//在reject的情况下，运行第二个：
let promise=new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error("Whoops!")),1000);
});

//reject 运行 .then中第二个函数
promise.then(
    result=>alert(result),//不运行
    error=>alert(error) //1秒后显示"Error:Whoops!"
);

//如果我们只对成功完成的情况感兴趣，那么我们可以只为.then提供一个函数参数：
let promise=new Promise(resolve=>{
    setTimeout(()=>resolve("done!"),1000);
});
promise.then(
    result=>alert(result),//1秒显示“Error:Whoops!”
);//1 秒后显示 "done!"


//catch
//可以使用null作为第一个参数:.then(null,errorHandlingFunction)
let promise =new Promise((resolve,reject)=>{
    setTimeout(()=>reject(new Error("Whoops!")),1000);
})
// .catch(f) 与 promise.then(null, f) 一样
promise.catch(alert); // 1 秒后显示 "Error: Whoops!"

//.catch(f)调用是 .then(null,f)的完全的模拟，他只是一个简写形式

//