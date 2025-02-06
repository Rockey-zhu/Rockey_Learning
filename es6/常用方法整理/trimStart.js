//trimStart(),trimEnd()
//它们的行为与trim()一致
//trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格。
//返回的都是新字符串，不会修改原始字符串。
{
    let x = '   abc   ';
    console.log(x.trim()); // "abc"
    console.log(x.trimStart()); // "abc  "
    console.log(x.trimEnd()); // "  abc"
}