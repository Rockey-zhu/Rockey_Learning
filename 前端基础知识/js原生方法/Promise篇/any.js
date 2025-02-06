// any 与 all 相反
//接收一个Promise数组，数组中如果有非Promise项，则此项当做成功
//如果有一个Promise成功，则返回这个成功结果
//如果所有Promise都失败，则报错

function any(promises) {
    return new Promise((resolve, reject) => {
        let count = 0
        promises.forEach((promise) => {
            promise.then(val => {
                resolve(val)
            }, err => {
                count++
                if (count === promise.length) {
                    reject(new AggregateError('All promises were rejected'))
                }
            })
        })
    })
}