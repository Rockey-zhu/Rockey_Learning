//模块化思想
//Es6模块化主要依赖于 import 和 export
//export命令用于规定模块的对外接口，  import命令用于输入其他模块提供的功能

//export default命令，为模板指定默认输出。
{
    //export-default.js
    export default function() {
        console.log('foo');
    }
}

// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
//模块，export命令对外部输出了三个变量

export var foo = 'bar';
setTimeout(() => foo = 'baz', 500);

//import()适用场合
/*
（1）按需加载。
（2）条件加载
if (condition) {
  import('moduleA').then(...);
} else {
  import('moduleB').then(...);
}
根据不同情况，加载不同模块
（3）动态的模板路径
import(f())
.then(...);
上面代码中，根据函数f的返回结果，加载不同的模块
*/


// /defer与async的区别
//defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行
//async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染
//总结：defer是“渲染完再执行”，async是“下载完就执行”
