<template>
    <div id="app">
        <p>{{ message }}</p>
        <button @click="btn">改变按钮</button>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                message:"xunuo is boy",
            }
        },
         beforeCreate: function() {
                console.group('beforeCreate 创建前状态===============》',new Date());
                console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
                console.log("%c%s", "color:red", "data   : " + this.$data); //undefined
                console.log("%c%s", "color:red", "message: " + this.message) //undefined
            },
       created: function() {
                console.group('created 创建完毕状态===============》');
                console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
                console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
            },
            beforeMount: function() {
                console.group('beforeMount 挂载前状态===============》');
                console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
                console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
            },
            mounted: function() {
                console.group('mounted 挂载结束状态===============》',new Date());
                console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
                console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
            },
            beforeUpdate: function() {
                console.group('beforeUpdate 更新前状态===============》',new Date());
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            updated: function() {
                console.group('updated 更新完成状态===============》');
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            beforeDestroy: function() {
                console.group('beforeDestroy 销毁前状态===============》');
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message);
            },
            destroyed: function() {
                console.group('destroyed 销毁完成状态===============》');
                console.log("%c%s", "color:red", "el     : " + this.$el);
                console.log(this.$el);
                console.log("%c%s", "color:red", "data   : " + this.$data);
                console.log("%c%s", "color:red", "message: " + this.message)
            },

            methods: {
                btn() {
                    this.message = "德莉莎世界第一可爱"
                }
            }
      
    }
</script>