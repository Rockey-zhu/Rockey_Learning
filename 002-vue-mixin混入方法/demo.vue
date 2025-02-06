<!--直接引入 写好的mixin 函数，里面的方法 可以直接在页面中使用-->
<template>
  <div class="uploadClass">
    <Upload
      ref="upload"
      type="drag"
      :format="[]"
      :max-size="uploadMaxSize"
      :paste="true"
      name="myfile"
      :headers="headers"
      :before-upload="handleBeforeUpload"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :on-progress="hanleUploadProgress"
      :on-success="handleUploadSuccess"
      :on-error="handleUploadFileError"
      :action="importUploadAction"
      :show-upload-list="false"
    />
  </div>
</template>
<script>
import demoMixin from "./demoMixin.js";
export default {
  mixins: [demoMixin],
  data() {
    return {};
  },
};
</script>
