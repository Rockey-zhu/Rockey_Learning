<template>
  <div>
    <h1>{{ $store.state.number }}</h1>
    <Button @click="clickAction">点击加一</Button>
    <br>
     <p>{{$store.getters.getCount}}</p>
    <Button @click="$store.state.count++">点击</Button>  
    <!-- <button @click="$store.state.num++">添加点击数</button> -->
    
    <br>
    
  </div>
</template>
<style  scoped>
</style>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    clickAction: function () {
      this.$store.commit("addNumber");
    },
  },
};
</script>