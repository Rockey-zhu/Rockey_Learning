/*
entries()，keys()和values() 
1.IE 11 及更早版本不支持 find() 方法
2.keys返回的是数组的index，不是键值对的key
3.values返回的是每项值
4.entries返回的是index 与值
*/
{
    let arr = [
        { id: 9, value: 'yoyo' },
        { id: 2, value: 'cher' },
        { id: 3, value: 'nothing' },
    ]
    for (let index of arr.keys()) {
        console.log(index);
    }
    // 0
    // 1
    // 2
    for (let elem of arr.values()) {
        console.log(elem);
    }
    // {id: 9, value: "yoyo"}
    // {id: 2, value: "cher"}
    // {id: 3, value: "nothing"}
    for (let [index, elem] of arr.entries()) {
        console.log(index, elem);
    }
    //0 {id: 9, value: "yoyo"}
    //1 {id:2,value:'cher'}
    //2 {id:3,value:'nothing'}
}