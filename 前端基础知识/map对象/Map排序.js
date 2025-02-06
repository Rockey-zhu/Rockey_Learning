//设置一个乱序的Map对象
// const map = new Map()
// map.set(2, '林二心')
// map.set(1, '林一心')
// map.set(5, '林五心')
// map.set(4, '林四心')
// map.set(3, '林三心')
// console.log(map) //Map(5) { 2 => '林二心', 1 => '林一心', 5 => '林五心', 4 => '林四心', 3 => '林三心' }

//Array.from 将一个类数组对象或可遍历对象转换成真正数组
// const map = new Map()
// map.set(2, '林二心')
// map.set(1, '林一心')
// map.set(5, '林五心')
// map.set(4, '林四心')
// map.set(3, '林三心')
// console.log(map)
// const arr = Array.from(map)
// console.log(arr)
// [
//     [ 2, '林二心' ],
//     [ 1, '林一心' ],
//     [ 5, '林五心' ],
//     [ 4, '林四心' ],
//     [ 3, '林三心' ]
//   ]


//排序
// const map = new Map()
// map.set(2, '林二心')
// map.set(1, '林一心')
// map.set(5, '林五心')
// map.set(4, '林四心')
// map.set(3, '林三心')
// console.log(map) // Map { 2 => '林二心', 1 => '林一心', 5 => '林五心', 4 => '林四心', 3 => '林三心' }
// const arr = Array.from(map)
// console.log(arr)
//     /*                   [ [ 2, '林二心' ],
//                          [ 1, '林一心' ],
//                          [ 5, '林五心' ],
//                          [ 4, '林四心' ],
//                          [ 3, '林三心' ] ] */
// arr.sort((a, b) => a[0] - b[0])
// console.log(arr)
// [
//     [ 1, '林一心' ],
//     [ 2, '林二心' ],
//     [ 3, '林三心' ],
//     [ 4, '林四心' ],
//     [ 5, '林五心' ]
//   ]


//转回map对象(Map([a,b],[c,d])会生成{a=>b,c=>d}Map对象)
const map = new Map()
map.set(2, '林二心')
map.set(1, '林一心')
map.set(5, '林五心')
map.set(4, '林四心')
map.set(3, '林三心')
console.log(map) // Map { 2 => '林二心', 1 => '林一心', 5 => '林五心', 4 => '林四心', 3 => '林三心' }
const arr = Array.from(map)
console.log(arr)
    /* [ [ 2, '林二心' ],
                         [ 1, '林一心' ],
                         [ 5, '林五心' ],
                         [ 4, '林四心' ],
                         [ 3, '林三心' ] ] */
arr.sort((a, b) => a[0] - b[0])
console.log(arr)
    /* [ [ 1, '林一心' ],
                         [ 2, '林二心' ],
                         [ 3, '林三心' ],
                         [ 4, '林四心' ],
                         [ 5, '林五心' ] ] */

const map2 = new Map(arr) //成功转化
console.log(map2) //Map(5) { 1 => '林一心', 2 => '林二心', 3 => '林三心', 4 => '林四心', 5 => '林五心' }