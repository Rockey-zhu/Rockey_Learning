<template>
  <div>
    <div>
      搜索：
      <input type="text" v-model="search" />
    </div>
    <div>
      状态机的值
      <h3>{{ counter }}</h3>
    </div>
  </div>
</template>

<script>
//vuex提供的快捷读取state方式
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  //专门用来读取vuex的数据
  computed: {
    ...mapState(["counter"]),
  },
  watch: {
    search(newValue, oldValue) {
      this.$emit("searchEvent", newValue);
    },
  },
};
</script>

<style>
</style>