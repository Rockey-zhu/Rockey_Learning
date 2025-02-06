import Vue from 'vue'
import VueRouter from 'vue-router'
import first from '../components/first.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: first,

    },
    {
        path: '/type',
        component: () => {
            import ("../components/type.vue")
        },
    },
    {
        path: '/my',
        component: () => {
            import ("../components/my.vue")
        },
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router