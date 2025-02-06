       //Number.isFinite(),Number.isNaN()方法
       //    console.log(Number.isFinite(15)); //true
       //    console.log(Number.isFinite(NaN)); //false
       //Number.isFinite()用来检查一个数值是否为有限的  参数类型不是数值，Number.isFinite一律返回false


       //Number.isNaN()用来检查一个值是否为NaN
       //    console.log(Number.isNaN(15)); //false
       //    console.log(Number.isNaN(NaN)) //true

       //Number.parseInt(),Number.parseFloat()
       //    console.log(Number.parseInt('12.34'), //12
       //            Number.parseFloat('123.45#')) //123.45




       // 
       // var s = 'aaa_aa_a';
       // var r1 = /a+/g;
       // var r2 = /a+/y;

       // r1.exec(s)
       // r2.exec(s)
       // r1.exec(s)
       // r2.exec(s)


       // let {
       //     groups: {
       //         one,
       //         two
       //     }
       // } = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
       // console.log(one) // foo
       // console.log(two) // bar

       // console.log(Number.isInteger(23.1)) //.isInteger 判断该数是否是整数
       // console.log(Number.isInteger(true)) //如果参数不是数值，直接返回false

       // console.log(Math.trunc(4.1))
       // console.log(Math.trunc(-4.9)) //Maht.trunc方法用于去除一个数的小数部分，返回整数部分
       // console.log(Math.trunc(true)) //1
       // console.log(Math.trunc(false)) //0      对于非数值，Math.trunc内部使用Number方法将其先转为数值。

       // console.log(Math.trunc(NaN)) //NaN
       // console.log(Math.trunc()) //NaN     //对空值和吴法皆取整数的值，返回NaN


       //.Math.sign()方法
       // Math.sign方法用来判断一个数到底是正数、 负数、 还是零。 对于非数值， 会先将其转换为数值。

       // 它会返回五种值。


       console.log(Math.sign(-5), // -1
               Math.sign(5), // +1
               Math.sign(0), // +0
               Math.sign(-0), // -0
               Math.sign(NaN)) // NaN
           // 参数为正数， 返回 + 1；
           // 参数为负数， 返回 - 1；
           // 参数为 0， 返回0；
           // 参数为 - 0， 返回 - 0;
           // 其他值， 返回NaN

       //         Math.cbrt()
       // Math.cbrt()方法用于计算一个数的立方根。

       //
       Math.clz32(0) // 32
       Math.clz32(1) // 31
       Math.clz32(1 << 1) // 30
       Math.clz32(1 << 2) // 29
       Math.clz32(1 << 29) // 2

       //Math.imul()    Math.imul方法返回两个数以 32 位带符号整数形式相乘的结果，返回的也是一个 32 位的带符号整数

       console.log(Math.imul(2, 4), //8
               Math.imul(-1, 8)) //-8

       //Math.fround()
       //Math.fround方法返回一个数的32位单精度浮点数形式。


       //Math.hypot()   返回所有参数的平方和的平方根。
       console.log(Math.hypot(3, 4), // 5
               Math.hypot(3, 4, 5), // 7.0710678118654755
               Math.hypot(), // 0
               Math.hypot(NaN), // NaN
               Math.hypot(3, 4, 'foo'), // NaN
               Math.hypot(3, 4, '5'), // 7.0710678118654755
               Math.hypot(-3)) //3