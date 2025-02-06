/*
for in 专门为object遍历的方法
*/
{
  let obj={
      id:1,
      value:'yoyo',
      target:'js'
  }
  for(let item in obj){
      console.log(item)
  }
}

/*
object.keys(),object.values(),object.entries()
这三个方法可以分别得到键名，值，重组为数组
*/