// let numbers=[];
// let full=new  Number();
//1.循环10个随机数，push进number
//2.根据插入排序算法思想解答排序
// full的作用：暂存你将要排序的数

// let numbers=[];
// function RandNum(){
//     for(i=0;i<10;i++){
//         nubmers[i]=Math.push(Math.random()*10)
//     }
//     return RandNum
// }

    //  function getRandom(istart, iend) {
    //       var iChoice = iend - istart + 1;    //加1是为了取到100
    //       var res = Math.floor(Math.random() * iChoice + istart);  //[0,90]+10
    //       return res;
    //   }
    let  numbers= [];
//     function getRandom(){
//         let res=parseInt(Math.random()*100);
//         return res;
// };
      for (let i = 0; i < 10; i++) {
         numbers.push(parseInt(Math.random()*100));
      }
    console.log(numbers)
//    从小到大排序 sort方法
//      function sortNumber(a,b){
//     return a-b;
// }
//console.log(numbers.sort(sortNumber));


// function Insertion(numbers) {
//   let len = numbers.length;
//   let preIndex, current;
//   for (let a = 1; a < len; a++) {
//     preIndex = a - 1;
//     current = numbers[a];
//     while (preIndex >= 0 && current < numbers[preIndex]) {
//       numbers[preIndex + 1] = numbers[preIndex];
//       preIndex--;
//     }
//     numbers[preIndex + 1] = current;
//   }
//   return numbers;
// }
// console.log(numbers)

//[49,68,75,93,94,47,41,89,19,96]
//第一轮：[47,49,68,75,93,94,41,89,19,96]
//第二轮：[41,47,49,68,75,93,94,89,19,96]
//第三轮：[41,47,49,68,75,89,93,94,19,96]
//第四轮：[19,41,47,49,68,75,89,93,94,96]

for(let i=1;i<numbers.length;i++){
    if(numbers[i]<numbers[i-1]){  
        for(let n=i-1;n>=0;n--){
            if(numbers[i]<numbers[n]){
                // if(numbers[i]>numbers[n-1]){
                   let a=numbers.splice(i,1);
                    numbers.splice(n,0,a[0])
                // }
            }
        }
    }
}
console.log(numbers)