// var regex = new RegExp(/xyz/, 'i')

// new RegExp(/abc/ig, 'i').flags

const string = 'test1test2test3test4test5test6test7test8test9test10test11';
const regex = /t(e)(st(\d?))/g;

for (const match of string.matchAll(regex)) {
    console.log(match);
}

// 转为数组的方法一
// [...string.matchAll(regex)]

// 转为数组的方法二
Array.from(string.matchAll(regex))