/*1.传统异步编程
-回调函数
-事件监听
-发布/订阅
-Promise 对象*/

//Generator 函数内部还可以部署错误处理代码，捕获函数体外抛出的错误。
{
    function* gen(x) {
        try {
            var y = yield x + 2;
        } catch (e) {
            console.log(e);
        }
        return y;
    }

    var g = gen(1);
    g.next();
    g.throw('出错了');
    // 出错了
}
//指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获。

//异步任务的封装
{
    var fetch = require('node-fetch');

    function* gen() {
        var url = 'https://api.github.com/users/github';
        var result = yield fetch(url);
        console.log(result.bio);
    }
}

//Thunk函数
//Thunk 函数是自动执行 Generator 函数的一种方法。
//将参数放到一个临时函数之中，再将这个临时函数传入函数体

{
    function f(m) {
        return m * 2;
    }
    f(x + 5);

    //等同于

    var thunk = function() {
        return x + 5;
    };

    function f(thunk) {
        return thunk() * 2;
    }
}
//数 f 的参数x + 5被一个函数替换了。凡是用到原参数的地方，对Thunk函数求值即可
