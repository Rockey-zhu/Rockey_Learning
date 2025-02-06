//使用hash 存储已拷贝对象，避免循环拷贝和重复拷贝
function deepClone(target, hash = new WeakMap()) {
    if (!isObject(target)) return target;
    if (hash.get(target)) return hash.get(target);
    //兼容数组和对象
    let newObj = Array.isArray(target) ? [] : {};
    // 关键代码，解决对象的属性循环引用 和 多个属性引用同一个对象的问题，避免重复拷贝
    hash.set(target, newObj);
    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            if (isObject(target[key])) {
                newObj[key] = deepClone(target[key], hash); //递归拷贝
            } else {
                newObj[key] = target[key]
            }
        }
    }
    return newObj;
}

function isObject(target) {
    return typeof target === "object" && target !== null;
}

//示例
let info = { item: 1 };
let obj = {
    key1: info,
    key2: info,
    list: [1, 2]
}

//循环引用深拷贝示例
obj.key3 = obj;
let val = deepClone(obj)
console.log(val)