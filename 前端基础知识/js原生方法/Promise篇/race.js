//接收一个Promise数组，数组中如果有非Promise项,则此项当做成功
//哪个Promise最快得到结果,就返回那个结果，无论成功失败

function race(promises) {
    return new MyPromise((resolve, reject) => {
        promises.forEach(promise => {
            if (promise instanceof MyPromise) {
                promise,
                then(res => {
                    resolve(res)
                }, err => {
                    reject(err)
                })
            }
            else {
                resolve(promise)
            }
        })
    })
}