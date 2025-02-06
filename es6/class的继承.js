//Class 可以通过extends关键字实现继承
class Point {

}
class colorPoint extends Point {}
//上面代码定义了一个ColorPoint类，该类通过extends关键字，继承了Point类的所有属性和方法

//super 关键字
//super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。
//情况1：super作为函数调用时，代表父类的构造函数。
//情况2：super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类

class Parent {
    static myMethod(msg) {
        console.log('static', msg);
    }
}

var obj = {
    toString() {
        return "Myobject:" + super.toString();
    }
};
obj.toString(); //Myobject:[object object]

p2._proto_._proto_.printName = function() {
    console.log('ha');
};
p1.printName() //"ha"

//Mixin模式
//指多个对象合成一个新的对象，新对象具有各个组成成员的接口
const a = {
    a: 'a'
};
const b = {
    b: 'b'
};
const c = {...a, ...b }; //{a:'a',b:'b'}
//c对象是a对象和b对象的合成，具有两者的接口