var output = "";
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        output = output + j + "*" + i + "=" + i * j + "\t"
    }
    output = output + "\n"
}
console.log(output)