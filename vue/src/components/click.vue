<template>
    <div id="app">
        <input type="text" name="username" v-model="username" value=""/>
        <p>{{username}}</p>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                username:"小明"
            }
        },
        methods: {
           
        }
    }
</script>