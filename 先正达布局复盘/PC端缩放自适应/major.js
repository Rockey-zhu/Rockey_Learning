// 切换btn点击事件名  changeBtn
// 切换按钮的btn id为 changeBtnId
//  对应显示的图表    showSheet
//  对应隐藏的图表    hiddenSheet 

/*显示  pic content 函数*/
function ShowContent(sheetid, btnid, lengendid) {
    document.getElementById(btnid).classList.add("Active"); //点击后将按钮激活样式
    document.getElementById(sheetid).style.visibility = "visible"; //点击后显示对应的图表
    //document.getElementById("lengendid").style.visibility = "visible"; //点击后显示对应的图表的图例
}

/*隐藏 pic content 函数*/
function HiddenContent(sheetid, btnid, lengendid) {
    document.getElementById(btnid).classList.remove("Active"); //点击后将按钮激活样式
    document.getElementById(sheetid).style.visibility = "hidden"; //点击后显示对应的图表
    //document.getElementById("lengendid").style.visibility = "hidden"; //点击后显示对应的图表的图例
}

function ShowOrHidden(showSheetIDd, hiddenSheetId, activeBtnId, noActiveBtnId, showLengendId, hiddenLengendId) {
    document.getElementById(btnid).classList.add("Active"); //点击后将按钮激活样式
}



/*第一个图表显示隐藏*/
if (btnid = QVbtn1) {
    ShowContent(QV01, QVbtn1)
    HiddenContent(QV02, QVbtn2)
    HiddenContent(QV03, QVbtn3)
} else if (btnid = QVbtn2) {
    ShowContent(QV02, QVbtn2)
    HiddenContent(QV01, QVbtn1)
    HiddenContent(QV03, QVbtn3)
} else if (btnid = QVbtn3) {
    ShowContent(QV03, QVbtn3)
    HiddenContent(QV01, QVbtn1)
    HiddenContent(QV02, QVbtn2)
}