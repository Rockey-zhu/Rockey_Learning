/*{
   object.key    value   entries
    Object.keys(obj)—— 返回一个包含该对象所有的键的数组。
    Object.values(obj)—— 返回一个包含该对象所有的值的数组。
    Object.entries(obj)—— 返回一个包含该对象所有[key, value] 键值对的数组。
}*/
{
    let user = {
        name: "John",
        age: 30
    }
}
Object.keys(user) = ["name", "age"] // ===>所有键
Object.values(user) = ["John", 30] // ===>所有值
Object.entries(user) = [ // ===>所有键值对
    ["name", "John"],
    ["age", 30]
]

//遍历所有的值
for (let value of Object.values(user)) {
    alert(value); //John,then 30
};


//-----------------------方法----------------------
//Object.getOwnPropertySymbols()  方法返回一个给定对象自身的所有Symbol属性的数组
//obj  要返回Symbol属性的对象
//给定对象自身上找到的所有Symbol属性的数组

//例子
{
    var obj = {};
    var a = Symbol("a");
    var b = Symbol.for("b");

    obj[a] = "localSymbol";
    obj[b] = "globalSymbol";

    var objectSymbols = object.getOwnPropertySymbols(obj);

    console.log(objectSymbols.length) //2
    console.log(objectSymbols) //[ Symbol(a), Symbol(b) ]
    console.log(objectSymbols[0]) //Symbol(a)
}

{
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
    };
    let doublePrices = Object.fromEntries(
        //转换成数组，之后使用map方法，然后通过fromEntries再转回对象
        Object.entries(prices).map(([key, value]) => [key, value * 2])
    );
    alert(doublePrices.meat); //8
}