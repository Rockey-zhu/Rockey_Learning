/*
filter()遍历数组，过滤出符合条件的元素并返回新数组。
1.ie8及以下有兼容问题（现在可忽略不计）
2.filter() 不会对空数组进行检测
3.filter() 不会改变原始数组

filter遍历会过滤掉null 空值 和undefined
filter会将一个稀疏数组返回成一个稠密数组
*/
{
    var arr = [
        { id: 1, value: 'yoyo' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]

    //[{id: 1, value: "yoyo"},{id: 2, value: "cher"},{id: 3, value: "nothing"}]
    // console.log(arr.filter(item => item.value))

    //[{id: 1, value: "new"},{id: 2, value: "new"},{id: 3, value: "new"}]
    //console.log(arr.filter(item => item.value = 'new'))
    //value值全部被替换成了new

    const rest = arr.filter(function(value, index, arr) {
        return value.id > 1;
    })
    const rest = arr.filter((value, index, arr) => {
            return value.id > 1;
        })
        //console.log(rest);

    let a1 = [1, 2, 11, 12, 13];
    let b1 = [3, 5, 11, 1, 13];
}

{
    let a1 = [1, null, , undefined, 2, 3, , 4];
    let b = a1.filter(function(value) {
        return value
    });
    console.log(b); //[1,2,3,4]

}