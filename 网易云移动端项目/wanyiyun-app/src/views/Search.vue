<template>
  <div>
    <div class="searchTop">
      <svg class="icon" aria-hidden="true" @click="goForsite()">
        <use xlink:href="#icon-zuojiantou"></use>
      </svg>
      <input
        type="text"
        placeholder="林俊杰"
        v-model="searchKey"
        @keydown.enter="enterKey"
      />
    </div>
    <div class="searchHistory">
      <span class="searchSpan">历史</span>
      <span
        v-for="item in keyWorldList"
        :key="item"
        class="spanKey"
        @click="searchHistory(item)"
        >{{ item }}</span
      >
      <svg class="icon" aria-hidden="true" @click="delHistory">
        <use xlink:href="#icon-icon"></use>
      </svg>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" >
          <span class="leftSpan">{{ i + 1 }}</span>
          <div @click="updateIndex(item)">
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.ar" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" @click="handleMv(item)" v-if="item.mv != 0">
            <use xlink:href="#icon-chakanMV"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-caidan1"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSearchMusic } from "@/request/api/home.js";
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: "",
      searchList: [],
    };
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList"))
      ? JSON.parse(localStorage.getItem("keyWorldList"))
      : [];
  },
  methods: {
    enterKey: async function () {
      if (this.searchKey != "") {
        this.keyWorldList.unshift(this.searchKey);
        //去重
        this.keyWorldList = [...new Set(this.keyWorldList)];
        // console.log([...new Set(this.keyWorldList)])
        //固定长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.splice(this.keyWorldList.length - 1, 1);
        }
        localStorage.setItem("keyWorldList", JSON.stringify(this.keyWorldList));
        let res = await getSearchMusic(this.searchKey);
        console.log(res, "suoshou");
        this.searchList = res.data.result.songs;
        this.searchKey = "";
      }
    },
    delHistory() {
      localStorage.removeItem("keyWorldList");
      this.keyWorldList = [];
    },
    searchHistory: async function (item) {
      let res = await getSearchMusic(item);
      console.log(res, "suoshou");
      this.searchList = res.data.result.songs;
    },
    updateIndex:function(item){
      this.$store.commit("pushPlayList",item)
      this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
    },
    goForsite(){
      //返回首页
      this.$router.push({path:'/'})
    },
    handleMv(){
       this.$router.push({path:'/Mv'})
    }
  },
};
</script>

<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.2rem;
    border: none;
    border-bottom: 1px solid #999;
    width: 90%;
    padding: 0.1rem;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .searchSpan {
    font-weight: 700;
  }
  .spanKey {
    padding: 0.1rem 0.2rem;
    background-color: rgb(185, 169, 169);
    border-radius: 0.4rem;
    margin: 0.1rem 0.2rem;
    display: inline-block;
  }
  .icon {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    right: 0.2rem;
  }
 
}
 .itemList {
    width: 100%;
    padding-bottom: 1.4rem;
    .item {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .itemLeft {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .leftSpan {
          display: inline-block;
          width: 0.2rem;
          text-align: center;
        }
        div {
          p {
            width: 4.54rem;
            height: 0.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-weight: 700;
          }
          span {
            font-weight: 400;
            font-size: 0.24rem;
            color: #999;
          }
          margin-left: 0.3rem;
        }
      }
      .itemRight {
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        position: relative;
        .icon {
          fill: #999;
        }
        .bofang {
          position: absolute;
          left: 0;
        }
        .liebiao {
          position: absolute;
          right: 0;
        }
      }
    }
  }
</style>
