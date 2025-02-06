//接收一个Promise数组，数组中如有非Promsie项，则此项当做成功
//把每一个Promise的结果,集合成数组，返回

function allSettled(promises) {
    return new Promise((resolve, reject) => {
        const res = []
        let count = 0
        const addData = (status, value, i) => {
            res[i] = {
                status,
                value
            }
            count++
            if (count === promises.length) {
                resolve(res)
            }
        }
        promises.forEach((promise, i) => {
            if (promise instanceof MyPromise) {
                promise.then(res => {
                    addData('fulfilled', res, i)
                }, err => {
                    addData('rejected', err, i)
                })
            } else {
                addData('fulfilled', promise, i)
            }
        })
    })
}