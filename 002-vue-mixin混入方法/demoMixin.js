import { mapActions, mapState, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      uploadMaxSize: 1048576, // 1g [1048576] 2m  2048
      headers: {},
      FileLoading: false,
      ProjectId: ""
    };
  },
  computed: {
    importUploadAction() {
      return (
        this.$store.state.common.apiURL +
        "FileUpload/Upload/" +
        this.Tid +
        "/" +
        this.Sid +
        "/" +
        this.ListSelected +
        "/" +
        `?ProjectId=${this.ProjectId}`
      );
    },
  },
  methods: {
    ...mapActions("admin", ["GetToken"]),

    handleSuccess(res, file) {
      // this.pageCurrent = 1;
      //   this.setTbCoreFileuploads({
      //     pageCurrent: 1,
      //   });
      //   this.search();
      //   this.importErrMsg = res.msg;
    },
    hanleUploadProgress() {
      this.FileLoading = true; //上传时显示加载动画
    },
    // handleUploadSuccess(res, file) {
    //   this.FileLoading = false; //上传成功关闭动画
    //   this.upload_modal = false; //关闭modal
    // },
    handleUploadFileError() {
      this.FileLoading = false;
      this.$Message.error(this.$t("UploadFailed"));
    },
    "Key-blur"() {
      this.$f.changeField("Key", this.$f.getValue("Key").toString().trim());
    },
    "LangCode-change"(value) {
      this.$f.changeField("LangCode", value);
      let _obj = this.SelectList.find((element) => element.LangCode === value);
      if (_obj) this.$f.changeField("LangId", _obj.Id);
      return value;
    },
    "goods_name-enter"(item) {
      if (item === "en-US") {
        this.$f.changeField("LangId", 1);
      } else {
        this.$f.changeField("LangId", 2);
      }
      return item;
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " + file.name + " is incorrect, please select xlsx.",
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc:
          "File  " +
          file.name +
          ` is too large, no more than ${this.uploadMaxSize / 1024}M`,
      });
    },
    handleBeforeUpload() {
      return this.GetToken().then((token) => {
        this.headers = {
          token: token,
        };
        return true;
      });
    },
  },
};
