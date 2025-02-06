import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './assets/css/common.css'
import './plugins/element.js'
import less from 'less'

Vue.config.productionTip = false
Vue.use(less)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

// var obj = {
//     name: 'kerwin',
//     age: 100
// }
// console.log(obj)