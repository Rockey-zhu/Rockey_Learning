<template>
  <div class="book-details">
    <h2>图书详情</h2>
    <div class="details-box">
      <div class="header">
        <img src="../assets/back.svg" @click="back" />
        <div class="title">{{ title }}</div>
      </div>
      <div class="content">
        <div class="leftContent">
          <img :src="img_url" />
        </div>
        <div class="rightContent">
          <div><span>作者：</span>{{ authors }}</div>
          <div class="bookDetails"><span>小说介绍：</span>{{ content }}</div>
        </div>
      </div>
      <div class="buyIt">
        <div class="button">购买</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      authors: "",
      img_url: "",
      content: "",
    };
  },
  methods: {
    initData(entityData) {
      if (entityData) {
        this.title = entityData.title;
        this.img_url = entityData.img_url;
        this.authors = entityData.authors.join(",");
        this.content = entityData.content;
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    if (!this.$route.params.book) {
      const BookDetailInfo = JSON.parse(
        sessionStorage.getItem("BookDetailInfo")
      );
      console.log("BookDetailInfo", BookDetailInfo);
      this.initData(BookDetailInfo.book);
    }
  },
  mounted() {
    // this.img_url = $route.book.img_url;
    //console.log(this.$route.params.book); //params去接收
    this.initData(this.$route.params.book);

    // this.book.img_url = this.$route.params.book.img_url;
    // this.book.title = this.$route.params.book.title;
    // this.book.content = this.$route.params.book.content;
    // this.book.authors = this.$route.params.book.authors;
    // this.book.authors = this.book.authors.join(",");
    // console.log(this.book.img_url);
    // console.log(this.book.authors);
  },
  watch: {
    $route(to, from) {
      this.initData(this.$route.params.book);
    },
  },
};
</script>
<style lang="less" scoped>
.book-details {
  width: 100%;
  height: 100%;
  background-image: url("../assets/tuPic/02.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  .details-box {
    width: 50%;
    height: 500px;
    background: #fff;
    border-radius: 5px;
    .header {
      height: 50px;
      width: 100%;
      display: flex;
      font-size: 20px;
      font-weight: 500;
      //   justify-content: space-between;
      border-bottom: 1px solid grey;
      align-items: center;
      img {
        cursor: pointer;
      }
      .title {
        margin: 0 auto;
      }
    }
    .content {
      display: flex;
      width: 100%;
      height: 35%;
      align-items: flex-end;
      justify-content: space-around;
      flex-wrap: wrap;
      .leftContent {
        width: 30%;
        img {
          width: 80%;
        }
      }
      .rightContent {
        width: 40%;
      }
    }
    .buyIt {
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10%;
      .button {
        font-size: 24px;
        // width: 60%;
        // height: 60px;
        padding: 1% 20%;
        background: cornflowerblue;
        border-radius: 10px;
        text-align: center;
      }
    }
  }
}
</style>
