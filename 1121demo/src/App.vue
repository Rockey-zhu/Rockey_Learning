<template>
  <div id="app">
    <Menu :theme="theme3" active-name="1">
      <MenuGroup title="内容管理">
        <MenuItem name="1">
          <Icon type="md-document" />
          文章管理
        </MenuItem>
        <MenuItem name="2">
          <Icon type="md-chatbubbles" />
          评论管理
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="统计分析">
        <MenuItem name="3">
          <Icon type="md-heart" />
          用户留存
        </MenuItem>
        <MenuItem name="4">
          <Icon type="md-leaf" />
          流失用户
        </MenuItem>
      </MenuGroup>
      <MenuGroup title="颜色调整">
        <MenuItem name="8">
          <RadioGroup v-model="theme3">
            <Radio label="light"></Radio>
            <Radio label="dark"></Radio>
          </RadioGroup>
        </MenuItem>
      </MenuGroup>
    </Menu>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {},
  data() {
    return {
      theme3: "light",
    };
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
}
.ivu-menu {
  height: 100vh;
}
</style>
