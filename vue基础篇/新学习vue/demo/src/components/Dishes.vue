<template>
    <h2>这是菜品页</h2>
</template>

<script>
export default {
    data(){
        return{
            name:'许诺'
        }
    },
    beforeRouteEnter(to,from,next){    //在路由组件内使用
        //在当前路由被展示前调用
        // alert('你好,欢迎点餐！')
        next(vm=>{
            alert('你好'+ vm.name+'，欢迎点餐！')
        })
    },

    beforeRouteLeave(to,from,next){    //在路由组件内使用
        //在离开当前路由时调用
        // alert('欢迎下次再来！')
        const answer=confirm('你确定要下单嘛！');
        if(answer){
            next();
        }else{
            next(false)
        }
    },
}
</script>