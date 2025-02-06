/*switch(已知条件){
    case 选项1:
        ...
        break
    case 选项2:
        ...
        break
    default:
        ...   所有选项不符合的时候执行的默认代码
}
记得写 break  否则会有穿透效果   会把下面的代码都执行      从第一个满足条件的位置向下穿透
根据已知条件找到一个 完全匹配 的选项，执行对应的代码
*/

var foot = 42
switch (foot) {
    case 37:
        console.log("买37号的鞋子");
        break

    case 40:
        console.log("买40号的鞋子")
        break

    default:
        console.log("去别家店")
}