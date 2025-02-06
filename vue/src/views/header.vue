<template>
  <div class="header_nav">
    <Menu mode="horizontal">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            {{$t("venueTemperature")}}
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            {{$t("venueHumidity")}}
        </MenuItem>
        <MenuItem name="3">
            <Icon type="ios-stats" />
            {{$t("outdoorTemperature")}}
        </MenuItem>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            {{$t("outdoorHumidity")}}
        </MenuItem>
        <Select v-model="locale" @on-change="changeLangFn" style="width:100px" placeholder="切换语言">
          <Option v-for="(item,index) in changeLang" :value="item.value" :key="index">{{item.label}}</Option>
        </Select>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      locale: [],
      changeLang: [
        {
          value: "zh",
          label: "简体中文"
        },
        {
          value: "en",
          label: "English"
        },
        {
          value: "tc",
          label: "繁體中文"
        }
      ]
    };
  },
  mounted() {
    // this.$i18n.locale 要传key
    this.locale = this.$i18n.locale;
    this.changeLangFn(this.locale);
  },
  methods: {
    //   切换多语言
    changeLangFn(val) {
      let chan = this.changeLang;
      for (let i in chan) {
        if (chan[i].value === val) {
          this.locale = this.$i18n.locale = chan[i].value;
          localStorage.setItem("language", chan[i].value);
        }
      }
    }
  }
};
</script>
