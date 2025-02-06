import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min';


Vue.config.productionTip = false
    //引入store 将store变成一个全局的仓库
import store from './store';




Vue.use(ViewUI);

//实例app对象中进行配置store对象

new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app')