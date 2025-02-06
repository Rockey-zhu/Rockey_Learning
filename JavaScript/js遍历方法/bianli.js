/*
for循环
1.能被break
2.会改变原数据
3.对象及数组都适用
*/

{
    let arr = [
        { id: 1, value: 'yoy' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' },
    ]
    for (let j = 0; j < arr.length; j++) {
        console.log(j, arr[j])
    }
}


/*
foreach()
最多可以接受三个参数的函数，ie8以下不支持
1.有兼容问题(现在可忽略不记)
2.callback必填
3.仅适用数组
4.不能break，可以放进try模块
5.无返回值
*/
console.log("---------------------------------")

{

    let arr = [
        { id: 1, value: 'yoy' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]
    arr.forEach(function(item, key, arry) { //元素 ，索引 ， 数组本身
        console.log(item)
    })
}

console.log("---------------------------------")

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
    foreach.break = new Error("stopIteration");
}
console.log("---------------------------------")

/*
map循环
有返回值，可以return出来
1.有兼容问题(现在可忽略不计)，与foreach一致有三个参数
2.callback(回调函数)必填
3.仅适用数组
*/

{
    let arr = [
        { id: 1, value: 'yoyo' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]
    let res = arr.map(function(item, index, ary) {
        // return item.value = 'new';
    })


    console.log(res); //--> ["new", "new", "new"];  原数组拷贝了一份，并进行了修改
    console.log(arr); //-->[ {id: 1, value: "new"},{id: 2, value: "new"},{id: 3, value: "new"}]；  原数组并未发生变化
}

console.log("---------------------------")

/*
filter()遍历数组，过滤出符合条件的元素并返回新数组。
1.ie8及以下有兼容问题(现在可以忽略不计)
2.filter()不会对空数组进行检测
3.filter()不会改变原数组
*/
{
    var arr = [
        { id: 1, value: 'yoyo' },
        { id: 2, value: "cher" },
        { id: 3, value: "nothing" }
    ]

    //[{id: 1, value: "yoyo"},{id: 2, value: "cher"},{id: 3, value: "nothing"}]
    console.log(arr.filter(item => item.value = 'new'))
}
console.log("------------------------------")

/*
for of 为es6的遍历方法
1.有兼容问题
2.可以break,continue,return
3.相比较 for 循环，写法便捷
4.支持类似数组的对象，甚至字符串
5.不适用于处理原有的原生对象
*/
{
    let arr = [
        { id: 1, value: 'yoyo' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]
    let str = 'fdsagrewhfdadfwre'
    for (let item of str) {
        console.log(item) //f d s a g r e w h f d a d f w r e
    }
    for (let item of arr) {
        console.log(item) ///{id: 1, value: "yoyo"}, {id: 2, value: "cher"}, {id: 3, value: "nothing"}
    }
}
console.log("----------------")

/*
some遍历
1.如果数组中检测到有一个元素满足，则整个表达式返回true，且剩余的元素不会再进行检测
2.与字符串的indexOf方法类似用法，适用于数组。
3.ie8及以下不适用
*/
{
    var arr = [
        { name: "lisi", age: 18 }, //arr[0],
        {},
        { name: "wangwu", age: 19 },
        {}
    ];
    arr.some(item => {
        if (item.name === undefined) {
            console.log("arr[]为空");
            return true;
        }
        console.log(item.name)
    })
}

/*
reduce
1.对于空数组是不会执行回调函数的
2.ie8及以下不适用
3.reduce接受一个函数，函数有四个参数，分别是：上一次的值，当前值，当前值的索引值，数组
*/
{
    [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, arry) {
        console.log(previousValue + currentValue)
        return previousValue + currentValue
    });
}
console.log("--------------")

/*
find
1.当数组中的元素在测试条件时返回true时，find()返回符合条件的元素，之后的值不会再调用执行函数
2.IE11及更早版本不在支持find()方法
3.如果没有符合条件的元素返回undefined
4.对于空数组，函数是不会执行的
5.并没有改变数组的原始值
*/

/*
1.当数组中的元素在测试条件时返回true时，findIndex()返回符合条件的元素的索引位置，之后的值不会再调用执行函数
2.IE 11 及更早版本不支持 find() 方法
3.如果没有符合条件的元素返回 -1
4.findIndex() 对于空数组，函数是不会执行的。
5.findIndex() 并没有改变数组的原始值
*/

/*
entries(),keys()和values()
1.IE 11及更早版本不支持 find()方法
2.keys返回的是数组的index,不是键值对的key
3.values返回的是每项值
4.entries返回的是index与值
*/

{
    let arr = [
        { id: 9, value: 'yoyo' },
        { id: 2, value: 'zhp' },
        { id: 3, value: 'nothing' },
    ]
    for (let index of arr.keys()) {
        console.log(index);
    }
    //0
    //1
    //2
    for (let elem of arr.values()) {
        console.log(elem);
    }
    // {id: 9, value: "yoyo"}
    // {id: 2, value: "cher"}
    // {id: 3, value: "nothing"}
    for (let [index, elem] of arr.entries()) {
        console.log(index, elem)
    }
    //0 {id: 9, value: "yoyo"}
    //1 {id:2,value:'cher'}
    //2 {id:3,value:'nothing'}
}

/*
for in 专门为object遍历的方法
*/
{
    let obj = {
        id: 1,
        value: 'yoyo',
        target: 'js'
    }
    for (let item in obj) {
        console.log(item)
    }
}

/*
Object.keys(),Object.values(),Object.entries() 
这三个方法可以分别得到键名，值，重组为数组
*/

