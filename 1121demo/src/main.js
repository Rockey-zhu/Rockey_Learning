import Vue from "vue";
import App from "./App"; // App should be imported if it's a component
import ViewUI from "view-design";
import router from 'vue-router'
import "view-design/dist/styles/iview.css";

Vue.use(ViewUI);

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");