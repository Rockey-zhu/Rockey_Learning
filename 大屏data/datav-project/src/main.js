import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import './index.css'
import * as echarts from 'echarts';

//引入store 将store变成一个全局的仓库

Vue.config.productionTip = false
Vue.use(dataV)
Vue.use(echarts);

new Vue({
    render: h => h(App),
}).$mount('#app')