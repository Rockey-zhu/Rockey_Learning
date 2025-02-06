<template>
    <div>
        <button @click="handleleft">left</button>
        {{myname}}
        <button v-show="myright">right</button>

        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        myname:{
            type:String,
            defalut:''
        },
        myright:{
            type:Boolean,
            defalut:true,
        }
    },
    methods: {
        handleleft(){
            this.$emit('event')  //子传父
        }
    },
   
}
</script>
<style lang="less" scoped>
    div{
        background: #f60;
    }
</style>