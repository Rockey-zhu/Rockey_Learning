var book = {
    name: 'js book',
    likeBook: ['html book', 'css book']
}

function createBook(obj) {
    //通过原型方式创建新的对象
    var o = new inheritObject(obj);
    //扩展新对象
    o.getName = function(name) {
            console.log(name)
        }
        //返回扩展最后的新对象
    return o
}