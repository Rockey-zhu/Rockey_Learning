//数组去重
let mySet = new Set([1, 2, 3, 4, 5, 3, 2, 1, 5, 6]);
console.log([...mySet]) //[1,2,3,4,5,6]


//并集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]);
console.log(union)

//交集
let c = new Set([1, 2, 3]);
let d = new Set([4, 3, 2]);
let intersect = new Set([...c].filter(x => d.has(x)))
console.log(intersect)

//差集
var e = new Set([1, 2, 3]);
var f = new Set([4, 3, 2]);
var difference = new Set([...e].filter(x => !f.has(x)));
console.log(difference)
    // {1}