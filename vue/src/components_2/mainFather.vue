<template>
  <div>
    <h3>Main父级</h3>
    <p>输入框的值：{{ search }}</p>
    <InputSearch @searchEvent="getSearch" />
  </div>
</template>

<script>
import InputSearch from "./components/InputSearch.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  components: {
    InputSearch,
  },
  methods: {
    getSearch(data) {
      console.log(data); //获取到子组件的输入值(newValue)
      this.search = data;
    },
  },
};
</script>

<style>
</style>