<template>
  <div class="c">
    <div>
      <Input
        v-model="value"
        placeholder="Enter something..."
        style="width: 300px"
      />
      <button @click="value++">点击加一</button>
      <button @click="value--">点击减一</button>
    </div>
    <div>
       <router-link to=""></router-link>
    </div>
    <hr>
    <div class="click_count">
      <h1>点击数量：{{count}}</h1>
      <button @click="addEvent">添加点击数</button>
    </div>


  <!-- VueX的方式 -->
  <div>
   <h1>Vuex的方式</h1>
   <h1>点击数量：{{$store.getters.getNum}}</h1>
   <button @click="$store.state.num++">添加点击数</button>
   </div>

<!-- vuex例子2 点击一次数量乘以2 -->
   <div>
   <h1>Vuex的方式</h1>
   <h1>点击数量*2：{{$store.state.number}}</h1>
   <button @click="clickAction">添加点击数</button>
   </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      value: "1",
      count:0,
    };
  },
  methods: {
    addEvent:function(){
      this.count++;
    },
    emitAction:function(){
      //采用Vuex可以在共享数据时，不混乱
      //可以随时看到方法在修改数据
      this.$store.commit('addNum')
    },
    clickAction:function(){
      this.$store.commit('addNumber')
    }
  },
  mounted(){
    console.log(this)
  }
};
</script>
