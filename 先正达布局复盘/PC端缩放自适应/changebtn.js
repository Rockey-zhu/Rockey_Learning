/**
 * handleChangeBtns('id1','id1,id2,id3','tuli1','tuli1,tuli2,tuli3','tu1','tu1,tu2,tu3')
 * 参数
 * 1. 点击按钮的ID
 * 2. 使用到的按钮的 Ids
 * 3. 显示图例Id
 * 4. 所有的图例Ids
 * 5. 显示图的ID
 * 6. 所有图的IDs
 * 
 * 注意事项：点击按钮的class名必须为active
 */
//可使用 //LegendIds参数注释
function handleChangeBtns(btnIds, picIds) {
    //1.将字符串的ids转化成数组
    let btnArr = btnIds.split(",")
        //2.移出所有按钮的active样式
    btnArr.forEach(element => {
        document.getElementById(element).classList.remove("active");
    });
    //3.给点击的按钮增加active样式
    document.getElementById(btnArr[0]).classList.add("active"); //写在第一个的显示 从第二个开始后面隐藏
    //4.将所有图例的Ids转化成数组
    // let LegendArr = LegendIds.split(",")
    //     //5.将所有的图例隐藏
    // LegendArr.forEach(element => {
    //         document.getElementById(element).style.display = "none";
    //     })
    //     //6.给点击的按钮增加active样式
    // document.getElementById(LegendArr[0]).style.display = ""
    //7.将字符串的picIds转化成数组
    let picArr = picIds.split(",")
        //8.将所有图隐藏
    picArr.forEach(element => {
        document.getElementById(element).style.visibility = "hidden";
    });
    //9.显示showPic图
    document.getElementById(picArr[0]).style.visibility = "visible";
}