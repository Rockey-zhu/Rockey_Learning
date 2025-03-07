//iterator(遍历器)
//iterator的作用有三个：
//一：是为各种数据结构，提供一个统一的、简便的访问接口；
//二：使得数据结构的成员能够按某种次序排列；
//三：Es6创造了一种新的遍历命令 for....of循环，Iterator接口主要供for...of消费

//Array  Map   Set  String   arguments  Nodelist 都有iterator接口

//iterator的遍历过程
//(1)创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
//(2)第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
//(3)第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
//(4)不断调用指针对象的next方法，直到它指向数据结构的结束位置。

//每一次调用next方法，都会返回数据结构的当前成员的信息。
//具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
        }
    };
}


//iterator内部实现代码
let arr = ['a', 'b', 'c']
let it = makeIterator(arr);

function makeIterator(arr) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

console.log("-----------------------");

//调用
{
    let arr = ['a', 'b', 'c'];
    let it = arr[Symbol.iterator](); // 调用iterator接口， Array内部已经实现了该接口，所以可以直接调用
    console.log(it.next()); //{ value: 'a', done: false }
    console.log(it.next());
    console.log(it.next());
    console.log(it.next());
}
console.log("-----------------------");

//iterator 主要还是给 for...of消费的
{
    let arr = ['a', 'b', 'c'];

    function a(arr) {
        for (let v of arr) {
            console.log(v);
        }
    }
    a(arr);
}