<template>
  <div>
    <div ref="jsoneditor" style="width: 100%; height: 400px;"></div>
    <!-- <button @click="logJson">Log JSON</button> -->
  </div>
</template>

<script>
import JSONEditor from "jsoneditor";

export default {
  name: "JsonEditorComponent",
  props: {
    value: [Object, Array, Number, String, Boolean],
    mode: {
      type: String,
      default: "tree"
    },
    modes: {
      type: Array,
      default: function() {
        return ["tree", "code", "form", "text", "view"];
      }
    }
  },
  data() {
    return {
      editor: null,
      jsonData: {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "gaming", "coding"]
      }
    };
  },

  mounted() {
    // 创建 JSON 编辑器实例
    const options = {
      mode: this.mode,
      modes: this.modes // 允许的模式
    };

    this.editor = new JSONEditor(this.$refs.jsoneditor, options);
    this.editor.set(this.jsonData);
  },
  methods: {
    logJson() {
      const json = this.editor.get();
      console.log("Current JSON data:", json);
    }
  },
  beforeDestroy() {
    // 清理 JSON 编辑器实例
    if (this.editor) {
      this.editor.destroy();
    }
  }
};
</script>

<style scoped>
/* 你可以在这里添加样式 */
</style>
