//解析appid


    
function analysisAppId(appid) {      
    let  arrs  =  appid.split("");      
    let  keyIndex  =  arrs.findIndex(ele => {         return  ele  ==  '=';       });      
    arrs.splice(0, keyIndex);      
    arrs  =  arrs.join("");      
    return  arrs;
} 
analysisAppId("/WebHook/Send?key=674b7581-c2ce-48a0-8bb6-2e6e5aff9a0c");

console.log(analysisAppId("/WebHook/Send?key=674b7581-c2ce-48a0-8bb6-2e6e5aff9a0c"))
    //674b7581-c2ce-48a0-8bb6-2e6e5aff9a0c   输出

// let arrs = [1, 2, 4, 5];
// let a = arrs.split("");
// let keyIndex = a.findIndex(ele => {
//     return ele == '=';
// })

// console.log(keyIndex)





// function type(target) {
//     var ret = typeof(target);
//     var template = {
//         "[object Array]": "array",
//         "[object Object]": "object",
//         "[object Number]": "number - object",
//         "[object Boolean]": "boolean - object",
//         "[object String]": 'string-object'
//     }

//     if (target === null) {
//         return 'null';
//     } else if (ret == "object") {
//         var str = Object.prototype.toString.call(target);
//         return template[str];
//     } else {
//         return ret;
//     }
// }
// type([123])
// console.log(type([123]))