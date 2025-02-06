function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            for (let j = i - 1; j >= 0; j--) {
                if (array[j] > key) {
                    // array[j] = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = key;
                }
            }
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
console.log(insertionSort([1, 10, 1, 3, 10, 1, 2, 5, 0, 3, 6, 10, 2, 20, 40]))

// function insertionSort(array) {
//     if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
//         console.time('插入排序耗时：');
//         for (var i = 1; i < array.length; i++) {
//             var key = array[i];
//             var j = i - 1;
//             while (j >= 0 && array[j] > key) {
//                 array[j + 1] = array[j];
//                 j--;
//             }
//             array[j + 1] = key;
//         }
//         console.timeEnd('插入排序耗时：');
//         return array;
//     } else {
//         return 'array is not an Array!';
//     }
// }