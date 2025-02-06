// var isShow = true;

// function handleOpenSelct() {
//     if (isShow) { //显示
//         console.log("show")
//         document.getElementById("selectFold").style.display = "block";

//     } else { //隐藏
//         console.log("none")
//         document.getElementById("selectFold").style.display = "none";
//     }
//     isShow = !isShow;
//     // isShow = isShow ? false : true;
// }

// function handleChangeBtns(btnIds, picIds, folder, selectSpans) {
//     //1.将字符串的ids转化成数组
//     let btnArr = btnIds.split(",")
//     let picArr = picIds.split(",")
//     let selectSpansArr = selectSpans.split(",")
//         //2.移出所有按钮的active样式
//     btnArr.forEach(element => {
//         document.getElementById(element).classList.remove("active");
//     });
//     //3.给点击的按钮增加active样式
//     document.getElementById(btnArr[0]).classList.add("active");

//     picArr.forEach(element => {
//         document.getElementById(element).style.visibility = "hidden";
//     });
//     //9.显示showPic图
//     document.getElementById(picArr[0]).style.visibility = "visible";



//     //每次点击完关闭fold层
//     document.getElementById(folder).style.display = "none";

//     //选择下拉项里的选项
//     let selectwords = document.getElementById(selectSpansArr[0]).innerHTML;
//     console.log(selectwords, "11111111")
//         //点击完后更改选择的选项span
//     document.getElementById("selectName").innerHTML = selectwords;

// }


var arr = ['One', 'Two', 'Three', 'Four']

// 控制筛选器显示隐藏
function styleDisplay(id, str) {
    document.getElementById(id).style.display = str
}
// 控制容器显示隐藏
function styleVisibility(str, id, style) {
    document.getElementById(`${str}${id}`).style.visibility = style
}
// 1.
// 2.
// 3.

// 功能逻辑
// 业务逻辑
function hideSelector(id, arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (id === element) {
            document.getElementById(`choice${id}`).classList.add("active");
            styleVisibility('sheet', id, 'visible')
            document.getElementById("selectName").innerHTML = document.getElementById(`choice${id}`).innerHTML;
        } else {
            document.getElementById(`choice${element}`).classList.remove("active");
            styleVisibility('sheet', element, 'hidden')
        }
    }
    styleDisplay('selectFold', 'none')
}