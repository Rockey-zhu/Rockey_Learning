var a = 0, //个位
    b = 0, //十位
    c = 0; //百位

var num = 0 //出现的个数
for (var i = 100; i <= 999; i++) {
    a = i % 10;
    b = parseInt(i / 10) % 10;
    c = parseInt(i / 100) % 10;

    //parseInt用法，转换为整数，去除小数点后的数

    if (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) == i) {
        num++;
        console.log(i);
    }
}
console.log("一共有：" + num)