<template>
  <div id="app">
    <h1>v-jsoneditor Demo</h1>
    <json-editor
      v-model="jsonData"
      :options="editorOptions"
      @change="onChange"
    ></json-editor>
    <button @click="logJson">Log JSON</button>
    <select v-model="currentMode" @change="updateMode">
      <option value="tree">Tree</option>
      <option value="code">Code</option>
      <option value="form">Form</option>
      <option value="text">Text</option>
      <option value="view">View</option>
    </select>
  </div>
</template>

<script>
import JsonEditor from "v-jsoneditor";

export default {
  components: {
    JsonEditor
  },
  data() {
    return {
      jsonData: {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "gaming", "coding"]
      },
      editorOptions: {
        mode: "tree" // 可以选择 'tree', 'view', 'form', 'code', 'text'
      }
    };
  },
  methods: {
    onChange() {
      console.log("JSON data changed:", this.jsonData);
    },
    logJson() {
      console.log("Current JSON data:", this.jsonData);
    },
    updateMode() {
      this.editorOptions.mode = this.currentMode; // 更新编辑器模式
    }
  }
};
</script>

<style></style>
