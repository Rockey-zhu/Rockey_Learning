//合并数组
const arr1=['a','b'];
const arr2=['c'];
const arr3=['d','e'];

//Es5的合并数组
console.log(arr1.concat(arr2,arr3));
//['a','b','c','d','e']

//Es6的合并
console.log([...arr1,...arr2,...arr3]);
//['a','b'.'c','d','e']