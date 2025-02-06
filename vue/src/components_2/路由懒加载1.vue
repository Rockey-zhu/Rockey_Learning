<template>
    <div class="body">我是页面1
        <button @click="$router.push('/路由懒加载2')">跳转到页面2</button>
    </div>
    
</template>

<script>
console.log('我是页面1，我在script标签里面写了一句话')
export default {
    
}
</script>

<style>
    .body{
        background-color: aquamarine;
    }
</style>

<!--探究一下vue-router
import vueRouterPlay1 from '@/page/vueRouterPlay/vueRouterPlay1.vue'
import vueRouterPlay2 from '@/page/vueRouterPlay/vueRouterPlay2.vue'
路由懒加载
const vueRouterPlay1 = () => import('@/page/vueRouterPlay/vueRouterPlay1.vue')
const vueRouterPlay2 = () => import('@/page/vueRouterPlay/vueRouterPlay2.vue')
-->