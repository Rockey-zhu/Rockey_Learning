// async、await
// 作用：用同步方式，执行异步操作

// 1）async 函数时generator(迭代函数)的语法糖

//2）async函数返回的是一个Promise对象,有无值看有无return值

// 3）await关键字只能放在async函数内部，await关键字的作用 就是获取Promise中返回的resolve或者reject的值

// 4）async、await要结合try/catch使用，防止意外的错误

const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000));
async function test() {
    const data = await getData();
    console.log("data: ", data);
    const data2 = await getData();
    console.log("data2: ", data2);
    return "success";
}
test().then(res => console.log(res))