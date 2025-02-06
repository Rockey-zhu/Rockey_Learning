<template>
  <div class="topNav">
    <div class="topleft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon1"></use>
      </svg>
    </div>
    <div class="topContent">
      <span @click="handleMe">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <div class="topright">
      <svg class="icon" aria-hidden="true" @click="handleSearch">
        <use xlink:href="#icon-icon-test"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSearch() {
      this.$router.push({
        path: "/search",
      });
    },
    handleMe() {
      this.$router.push({
        path: "/infoUser",
      });
    },
  },
};
</script>

<style lang="less" scoped>
.topNav {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topContent {
    width: 65%;
    display: flex;
    height: 100%;
    justify-content: space-around;
    font-size: 0.36rem;
    .active {
      font-weight: 900;
    }
  }
}
</style>