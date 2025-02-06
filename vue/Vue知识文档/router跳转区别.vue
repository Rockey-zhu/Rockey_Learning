 <!--{
     router对象提供了三个function用于跳转链接。

     router.push( ... ) =>跳转到某个子页面，并在history中添加一条记录

     router.repalce( ... ) =>替换当前的页面，其实也可以理解为跳转，和push的区别就是不会在history中添加记录

     router.go(number) =>刚才提到的history，在go()中被使用，跳转到上一页就go(-1)，跳转到下一页就go(1)，当然实现跳转的前提都是history中有记录。

 }
-->
<!--页面过渡
<trasnsition>组件
<template>
  <div id="app">
    <transition name='fade' mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
 
<script>
export default {
  name: 'App'
}
</script>
 
<style>
  body{
    margin:0
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

-->
<!--多个组件的过渡-->

<template>
   <transition name="component-fade" mode="out-in">
        <component v-bind:is="view"></component>
    </transition>
</template>
<script>
   new Vue({
  el: '#transition-components-demo',
  data: {
    view: 'v-a'
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }
})
</script>
<style>
   .component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>


