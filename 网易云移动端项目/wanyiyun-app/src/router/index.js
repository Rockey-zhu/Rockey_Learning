import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/itemMusic',
        name: 'ItemMusic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/ItemMusic.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/Search.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/infoUser',
        name: 'InfoUser',
        beforeEnter: (to, from, next) => {
            if (store.state.isLogin || store.state.token || localStorage.getItem('token')) {
                next()
            } else {
                next('/login')
            }
        },
        component: () =>
            import ('../views/InfoUser.vue')
    },
    {
        path: '/mv',
        name: 'Mv',
        component: () =>
            import ('../views/Mv.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), //历史模式
    routes
})

router.beforeEach((to, from) => {
    console.log(to, from, "1111")
    if (to.path == '/infoUser' || to.path == '/login') {
        store.state.isFooterMusic = false
    } else {
        store.state.isFooterMusic = true
    }
})
export default router