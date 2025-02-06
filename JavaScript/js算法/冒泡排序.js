/*
1、比较相邻的两个元素，如果前一个比后一个大，则交换位置。
2、比较完第一轮的时候，最后一个元素是最大的元素。
3、这时候最后一个元素是最大的，所以最后一个元素就不需要参与比较大小。
*/
{
    function bSort(arr) {
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - 1 - i; j++) {
                //相邻元素两两对比，元素交换，大的元素交换到后面
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
}
myArr = [20, 18, 27, 19, 35];
console.log(bSort(myArr))