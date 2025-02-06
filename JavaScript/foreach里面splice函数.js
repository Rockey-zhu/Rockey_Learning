let arr = [1, 1, 2];
arr.forEach((item, index, arr) => {
    if (item == 1) {
        arr.splice(index, 1)
    }
})
console.log(arr) //[1,2]

//结果：循环之后打印 [1, 2]， 还有一个1无法删除

//原因分析：
//①第一次forEach循环，arr是[1, 1, 2]，index是0，item是1，if条件成立，使用splice删除了item1，arr变成[1, 2]
//②第二次forEach循环，arr是[1, 2]，index是1，item是2，if条件不成立，使用splice无法删除了第二个重复的1
//③原因是使用splice容易使数组的index乱序。。。

//用筛选的方法filter()方法筛选出符合条件的元素，去除不符合条件的元素

let a = [1, 1, 2]
a = a.filter(item => {
    return item != 1
})
console.log(a)


//filter()应该到数组对象中(去除对象数组num为0的产品)
let b = [{
        productId: 1,
        productName: '电视机',
        num: 20
    },
    {
        productId: 2,
        productName: '洗衣机',
        num: 0
    },
    {
        productId: 3,
        productName: '冰箱',
        num: 50
    },
    {
        productId: 4,
        productName: '空调',
        num: 0
    },
]
b = b.filter(item => {
    return item.num != 0
})
console.log(b)

/*
    [
        { productId: 1, productName: '电视机', num: 20 },
        { productId: 3, productName: '冰箱', num: 50 }
    ]
*/