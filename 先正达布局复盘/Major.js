// //保存三个页面的初始高度
// let PageOneHeight = document.getElementById("Page_one").offsetHeight;
// let PageTwoHeight = document.getElementById("Page_two").offsetHeight;
// let PageThreeHeight = document.getElementById("Page_three").offsetHeight;


// //设置页面二高度不大于页面一
// document.getElementById("Page_two").style.height = 1 + "px";
// document.getElementById("Page_three").style.height = 1 + "px";


// //按钮一
// function handclickOne() {
//     //让页面一 静态显示
//     document.getElementById("Page_one").style.position = "static";

//     //第二次点击时，恢复页面一正常高度
//     document.getElementById("Page_two").style.height = 1 + "px";
//     document.getElementById("Page_three").style.height = 1 + "px";
//     document.getElementById("Page_one").style.height = pageOneHeight + "px";
// }

// //按钮二
// function handclickTwo() {
//     //设置定位
//     document.getElementById("Page_two").style.position = "static"
//     document.getElementById("Page_one").style.position = "absolute"
//     document.getElementById("Page_three").style.position = "absolute";

//     //让页面二回归正常高
//     document.getElementById("Page_two").style.height = pageTwoHeight + "px";
//     document.getElementById("Page_three").style.height = 1 + "px";


//     //隐藏第一页全部

// }


// //按钮三
// function handclickThree() {
//     //让页面一    position: absolute;
//     document.getElementById("Page_one").style.position = "absolute"
//     document.getElementById("Page_two").style.position = "absolute"
//     document.getElementById("Page_three").style.position = "static"

//     //让页面三回归正常高
//     //使一 ，二页面高度降低
//     document.getElementById("Page_one").style.height = pageThreeHeight + "px";
//     document.getElementById("Page_two").style.height = pageThreeHeight + "px";
//     document.getElementById("Page_three").style.height = pageThreeHeight + "px";
//}


function handclickOne() {
    document.getElementById("Page_one").style.display = "";
    document.getElementById("Page_two").style.display = "none";
    document.getElementById("Page_three").style.display = "none";
}

function handclickTwo() {
    document.getElementById("Page_one").style.display = "none";
    document.getElementById("Page_two").style.display = "";
    document.getElementById("Page_three").style.display = "none";
}

function handclickThree() {
    document.getElementById("Page_one").style.display = "none";
    document.getElementById("Page_two").style.display = "none";
    document.getElementById("Page_three").style.display = "";
}