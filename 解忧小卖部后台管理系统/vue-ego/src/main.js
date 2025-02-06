import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/common.css'
import './router/permission'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')