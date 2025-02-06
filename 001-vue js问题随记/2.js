//数组几种循环方式
let a = ["北京", "北门", "上海", "上城", "北海", "北国"]

//every(); //判断所有元素是否指定函数的测试,返回布尔值 true  false

let b = a.every(item => {
    return item.includes("北")
})
console.log("b", b);

//filter()  创建一个新数组 ，不会对空数组进行检测，filter不改变原始数组

let c = a.filter(item => {
    return item.includes("上")
})
console.log("c", c);