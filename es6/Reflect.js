//将object对象的一些明显属于语言内部的方法（比如Object.defineProperty）,放到Reflect对象上
//修改某些Objet方法的返回结果，让其更合理
{
    //无论Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为
    let target = { name: "zhangsan", age: 20 };
    let a = new Proxy(target, {
        set: function(target, name, value, receiver) {
            var success = Reflect.set(target, name, value, receiver);
            if (success) {
                console.log('property ' + name + ' on ' + target + ' set to ' + value);
            }
            return success;
        }
    });
    //console.log(a)
}

//实例：使用Proxy实现观察者模式
//观察者模式（Observer mode）指的是函数自动观察数据对象，一旦对象有变化，函数就会自动执行。
const person = observable({
    name: '张三',
    age: 20
});

function print() {
    console.log(`${person.name}, ${person.age}`)
}

observe(print);
person.name = '李四';
// 输出
// 李四, 20