var arr = [7, 3, 3, 7, 12, 13, 41, 15, 24, 4, 12, 41];

var newArr = [];
for (var i = 0; i < arr.length; i++) {
    var bool = true;
    for (var j = 0; j < newArr.length; j++) {
        if (newArr[j] == arr[i]) {
            bool = false;
            break;
        }
    }
    if (bool == true) {
        newArr[newArr.length] = arr[i]
    }
}
console.log("原先数组:" + arr);
console.log(newArr)




//set去重   使用Array.from转成数组
let item = Array.from(new Set(arr))
console.log(item)

//数组去重方法(使用...扩展运算符)
let arr_ = [...new Set(arr)];
console.log(arr_)