let user={
    name:"John",
    age:30
};
user.sayHi=function(){
    console.log("Hello!")
};
user.sayHi();//Hello!
//使用函数表达式创建了一个函数，并将其指定给对象的 user.sayHi 属性  
//之后使用 user.sayHi()调用它   作为对象属性的函数被称为方法

{
    let user={
        //...
};
//首先，声明函数
function sayHi(){
        alert("Hello!")
    };

    //然后将其作为一个方法添加
    user.sayHi=sayHi;
    user.sayHi();//Hello!
}

//简写
user={
    sayHi:function(){
        alert("Hello");
    }
};

let user={
    sayHi(){//与"sayHi:function()"一样
    alert("hello");
    }
};

//方法中"this"
let user={
    neme:"John",
    age=30,

    sayHi(){
        //"this"指的是“当前对象”
        alert(this.name);
    }
};
user.sayHi();//John

let user ={
    name:"John",
    age:30,

    sayHi(){
        alert(user.name);//"user"替代"this"
    }
};

let user={
    name:"John",
    age:30,

sayHi(){
    alert(user.name); //导致错误
    }
};

let admin=user;
user=null //重写让其更明显

admin.sayHi();// TypeError: Cannot read property 'name' of null

