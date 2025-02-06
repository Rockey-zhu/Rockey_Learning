<template>
  <div class="about">
   <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Slide 1</div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
<!--    <div class="swiper-scrollbar"></div>-->
  </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  export default {
    name:'About',
    data(){
      return {
      }
    },
    mounted() {
      new Swiper ('.swiper-container', {
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        // scrollbar: '.swiper-scrollbar',
        //如果需要自动切换海报
        // autoplay: {
        //   delay: 1000,//时间 毫秒
        //   disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true
        // },
      })
    }
  }
</script>
<style scoped>
  .swiper-container{
  height: 500px;
  width: 100%;
}

 .swiper-wrapper .swiper-slide{
      width: 100%;
      height: 100%;
      background-color: #42b983;
      text-align: center;
      line-height: 500px;
    }
</style>
