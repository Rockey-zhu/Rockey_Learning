<template>
  <div>
    <router-view />
    <FooterMusic v-show="$store.state.isFooterMusic"/>
  </div>
</template>

<script>
import FooterMusic from "./components/item/FooterMusic.vue";
export default {
  components: {
    FooterMusic,
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.6rem;
  height: 0.6rem;
}
a {
  color: black;
}
</style>
