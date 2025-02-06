console.log("--1111--")
const str = '123abc456';
const regex = /(\d+)([a-z]+)(\d+)/g;

function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(' - ');
}

console.log(str.replaceAll(regex, replacer))