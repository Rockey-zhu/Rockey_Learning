/*
reduce
1.对于空数组是不会执行回调函数的
2.ie8及以下不适用
3.reduce接受一个函数，函数有四个参数，分别是：上一次的值，当前值，当前值的索引，数组
4.生成单个值
*/
{
    [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
        console.log(previousValue + currentValue)
        return previousValue + currentValue;
    });
}

{
    let a = [1, 2, 3, 4, 5];
    var sum = a.reduce(function(a, b) { return a + b });
    console.log(sum); //15
}

//reduceRight()
//从右向左遍历
{

}