function SuperClass(id) {
    this.books = ['js', 'css'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    console.log(this.books);
}

function SubClass(id) {
    //继承父类
    SuperClass.call(this, id);
}

//创建第一个子类实例
var instance1 = new SubClass(10);

//创建第二个子类实例
var instance2 = new SubClass(11);

instance1.books.push('html');
console.log(instance1)
console.log(instance2)
instance1.showBooks() //TypeError