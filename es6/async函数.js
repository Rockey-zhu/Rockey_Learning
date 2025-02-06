//async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已

const { async } = require("rxjs");

/*
async对Generator改进了以下四个点
1.async自带执行器，不用像generator要调用next或者co才能真的执行得到最后的结果
2.语义更清楚
3.async函数的await命令后面可以是Promise对象和原始类型的值(数值，字符串，布尔值)
4.async函数返回值是promise对象，可以用then方法指定下一步操作

await命令就是内部then命令的语法糖。
*/

{
    //函数声明
    async function foo() {}

    //函数表达式
    const foo = async function() {};

    //对象的方法
    let obj = { async foo() {} };
    obj.foo().then()

    //class方法
    class Storage {
        constructor() {
            this.cachePromise = caches.open('avatars');
        }

        async getAvatar(name) {
            const cache = await this.cachePromise;
            return cache.match(`/avatars/${name}.jpg`)
        }
    }
    const storage = new Storage();
    storage.getAvatar('jake').then();

    //箭头函数
    const foo = async() => {};
}