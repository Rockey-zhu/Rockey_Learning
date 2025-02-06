var box_content = 'box1' //box1--->111块  box2-->222块
function hand1() {
    document.getElementById("box1").style.visibility = "visible";
    document.getElementById("box2").style.visibility = "hidden";
    box_content = 'box1'

}

function hand2() {
    document.getElementById("box1").style.visibility = "hidden";
    document.getElementById("box2").style.visibility = "visible";
    box_content = 'box2'

}

function handleToPro() {
    document.getElementById("sunyi").style.visibility = "visible";
    document.getElementById("zijin").style.visibility = "hidden";
    //点击损益  显示box
    document.getElementById(box_content).style.visibility = "visible"
}

function handleToCap() {
    document.getElementById("sunyi").style.visibility = "hidden";
    document.getElementById("zijin").style.visibility = "visible";
    //点击资金 隐藏box
    document.getElementById(box_content).style.visibility = "hidden"
}

function name(params) {

}