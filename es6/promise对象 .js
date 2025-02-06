//promise对象  是一个对象，从它可以获取异步操作的消息。
//异步消息：无需等待接收方返回消息
// const promise = new Promise(function(resolve, reject) {
// ... some code

//     if ( /* 异步操作成功 */ ) {
//         resolve(value);
//     } else {
//         reject(error);
//     }
// });

//特点：1.对象的状态不受外界影响。三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）
//2.一旦状态改变，就不会再变，任何时候都可以得到这个结果
//promise对象得状态改变，只有两种可能：从pending变为fulfilled和从pending变成rejected.
/*
    如何改变状态
    1.resolve（value) pending ====>fulfilled
    2.reject(reason)  pending ====>rejected
    3.抛出异常  pending =====>  rejected
*/

//缺点： 1.无法取消promise，一旦新建他就会立即执行，无法中途取消
//        2.如果不设置回调函数，Promise内部抛出得错误，不会反应到外部
//       3.当处于pending状态时，无法得知目前进展到哪一个阶段

//是一个可以异步操作的方案，一个构造函数  是一个对象用来封装一个异步操作并获取结果

//为啥要用？
//1.指定回调函数更加灵活
//2.支持链式调用

//用法
{
    //1.创建一个Promise对象
    const p = new Promise((resolve, reject) => {
        //2.执行异步操作

        setTimeout(() => {
            const time = Date.now(); //获取当前时间，如果时间偶数代表成功，否则失败
            //3.1如果成功，调用resolve(value)
            if (time % 2 == 0) {
                resolve("成功的数据，time=" + time);
            } else { //3.2如果失败，调用reject(reason)
                reject("失败！ time=" + time);
            }
        }, 1000)
    })

    //resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved），
    //在异步操作成功时调用，并将异步操作的结果，作为参数传递出去

    //reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
    //在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

    //then得两个参数，一个接受成功，一个接受失败
    //then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的
    p.then(
        value => { //接受得到成功的value数据, onResolved
            console.log("成功，" = value);
        },
        reason => { //接受失败的reason数据, onRejected  ,,throw 抛出异常也是reason
            console.log("失败，" + reason);
        }
    )
}

{
    //Promise实现
    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }
    timeout(2000).then((value) => {
        console.log(value)
    });
}


//promise_API
new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve("成功");
        reject("失败");
    }, 1000);
}).then( //接受成功回调
    value => {
        console.log('onResolved()1,' + value);
    }
).catch( //接受失败回调
    reason => {
        console.log("onRejected()1," + reason)
    }
)

//Promise.resolve()
//将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用
const jsPromise = Promise.resolve($.ajax('/whatever.join'));
//上面代码将jQuery生成得deferred对象，转为一个新的Promise对象。

//产生一个成功值为1的promise对象
const p1 = new Promise((resolve, reject) => {
        resolve(1);
    })
    //简单写法
const p2 = Promise.resolve(2);
p1.then(value => {
    console.log(value);
})
p2.then(value => {
    console.log(value)
})

//Promise.reject() § ⇧
const p3 = new Promise((resolve, reject) => {
        reject(3);
    })
    //简单写法
const p4 = Promise.reject(4);
p3.then(null, reason => {
    console.log(reason);
})

p4.catch(reason => {
    console.log(reason);
})

//Promise.all()
//将多个Peomise实例，包装成一个新的Promise实例
const pAll = Promise.all([p1, p2, p3]);

//const pAll=Promise.all([p1,p2]);
pAll.then(
    values => {
        console.log(values) //[1,2]
    },
    reason => {
        console.log("失败得reason是" + reason)
    }
)


//Promise.race() race比赛
//将多个 Promise 实例，包装成一个新的 Promise 实例
//也是返回一个新的promise，谁先完成，就先返回谁
const pRace = Promise.race([p1, p2, p3]);
pRace.then(
    value => {
        console.log("谁先完成就是谁" + value)
    },
    reason => {
        console.log(reason)
    }
)


//链式调用
new Promise((resolve, reject) => {
    resolve(1);
    //reject(1)
}).then(
    value => {
        console.log(value)
        return 2;
    },
    reason => {
        console.log(reason)
        return 3;
    }
).then(
    value => {
        console.log("value+" + value)
    },
    reason => {
        console.log("reason+" + reason)
    }
)

//异常穿透
new Promise((resolve, reject) => {
    //resolve(1);
    reject(1)
}).then(
    value => {
        console.log(value)
        return 2;
    }
).then(
    value => {
        console.log("value1+" + value)
    }
).then(
    value => {
        console.log("value2+" + value)
    }
).catch(reason => {
    console.log('onRejected1()', reason)
})