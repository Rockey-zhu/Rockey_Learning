<template>
   <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default{
        data(){
            return{
                value2:0
            }
        }
    }
</script>
<style scoped>
    .demo-carousel{
        width:100%;
        height: 200px;
        background: powderblue;
    }
</style>