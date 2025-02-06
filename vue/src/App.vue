<template>
  <div id="app">
    状态机的值:
    <p>{{ $store.state.counter }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "App",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100vh;
  /* width: 100vw; */
  background-image: linear-gradient(
    to right,
    rgb(168, 237, 234) 0%,
    rgb(254, 214, 227) 100%
  );
}
</style>
