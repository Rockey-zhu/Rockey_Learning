//  组件 ====>   全局组件  局部组件    封装起来可以反复使用的

//全局组件

//语法  Vue.component(tagName,options)
//参数  tagName 组件名陈      options 配置项     data 数据 返回值  是个函数   template  包裹div(html结构)的模板

{
    /* <html>
    <body>
        <div id="app">
            //渲染组件
            <counter></counter>
        </div>

        <!-
            1.template的标签一定要于上面的div平级
            2.给一个id用于关联
            3.同样需要一个父级
        --->
        <template id="btn">
            <div>
                <button @click="add">点击{{count}}</button>
            </div>
        </template>
    <script>
        //全局组件
        vue.component('counter',{                //标签名  避免用驼峰命名法   标签名会渲染不出来
            //template:'<button>按钮</button>'       ***template 所有的标签都需要放在一个父级当中，包裹起来

            ==>  可以写成   template:'#btn', 
                            data(){
                                return{
                                    count:0,
                                }
                            },
                            methods:{
                                add(){
                                    this.count++;    //点击+1    事件方法
                                }
                            }
                        });
        //实例化
        new Vue({
            el:'#app'
        });
    </script>
    </body>
    </html> */
}