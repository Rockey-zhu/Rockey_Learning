//this 指的是函数运行时所在的环境

/*
总结：
每当调用一个函数时，我们必须查看括号“()”直接左侧的内容。
如果在括号的左侧可以看到一个引用，那么传递给函数调用的“this”的值正是那个对象所属的值，否则它是全局对象。

*/


var obj = {
    foo: function() {
        console.log(this.bar);
    },
    bar: 1
};

var foo = obj.foo;
var bar = 2;

obj.foo(); //1
foo(); //2


//obj.foo()  运行在obj的环境,this 指向 obj
//foo()  运行在全局环境，this 指向 全局环境


//this 跟内存里面的数据结构有关系

var obj = {
    foo: 5
};
//js会先存在内存里面，生成一个对象{foo:5},然后把这个对象的内存地址赋值给变量obj

//计算机的存在形式如下

// {
//     foo: {
//         [[value]]: 5
//         [[writable]]: true
//         [[enumerable]]: true
//         [[configurable]]:true
//     }
// }

// foo属性的值保存在属性描述对象的value属性里面


//属性的值可能是一个函数
var obj = {
    foo: function() {}
};

//这时，引擎会将函数单独保存在内存中，然后在将函数的地址赋值给foo属性的value 
/*
{
    foo:{
    [[value]]:函数的地址
    ...
    }
}
*/

//由于函数是一个单独的值，所以它可以在不同的环境（上下文）执行。

var f = function()
var obj = {
    f: f
}

//单独执行
f()

//obj 环境执行
obj.f()


### 环境变量

js 允许在函数体内部， 引用当前环境的其他变量

var f = function() {
    console.log(x);
}

//此时x指向全局
var f = function() {
    console.log(this.x);
}

//加上 this  目的是在函数体内部，指代函数当前的运行环境


var f = function() {
    console.log(this.x);
}

var x = 1;
var obj = {
    f: f,
    x: 2,
};

// 单独执行
f() // 1

// obj 环境执行
obj.f() // 2



//上面代码中，函数f在全局环境执行，this.x指向全局环境的x。
//   在obj环境执行，this.x指向obj.x。

//obj.foo()是通过obj找到foo，所以就是在obj环境执行。
//一旦var foo = obj.foo，变量foo就直接指向函数本身，所以foo()就变成在全局环境执行。