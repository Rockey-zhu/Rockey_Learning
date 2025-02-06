/*
for of 为es6的遍历方法
1.有兼容问题
2.可以break,continue，return
3.相比较 for循环，更便利
4.支持类似数组的对象。甚至字符串
5.不适用于处理原有的原生对象
*/
{
    let arr=[
        {id:1,value:'yoyo'},
        {id:2,value:'cher'},
        {id:3,value:'nothing'}
    ]
    let str='fdsagrewhfdadfwre'
    for(let item of str){
        console.log(item)//f d s a g r e w h f d a d f w r e 
    }
    for (let item of arr){
        console.log(item)////{id: 1, value: "yoyo"}, {id: 2, value: "cher"}, {id: 3, value: "nothing"}
    }
}