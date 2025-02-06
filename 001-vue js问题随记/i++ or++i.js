// i++  ++i
let i = 0
console.log(i++); //i=i+1  0   先打印再加一  
console.log(++i); //i=i+1  2   先加一再打印

// for (i = 0; i < 5; i++) {
//     console.log(i); //0 1 2 3 4
// }
for (i = 0; i < 5; ++i) {
    console.log(i); //0 1 2 3 4
}
let a = 0;

console.log(++a); // Prints 1   //
console.log(a++); // Prints 1  //