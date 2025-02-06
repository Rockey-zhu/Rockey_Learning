console.log("hello");

let hh = 10;
// hh = 'hello';
// function fn2(this: Window) {
//     alert(this)
//         //this不明确
// }

let box1 = document.getElementById('box1');

box1 ? addEventListener('click', function() {
    alert('hello')
}) : ''