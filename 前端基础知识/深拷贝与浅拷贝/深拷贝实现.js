//数组的深拷贝  可以使用 slice()  concat 解决上面问题

// *slice *
// var arr = ['a', 'b', 'c'];
// console.log(arr)      // ["a", "b", "c"]
// var arrCopy = arr.splice(0)
// arrCopy[0] = 'test' 
// console.log(arrCopy)  // ["test", "b", "c"]

// *concat*

var arr = ['a', 'b', 'c'];
var arrCopy = arr.concat();
arrCopy[0] = 'test'
console.log(arr) //[ 'a', 'b', 'c' ]
console.log(arrCopy) //[ 'test', 'b', 'c' ]


//slice和concat这两个方法，仅适用于对不包含引用对象的一维数组的深拷贝


// 注（补充点）：

// arrayObj.slice(start, [end]) 该方法返回一个 Array 对象，其中包含了 arrayObj 的指定部分。不会改变原数组
// arrayObj.concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
// 其实也就是下面实现的方式，但还是用上面的方法来实现比较简单高效些

function deepCopy(arr1, arr2) {
    for (var i = 0; i < arr1.length; ++i) {
        arr2[i] = arr1[i];
    }
}