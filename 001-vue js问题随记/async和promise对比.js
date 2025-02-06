//async/await是异步代码的新方式，以前的方法有回调函数和Promise。 async/await是基于Promise实现的，它不能用于普通的回填函数。
//async / await与Promise一样，是非阻塞的。 async / await使得异步代码

//Promise是一个对象，对象和函数的区别就是对象可以保存状态，函数不可以（闭包除外）
// 并未剥夺函数return的能力，因此无需层层传递callback，进行回调获取数据
// 代码风格，容易理解，便于维护
// 多个异步等待合并便于解决
// Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，原型上有then、catch等同样很眼熟的方法。

Promise.resolve().then(data => { //promise
    console.log(data)
    return "aaa"
})

async function foo() {
    console.log(await getJSON);
    return "aaa"
}
foo();

//函数前面多了一个async关键字。await关键字只能用于async定于的函数内。
//async函数会隐式地返回一个Promise, 该promise的resolve值就是return的值。示例中resolve的值就是字符串"aaa"



//async  await 必须同时出现  以下是错误的
function foo() {
    const syncFn = () => {
        return await Promise.resolve('foo');
    };
    console.log(syncFn());
}

function bar() {
    const syncFn = function() {
        return await Promise.resolve('bar');
    };
    console.log(syncFn());
}


//使用async函数可以让代码简洁很多，不需要想Promise一样需要then,不需要写匿名函数处理Promise的resolve的值，
//也不需要定义多余的data变量，还避免了嵌套代码。

//async/await 让 try/catch可以同时处理同步和异步的错误。
//在下面的示例中，try/catch不能处理JSON.parse的错误，因为它在Promise中,我们需要使用.catch,这样的错误会显得代码非常的冗余。

const makeRequest = () => {
    try {
        getJSON().then(result => {
            //JSON 可能会出错

            const data = JSON.parse(result)
            console.log(data);
        })
    } catch (err) {
        console.log(err);
    }
}



const makeRequest = async() => {
    try {
        const data = JSON.parse(await getJSON())
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}