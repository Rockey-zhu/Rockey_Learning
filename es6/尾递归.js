//尾调用
//尾调用不一定出现在函数尾部，只要是最后一步操作即可。


// function sum(x, y) {
//     if (y > 0) {
//         return sum(x + 1, y - 1);
//     } else {
//         return x;
//     }
// }

// sum(1, 100000)

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }
            active = false;
            return value;
        }
    };
}

var sum = tco(function(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    } else {
        return x
    }
});

console.log(sum(1, 100000)) //100001