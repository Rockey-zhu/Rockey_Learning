var circle = document.getElementById('circle');
var input = document.getElementById("percent");

//改变进度条样式
function circlePercent(value) {
    var change = 565.2 - 565.2 * value / 100;
    circle.style.strokeDashoffset = change;
    //改变环内数据
    document.getElementById("cardnumb").innerHTML = Number(value) + "%"
}
//获取随机值
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//点击事件
function changePercent() {
    
    circlePercent()
}

setInterval(()=>{
    let randomNumb = random(1,100);
    circlePercent(randomNumb)
},1000)