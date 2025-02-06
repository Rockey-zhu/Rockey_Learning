var s = "hello,world" //定义一个字符串
console.log(s.charAt(0), "---1"); //第一个字符 "h"
console.log(s.charAt(s.length - 1), "---2") //最后一个字符 "d"
console.log(s.substring(1, 4), "---3") // 第二到第四个字符 "ell"

var arr = Array.from(s); // 将字符串转换为数组
arr.forEach((item, index) => {
    arr[index] = item + 'e'
});
console.log("arr", arr);
// arr [
//   'he', 'ee', 'le',
//   'le', 'oe', ',e',
//   'we', 'oe', 're',
//   'le', 'de'
// ]


console.log(s.slice(1, 4)); //ell  第二到第四个字符 "ell"
console.log(s.slice(-3)); //rld  倒数三个字符
console.log(s.indexOf("l")); //2 字符l首次出现的位置 下标
console.log(s.lastIndexOf("l")); //9 字符l最后一次出现字符l的位置 下标
console.log(s.indexOf("l", 3)); //3 在位置3及之后首次出现字符l的位置 下标
console.log(s.split(",")); //['hello','world'] 分割字符串
console.log(s.replace("h", "H")); //h替换h变成H  Hello,world  只替换第一个 出现的h
console.log(s.toUpperCase()); //HELLO,WORLD