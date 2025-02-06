import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//封装按需加载组件
import getVant from './plugins'
//引入组件样式
// import 'vant/lib/index.css'
const app = createApp(App)
app.use(store).use(router).mount('#app')
getVant(app)