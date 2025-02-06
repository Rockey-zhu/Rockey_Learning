/*
some遍历
1.如果数组中检测到有一个元素满足，则整个表达式返回 true，且剩余的元素不会再进行检测
2.与字符串的indexOf方法类似用法，适用于数组。
3.ie8及以下不适用
*/
{
    var arr = [
        { name: "lisi", age: 18 }, // arr[0]
        {},
        { name: "wangwu", age: 19 },
        {}
    ];

    arr.some(item => {
        if (item.name === undefined) {
            console.log("arr[]为空！");
            return true;
        }
        console.log(item.name)
    })
}
