//一段数组，倒叙排列
var arr = [7, 3, 66, 34, 13, 41, 24, 4, 1, 10];
for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
    }
}
console.log(arr)


//冒泡排序 小的放左边 大的放右边
var arr_ = [9, 2, 33, 66, 55, 34, 1, 91, 88]; //定义一个数组；
for (var a = 1; a < arr_.length; a++) {
    for (var b = 0; b < arr_.length - a; b++) {
        if (arr_[b] > arr_[b + 1]) {
            var sort = arr_[b];
            arr_[b] = arr_[b + 1];
            arr_[b + 1] = sort;
        }
    }
}
console.log("升序:", arr_)