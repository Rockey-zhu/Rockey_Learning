<template>
  <div class="hello">
    <button @click="routerTo">click here to news page</button>
  </div>
</template>

<script>
    export default{
        name:'HelloWorld',
        date(){
             return {
          
        }
    },
    methods:{
    routerTo(){
      this.$router.push({ name: 'news', params: { userId: 123 }});
    }
  }
}
</script>
<style>
  .hello{
      text-align: center;
  }
</style>