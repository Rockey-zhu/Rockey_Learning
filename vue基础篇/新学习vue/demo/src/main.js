import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.prototype.$axios = Axios //把axios存到Vue的原型上是为了在其他的组件里面都可以使用

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')


/*
1.全局守卫 （在所有路由展示前触发）
  router.beforeEach((to,from,next)=>{//在引入router组件的页面里使用(main.js)
       
      to     即将要进入到的路由，值为路由
      from   离开的路由（从哪个路由离开）,值为路由
      next   值为函数，这个函数决定你换下来要展示的路由页面

  });


  2.后置钩子(在所有路由展示后触发)
    router.afterEach((to,from)=>{   //在引入router组件的页面里使用(main.js)

      to  即将要进入的路由，值为路由
      from  离开的路由（从哪个路由离开）,值为路由
    });

  3.路由独享的守卫(在当前路由展示前触发)
  beforeEnter(to,from,next){    //在路由内部使用
      to     即将要进入到的路由，值为路由
      from    离开的路由(从哪个理由离开),值为路由
      next    值为函数,这个函数决定你接下来要展示的路由页面

  };

  4.组件内的守卫
    beforeRouteEnter(to,from,next){    //在路由组件内使用
        //在当前路由被展示前调用
    };

    beforeRouteUpdate(to,from,next){    //在路由组件内使用
        //在当前路由改变时调用
    };

    beforeRouteLeave(to,from,next){    //在路由组件内使用
        //在离开当前路由时调用
    };
*/


//  全局守卫
// router.beforeEach((to, from, next) => {
//     if (to.path === '/login') { //如果点击的是登录的那个路由，那直接跳转
//         next();
//     } else { //如果点击的不是登录的路由，直接跳转到登录页
//         alert("你还没有登录，请登录！")
//         next('/login')
//     }
// });