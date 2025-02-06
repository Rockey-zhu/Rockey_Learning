/*
forEach()
最多可以接受三个参数的函数，ie8及以下不支持
1.有兼容问题(现在可忽略不计)
2.callback必填
3.仅适用于数组
4.不能break,可以放进try模块
5.无返回值
*/
{
    let arr = [
        { id: 1, value: 'joy' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]
    arr.forEach(function(item, key, arry) { //元素 ，索引 ， 数组本身
        console.log(item)
    })
}
console.log("----------------------")

//放进try模块
{
    function foreach(a, b, c) {
        try {
            a.forEach(b, c);
        } catch (e) {
            if (e === foreach.break) return;
            else throw e;
        }
    }
    foreach.break = new Error("StopIteration");
}


//如何遍历一个对象