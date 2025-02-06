<template>
    <div>
        <ul>
            <li>1111</li>
            <li>22222</li>
            <li>4444</li>
            <li>5555</li>
            <li>55333</li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        fetch("/test.json")
            .then(res =>res.json())
            .then(res=>{
                console.log(res.data.films)
            })  
    },
}
</script>
<style lang="less" scoped>
    ul li{
        background: cornflowerblue;
    }
</style>