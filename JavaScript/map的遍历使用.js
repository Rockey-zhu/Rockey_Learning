//for of
var myMap = new Map();
myMap.set(0, "zero")
myMap.set(1, "one")

// 将会显示两个 log。 一个是 "0 = zero" 另一个是 "1 = one"
for (var [key, value] of myMap) {
    console.log(key + "=" + value)
}


/* 这个 entries 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的 [key, value] 数组。 */
for (var [key, value] of myMap.entries()) {
    console.log(key + " = " + value);
}


//这个keys方法返回一个新的Iterator对象，它按插入顺序包含了Map 对象中每个元素的键
//将会显示两个log.一个是"0" 另一个是"1"
for (var key of myMap.keys()) {
    console.log(key);
} //显示键 0  1

// 将会显示两个log。 一个是 "zero" 另一个是 "one"
for (var value of myMap.values()) {
    console.log(value);
}
/* 这个 values 方法返回一个新的 Iterator 对象，它按插入顺序包含了 Map 对象中每个元素的值。 */
//显示值  zero one