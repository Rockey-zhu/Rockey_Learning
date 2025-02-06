import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/main/Home.vue'
import Layout from '../views/main/Layout.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [{
                path: '',
                name: 'Home',
                component: Home,
                meta: {
                    isLogin: true,
                }
            },
            {
                path: 'Params',
                name: 'Params',
                component: () =>
                    import ("../views/main/Params.vue"),
                meta: {
                    isLogin: true,
                }
            },
            {
                path: 'Product',
                name: 'Product',
                component: () =>
                    import ("../views/main/Product.vue"),
                meta: {
                    isLogin: true,
                }
            },
            {
                path: 'ad',
                name: 'ADCategory',
                component: () =>
                    import ("../views/main/ADCategory.vue"),
                meta: {
                    isLogin: true,
                }
            },
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router