import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store from './store/index';
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
    store: store,
    router: router,
    render: h => h(App)
}).$mount('#app')