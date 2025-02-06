<!--
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2023-06-26 10:23:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2023-07-11 11:42:04
-->
<template>
  <div class="blurPic">
    <div class="BgPic">
      <h1>图书列表</h1>
      <Carousel autoplay v-model="value" loop class="loopPic">
        <CarouselItem v-for="(item, index) in loopPics" :key="index">
          <img :src="item.src" />
        </CarouselItem>
      </Carousel>
      <div style="display:flex;width:100%;height:80%;justify-content: center;">
        <div class="section">
          <bookList
            :books="latestUpdated.books"
            :heading="latestUpdated.heading"
          >
          </bookList>
        </div>
        <div class="section">
          <bookList :books="recommended.books" :heading="recommended.heading">
          </bookList>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bookList from "./components/bookList.vue";
export default {
  data() {
    return {
      value: 0,
      announcement: "今日上架图书全部8折",
      latestUpdated: {
        heading: "最新更新",
        books: [
          {
            id: 1,
            title: "揭开数据真相",
            authors: ["Edward", "Daniel"],
            img_url: require("../assets/tuPic/01.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 2,
            title: "Android 高级进阶",
            authors: ["顾浩鑫"],
            img_url: require("../assets/tuPic/02.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 3,
            title: "淘宝天猫电商运营与数据化选品完全手册",
            authors: ["老夏"],
            img_url: require("../assets/tuPic/03.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 4,
            title: "大数据架构详解",
            authors: ["朱洁", "罗华霖"],
            img_url: require("../assets/tuPic/04.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 5,
            title: "Meteor 全栈开发",
            authors: ["杜亦舒"],
            img_url: require("../assets/tuPic/05.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 6,
            title: "Meteor 全栈开发",
            authors: ["杜亦舒"],
            img_url: require("../assets/tuPic/12.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 7,
            title: "Meteor 全栈开发",
            authors: ["杜亦舒"],
            img_url: require("../assets/tuPic/13.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 8,
            title: "Meteor 全栈开发",
            authors: ["杜亦舒"],
            img_url: require("../assets/tuPic/14.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
        ],
      },
      recommended: {
        heading: "编辑推荐",
        books: [
          {
            id: 1,
            title: "夏天",
            authors: ["Edward", "Daniel"],
            img_url: require("../assets/tuPic/06.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 2,
            title: "同桌的你",
            authors: ["顾浩鑫"],
            img_url: require("../assets/tuPic/07.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 3,
            title: "时至那时",
            authors: ["老夏"],
            img_url: require("../assets/tuPic/08.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 4,
            title: "匆匆那年",
            authors: ["朱洁", "罗华霖"],
            img_url: require("../assets/tuPic/09.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
          {
            id: 5,
            title: "网易全栈",
            authors: ["杜亦舒"],
            img_url: require("../assets/tuPic/10.jpg"),
            content:
              "描述了寂静的夜里,月亮爬了上来,伴着秋天的小风,一片片小叶缓缓飘荡,我和几位小伙伴躺在草坪上,心旷神怡,望着浩瀚的星空,我心头一亮...",
          },
        ],
      },
      loopPics: [
        {
          id: 1,
          src: require("../assets/tuPic/01.jpg"),
        },
        {
          id: 2,
          src: require("../assets/tuPic/02.jpg"),
        },
        {
          id: 3,
          src: require("../assets/tuPic/03.jpg"),
        },
        {
          id: 4,
          src: require("../assets/tuPic/04.jpg"),
        },
        {
          id: 5,
          src: require("../assets/tuPic/05.jpg"),
        },
        {
          id: 6,
          src: require("../assets/tuPic/06.jpg"),
        },
      ],
    };
  },
  components: {
    bookList,
  },
};
</script>
<style scoped>
.blurPic {
  width: 100%;
  height: calc(100% - 100px);
  background-image: url("../assets/tuPic/09.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
}
.loopPic {
  width: 60%;
  height: 300px;
  /* background: cornflowerblue; */
}
.BgPic {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/tuPic/09.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: cover;
}
.section {
  width: 40%;
  max-height: 600px;
  min-height: 400px;
  overflow-y: scroll;
  background: rgb(241, 226, 226);
  margin: 10px 30px;
}
.section::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.section::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: #e2d8d8;
  box-shadow: inset 0 0 5px rgb(145, 229, 255);
}

.section::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #ededed;

  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(224, 199, 199, 0.89);
}

img {
  width: 100%;
  height: 300px;
}
</style>
