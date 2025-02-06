<template>
  <div id="app">
    <h1>jsoneditor Demo</h1>
    <vueJsoneditor :modes="modes" :mode="mode" />
  </div>
</template>

<script>
import vueJsoneditor from "@/component/vueJsoneditor";

export default {
  name: "App",
  components: {
    vueJsoneditor
  },
  data() {
    return {
      modes: ["code", "tree", "form", "text", "view"],
      mode: "code"
    };
  }
};
</script>

<style></style>
