<template>
  <div class="personHome">
    <div class="itemLeft" @click="hanleMoveHome">
      <svg class="icon">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <span>返回</span>
    </div>
    <img class="topBgImg" :src="this.peoples.backgroundUrl" alt="" />
    <div class="infoUserTop">
      <img :src="this.peoples.avatarUrl" class="profileimg" />
      <div class="name">{{ this.peoples.nickname }}</div>
      <!-- <div class="userBasic">
        <div class="gender">{{ this.person.gender }}</div>
        <div class="birthday">{{ this.person.birthday }}</div>
        <div class="provice">{{ this.person.province }}</div>
        <div class="city">{{ this.person.city }}</div>
      </div> -->
      <div class="signature">个人签名:{{ this.peoples.signature }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      peoples: {
        backgroundUrl: "", //用户顶部背景图
        avatarUrl: "", //用户头像
        avatarUrl: "", //用户头像
        nickname: "", //用户名
        signature: "", //用户个签
      },
      // person: {
      //   gender: "",
      //   birthday: "",
      //   province: "",
      //   city: "",
      // },
    };
  },
  // computed: {
  //   ...mapState(["user"]),
  // },
  mounted() {
    var peoplesDetail = JSON.parse(sessionStorage.getItem("peoplesDetail"));
    console.log(peoplesDetail, "@22");
    if (peoplesDetail) {
      this.infoUserInformation(peoplesDetail);
    } else {
      alert("用户身份信息过期，请重新登录!");
      this.$router.push({
        path: "/login",
      });
    }
  },
  methods: {
    infoUserInformation(peoplesDetail) {
      //获取接口返回的个人信息渲染dom
      if (peoplesDetail) {
        this.peoples.backgroundUrl = peoplesDetail.backgroundUrl;
        this.peoples.avatarUrl = peoplesDetail.avatarUrl;
        this.peoples.nickname = peoplesDetail.nickname;
        this.peoples.signature = peoplesDetail.signature;
        // this.person.gender = peoplesDetail.gender;
        // this.person.birthday = peoplesDetail.birthday;
        // this.person.province = peoplesDetail.province;
        // this.person.city = peoplesDetail.city;
      }
    },
    hanleMoveHome() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
<style lang="less" scoped>
.personHome {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #e4e4e475;
  .itemLeft {
    width: 100%;
    height: 50px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: left;
    span {
      font-size: 16px;
      font-weight: 500;
    }
    z-index: 2;
  }
  .topBgImg {
    width: 100%;
    height: 300px;
    position: absolute;
    top: -70px;
    z-index: 1;
  }
  .infoUserTop {
    width: 96%;
    height: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background: #fff;
    border-radius: 10px;
    position: relative;
    top: 160px;
    z-index: 2;
    .profileimg {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
    .name {
      font-weight: 700;
      font-size: 18px;
    }
    .userBasic {
      display: flex;
      padding: 0px 10px;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 30px;
      background: rgb(236, 187, 187);
      .gender {
        width: 15%;
        height: 100%;
        background: antiquewhite;
      }
      .birthday {
        width: 20%;
        height: 100%;
        background: antiquewhite;
      }
      .provice {
        width: 20%;
        height: 100%;
        background: antiquewhite;
      }
      .city {
        width: 20%;
        height: 100%;
        background: antiquewhite;
      }
    }
    .signature {
      padding: 10px;
      font-size: 14px;
      text-align: center;
    }
  }
}
</style>
