// request 请求 get  地址 可获得html页面的信息 
const cheerio = require("cheerio")
const request = require("request")
const fs = require("fs")

const load = (options) => {
    request({ url: options.url }, (_, response, body) => {
        const $ = cheerio.load(body);
        $('.woo-pcont a.a').each((index, item) => {
            const url = $('img', item)[0].attribs.src
            console.log(url)
            request(url).pipe(fs.createWriteStream(`./img2/${index}.jpg`))
        })
    })
}

load({
    // url:"https://www.iviewui.com/components/icon",  //404
    //url: "https://www.sina.com.cn/", //新浪微博
    //url: "https://www.4399.com/", //4399
    //url: "http://www.7k7k.com/",
    //url: "https://www.vcg.com/sets/523432771",
    //url: "https://www.vcg.com/sets/523173062",
    url: "https://www.duitang.com/category/?cat=wallpaper",
    // url:"http://www.duoziwang.com/head/gexing/",    //图片网站
    page: 10
})

// 爬虫 https://www.jianshu.com/p/629a81b4e013