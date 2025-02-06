//深拷贝和浅拷贝的区别
//含义：假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝，自食其力。
//用JSON对象的parse和stringify
function deepClone(obj){
    let _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
    return objClone
}    
let a=[0,1,[2,3],4],
b=deepClone(a);
a[0]=1;
a[2][0]=1;
console.log(a,b);

//a 输出  [1,1,[1,3],4]
//b 输出  [0,1,[2,3],4]

//达到深拷贝的效果

//除了上面两种方法之外，我们还可以借用JQ的extend方法
/*
$.extend( [deep ], target, object1 [, objectN ] )
deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝
target 为Object类型 目标对象，其他对象的成员属性将被附加到该对象上。
object1 objectN可选。 Object类型 第一个以及第N个被合并的对象。
*/
