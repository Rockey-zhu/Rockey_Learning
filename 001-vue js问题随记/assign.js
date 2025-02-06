var obj = {
    name: "john",
    color: "yellow",

};
var newObj = obj;
newObj.name = "susan";

console.log(obj.name); //susan
console.log(newObj.name); //susan

//显然不是想要的结果 obj的name对象被覆盖

//Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。
//它将返回目标对象

var obj = {
    name: "john",
    color: "yellow",

};
var newObj = Object.assign({}, obj, {
    color: "blue"
});
newObj.name = "susan";
console.log(obj.name); //john
console.log(newObj.name); //susan



//1. 手动给对象进行赋值
// 模拟请求回来的接口
const resData = {
        name: "张三",
        age: 18,
        sex: "男"
    }
    // 模拟页面绑定数据
const data = {
    name: null,
    age: null,
    sex: null
}
data.name = resData.name
data.age = resData.age
data.sex = resData.sex
console.log(data); // {name: "张三",age: 18,sex: "男"}



// 模拟请求回来的接口
const resData = {
        name: "张三",
        age: 18,
        sex: "男"
    }
    // 模拟页面绑定数据
const data = {
    name: null,
    age: null,
    sex: null
}
const newData = {
    ...data,
    ...resData
}
console.log(newData); // {name: "张三",age: 18,sex: "男"}

//上面的代码确实能将请求回来的数据进行合并，
//但是缺点是每次合并都需要创建一个newData 变量，原来的 data 对象并没有发生变化

//3.Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
// 注意：如果目标对象中的属性和源对象中有相同的键，则源对象的值会覆盖目标对象的值。
// 当源对象值为null 或者undefined 的时候，不会抛出错误。

// 模拟请求回来的接口
const resData = {
        name: "张三",
        age: 18,
        sex: "男"
    }
    // 模拟页面绑定数据
const data = {
    name: null,
    age: null,
    sex: null
}
const returnValue = Object.assign(data, resData)
console.log(returnValue); // {name: "张三",age: 18,sex: "男"}
console.log(data); // {name: "张三",age: 18,sex: "男"}