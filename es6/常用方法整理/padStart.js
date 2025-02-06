//.padStart().padEnd() 字符串补全长度
//如果某个字符串不够指定长度
//padStart()用于头部补全，padEnd()用于尾部补全
//参数：第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。

let x='zhp';
//console.log(x.padStart(5,'ab')); //abzhp

//超出长度部分会截取补全字符串
//console.log(x.padStart(4,'ab')); //azhp

//最大长度参数小于原字符串，则输出原字符串
//console.log(x.padStart(2,'ab')); //zhp

//如果省略第二个参，默认使用空格补全长度
console.log(x.padStart(5))//'  zhp'

console.log(x.padEnd(5,'ab')); //zhpab
