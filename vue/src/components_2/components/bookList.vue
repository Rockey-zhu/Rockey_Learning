<template>
  <div class="book-list">
    <div class="header">
      <div class="headering">{{ heading }}</div>
      <div class="more">更多...</div>
    </div>
    <div class="book-item">
      <div
        v-for="book in books"
        :key="book.id"
        class="book"
        @click="handleDetail(book)"
      >
        <div class="cover">
          <img :src="book.img_url" />
        </div>
        <div class="book-explain">
          <div class="title">{{ book.title }}</div>
          <div class="authors">{{ book.authors | join }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "heading",
    "books", //图书对象数组
  ],
  filters: {
    join(args) {
      return args.join(",");
    },
  },
  methods: {
    handleDetail(book) {
      console.log(book);
      //本地存储到页面中，刷新页面不丢失
      sessionStorage.setItem("BookDetailInfo", JSON.stringify(book));
      this.$router.push({
        replace: true,
        name: "details",
        params: {
          book,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.book-list {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headering {
      font-size: 25px;
      font-weight: 500;
      padding: 10px 20px;
    }
    .more {
      font-size: 20px;
      font-weight: 500;
      padding: 10px 20px;
      cursor: pointer;
    }
  }
  .book-item {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .book {
      width: 30%;
      word-wrap: break-word;
      display: column;
      margin: 10px;
      justify-content: space-between;
      cursor: pointer;
      .cover {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .book-explain {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          width: 60%;
          font-size: 16px;
        }
        .authors {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
