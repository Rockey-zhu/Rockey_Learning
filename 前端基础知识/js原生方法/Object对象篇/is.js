//用处：Object(a,b)，判断a是否等于b
Object.prototype.sx_is = function(x, y) {
    if (x === y) {
        //防止-0和+0
        return x !== 0 || 1 / x === 1 / y
    }

    //防止NaN
    return x !== x && y !== y
}

const a = { name: '林三新' }
const b = a
const c = { name: '林三新' }

console.log(Object.sx_is(a, b))
console.log(Object.sx_is(a, c))