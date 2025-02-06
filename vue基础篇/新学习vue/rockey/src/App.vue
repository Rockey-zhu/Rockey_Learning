<template>
  <div id="app">
    hello app {{myname}}
    <img src="/demo.gif"/>
    <input type="text" v-model="mytext"/>
    <Button @click="handleAdd">add</Button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{data}}
      </li>
    </ul>
    <navbar  :myright="false" @event="handleleft">
      <div>22222</div>
    </navbar>
    <siderbar v-show="isShow"></siderbar>
    <!-- <router-view></router-view> -->
  </div>
</template>


<script>
import navbar from './components/Navbar.vue'
import siderbar from './components/Siderbar.vue'
export default {
  data() {
    return {
      myname:'许诺',
      mytext:'',
      datalist:[],
      isShow:false
    }
  },
  name: 'app',
  components: {
    navbar,
    siderbar
  },
  methods: {
    handleAdd(){
      console.log(this.mytext)
        this.datalist.push(this.mytext)
    },
    handleleft(){
      this.isShow=! this.isShow
    },
  },
  computed:{

  },
  watch:{

  }
}
</script>

<style>

ul li{
  background: skyblue;
}
</style>
