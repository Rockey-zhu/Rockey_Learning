import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import * as echarts from 'echarts';
//引入store 将store变成一个全局的仓库
import store from './store/index';
Vue.use(ViewUI, echarts);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store: store,
    components: { App },
    template: '<App/>',
})