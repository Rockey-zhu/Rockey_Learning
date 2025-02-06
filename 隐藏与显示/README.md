### 想要把两个div在一排放置操作
例如：  <div>
            <button id="btn1" onclick="hand1()">1</button>
            <button id="btn2" onclick="hand2()">2</button>
        </div>
                    <div class="a1">
                        <div id="box1">111111</div>
                    </div>
                    <div class="a2">

                        <div id="box2">222222</div>
                    </div>

### 像哟把两个div 在同一位置显示
只需要设置其绝对定位即可
.a1 {
    position: absolute;
}
.a2 {
    left: 0;
    position: absolute;
}

### 如果遇到网页切换问题
设置一个全局变量 保存之前操作过的步骤  使跳转回来任记得历史记录

对于Dom操作问题
visibility = "visible";   表示显示
visibility = "hidden";    表示隐藏

### 在页面进行跳转时保存历史记录，定义的全局变量就是string变量，不需要引号
document.getElementById(box_content).style.visibility = "visible"}