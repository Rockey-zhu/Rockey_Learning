//forEach()是JavaScript中一个常用的方法，用于遍历数组或类数组对象中的每个元素，并执行指定的函数。下面是forEach()的几种用法：

// (1)forEach 遍历数组

//1.遍历数组 ,可以执行指定的函数来处理每个数组元素
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element) {
//     console.log(element);
// })

// arr.forEach(element => {
//     console.log(element);
// })

//上述代码会遍历数组arr并输出每个元素的值

//2.获取数组索引
//在遍历数组时,forEach()方法的第二个参数来获取当前元素的索引，例如
// const arr = [1, 2, 3, 4, 5];
// arr.forEach(function(element, index) {
//     console.log(`Index:${index},Element:${element}`);
// })

//3.遍历对象
// forEach()方法也可以用于遍历对象的属性。
// 需要注意的是，遍历对象时，函数的第一个参数表示当前属性的值，第二个参数表示当前属性的名称，
// 例如：
const obj = {
    a: 1,
    b: 2,
    c: 3
}

// Object.keys(obj).forEach(function(key) {
//     console.log(`key:${key},value:${obj[key]}`);
// })

Object.keys(obj).forEach(key => {
    console.log(`key:${key},value:${obj[key]}`);
})

//4.在循环中使用异步函数

// 在循环中使用异步函数时，可以使用forEach()方法来避免一些问题。
// 例如，在以下示例中，我们使用for循环来处理一个异步操作：

// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000)
// }

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }

//上面的代码中，我们使用for循环处理了一个异步操作，并在1秒后输出每个i的值。但是，由于JavaScript的事件循环机制，
//输出的结果将是10个10。这是因为循环结束后，所有的回调函数都会同时执行，并访问变量i的最终值10。

//为了避免这种情况，可以使用forEach()方法来遍历数组，例如：

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach(function(i) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000);
// });

arr.forEach((i) => {
    setTimeout(() => {
        console.log(i);
    }, 1000)
})

//上面的代码中，我们使用forEach()方法遍历数组，并在1秒后输出每个i的值。由于forEach()方法会为每个回调函数创建一个新的作用域，
//因此每个回调函数都可以访问到自己的i的值，而不会受到其他回调函数的影响