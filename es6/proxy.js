//Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编
//let pro=new Proxy(target,handler)
//target:代理目标，拦截模板
//handler:对象，里面定义拦截行为

//Proxy能重写对象属性和方法的默认操作，使用自己的逻辑和方法
{
    let obj = { name: "zhangsan", age: 20 };
    let objProxy = new Proxy(obj, {
        //get用来拦截目标对象属性的访问
        get: function(target, key) {
            // console.log(target, key); //{ name: 'zhangsan', age: 20 } name
            return obj[key]
        }
    })
    console.log(objProxy.name); //触发get获取返回值 zhangsan
    console.log(objProxy.age); //触发get获取返回值 20

    {
        //如果访问目标对象属性不存在，希望能抛出错误
        //没有代理，会返回undefined
        let obj = { name: "zhangsan", age: 20 };
        let objProxy = new Proxy(obj, {
            //增加获取拦截
            get: (target, key) => {
                if (key in obj) {
                    return obj[key];
                } else {
                    throw new ReferenceError("该对象没有" + key + "属性"); //抛出异常
                }

            }
        })

        console.log(objProxy.temp)

    }
}




//**************demo********************
//年龄大于100报错 
{
    let obj = { name: "zhangsan", age: 20 };
    let objProxy = new Proxy(obj, {
        get: (target, key) => {
            return obj[key];
        },
        set: (target, key, value) => {
            //增加赋值拦截
            if (key === "age") {
                if (value >= 0 && value < 100) {
                    console.log(key, value)
                } else {
                    console.log("年龄太大!")
                        //throw new RangeError("年龄太大！无效！");
                }
            }
            //赋值拦截去除空格
            if (typeof value === "string") {
                value = value.trim();
            }
            target[key] = value;
        }
    })
    console.log(objProxy.name);
    objProxy.age = 120;
    objProxy.name = '   lisi';
    console.log(objProxy.name);

}