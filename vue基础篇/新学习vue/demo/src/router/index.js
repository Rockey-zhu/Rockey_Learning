import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dishes',
        name: 'Dishes',
        component: () =>
            import ('../components/Dishes.vue')
    },
    {
        path: '/order',
        name: 'Order',
        component: () =>
            import ('../components/Order.vue')
    },
    {
        path: '/manage',
        name: 'Manage',
        //路由独享的守卫
        beforeEnter(to, from, next) {
            alert('非登录状态下无法管理,请登录！');
            next('/login')
        },
        component: () =>
            import ('../components/Manage.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../components/Login.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../components/Register.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../components/about/About.vue'),

        children: [{
                path: '/about/intro',
                name: 'Intro',
                component: () =>
                    import ('../components/about/Intro.vue')
            },
            {
                path: '/about/join',
                name: 'Join',
                component: () =>
                    import ('../components/about/Join.vue')
            },
            {
                path: '/about/contact',
                name: 'Contact',
                component: () =>
                    import ('../components/about/Contact.vue'),

                children: [{
                        path: '/about/contact/wechat',
                        name: 'Wechat',
                        component: () =>
                            import ("../components/about/contact/Wechat.vue")
                    },
                    {
                        path: '/about/contact/qq',
                        name: 'QQ',
                        component: () =>
                            import ("../components/about/contact/QQ.vue")
                    },
                    {
                        path: '/about/contact/email',
                        name: 'Email',
                        component: () =>
                            import ("../components/about/contact/Email.vue")
                    }
                ]
            },
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router