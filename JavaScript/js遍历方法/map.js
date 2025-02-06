/*
map循环
有返回值，可以return出来
1.有兼容问题，与foreach一致有三个参数
2.callback必填
3.仅适用于数组
*/
{
    let arr = [
        { id: 1, value: 'yoyo' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' }
    ]
    let res = arr.map(function(item, index, ary) {
        return item.value = 'new';
    })
    console.log(res); //--> ["new", "new", "new"];  原数组拷贝了一份，并进行了修改
    console.log(arr); //-->[ {id: 1, value: "new"},{id: 2, value: "new"},{id: 3, value: "new"}]；  原数组并未发生变化
}