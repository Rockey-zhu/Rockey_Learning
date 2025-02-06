<template>
  <dv-border-box-11 class="border" title="许诺">
    <dv-decoration-10
      style="width: 100%; height: 5px; display: flex; align-items: center"
    />
    <dv-decoration-9 class="circle">66%</dv-decoration-9>
    <div id="demo"></div>
    <div id="box">
      <div id="demo2"></div>
      <div id="demo3"></div>
    </div>
  </dv-border-box-11>
</template>

<script>
import * as ets from "echarts";
// 引入主题配置文件
import theme from "../../src/assets/theme.json";
export default {
  mounted() {
    // 注册主题(参数1: 使用时的别名 参数2: 主题配置文件)
    ets.registerTheme("theme", theme);
    // this.initEcharts();

    // 初始化图表
    var myChart = ets.init(document.getElementById("demo"), theme);
    var myChart2 = ets.init(document.getElementById("demo2"), theme);
    var myChart3 = ets.init(document.getElementById("demo3"), theme);
    myChart.setOption({
      //配置图例
      legend: {
        inactiveColor: "#8e8686", //未选中时的颜色
        orient: "vertical",
        right: 10,
        top: "center",
      },
      dataset: {
        source: [
          ["product", "2015", "2016", "2017"],
          ["步行", 43.3, 85.8, 93.7],
          ["自行车", 83.1, 73.4, 55.1],
          ["飞机", 86.4, 65.2, 82.5],
          ["汽车", 72.4, 53.9, 39.1],
        ],
      },
      //配置项
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    });

    //配置第二个图表
    myChart2.setOption({
      //配置图例
      series: [
        {
          type: "pie",
          stillShowZeroSum: false, //据值和为 0 不显示任何扇形
          stillShowZeroSum: false, //对应标签也不显示
          data: [
            {
              value: 335,
              name: "直接访问",
            },
            {
              value: 234,
              name: "联盟广告",
            },
            {
              value: 1548,
              name: "搜索引擎",
            },
            {
              value: 800,
              name: "在线观看",
            },
          ],
          roseType: "area",
        },
      ],
    });

    //配置第三个图表
    myChart3.setOption({
      xAxis: {
        data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      yAxis: {},
      series: [
        {
          type: "scatter",
          data: [220, 182, 191, 234, 290, 330, 310],
          symbolSize: 30,  //控制图形大小的像素值
          symbol:
            "path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z",
        },
      ],
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/bg.png");
  position: relative;
}
.circle {
  width: 150px;
  height: 150px;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 0 0 3px #7acaec;
  color: rgba(3, 166, 224, 0.3);
  position: absolute;
  top: 35px;
  left: 25px;
}
.h1 {
  font-size: 25px;
  color: cornflowerblue;
  text-align: center;
}
.table,
#main,
html,
body {
  width: 100%;
}
#box{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-evenly;
}
#demo
{
  width: 90%;
  height: 400px;
  margin: 0 auto;
  margin-top: 60px;
}
#demo2,
#demo3{
  width: 50%;
  height: 400px;
}
</style>
