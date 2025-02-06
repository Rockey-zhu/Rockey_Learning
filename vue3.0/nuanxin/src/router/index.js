import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/Home.vue'
Vue.use(VueRouter)


// export default new Router({
//     routes: [{
//         path: '/',
//         name: 'products',
//         component: products,

//         // {
//         //     path: '/',
//         //     name: 'demo1',
//         //     component: demo1
//         // }
//         children: [{
//                 path: '/products/demo1',
//                 name: 'demo1',
//                 component: () =>
//                     import ('../components/demo1.vue')
//             },
//             {
//                 path: '/products/demo2',
//                 name: 'demo2',
//                 component: () =>
//                     import ('../components/demo2.vue')
//             },
//             {
//                 path: '/products/demo3',
//                 name: 'demo3',
//                 component: () =>
//                     import ('../components/demo3.vue')
//             },
//             {
//                 path: '/products/storeCeshi',
//                 name: 'storeCeshi',
//                 component: () =>
//                     import ('../components/storeCeshi.vue')
//             },
//             {
//                 path: '/products/table',
//                 name: 'table',
//                 component: () =>
//                     import ('../components/table.vue')
//             },
//         ]
//     }, ]
// })

const routes = [{
    path: '/',
    name: 'home',
    component: home,

    children: [{
            path: '/home/demo1',
            name: 'demo1',
            component: () =>
                import ('../components/demo1.vue')
        },
        {
            path: '/home/demo2',
            name: 'demo2',
            component: () =>
                import ('../components/demo2.vue')
        },
        {
            path: '/home/demo3',
            name: 'demo3',
            component: () =>
                import ('../components/demo3.vue')
        },
        {
            path: '/home/demo4',
            name: 'echarts图',
            component: () =>
                import ('../components/demo4.vue')
        },
        {
            path: '/home/demo5',
            name: 'echarts图',
            component: () =>
                import ('../components/demo5.vue')
        },
        {
            path: '/home/storeCeshi',
            name: 'storeCeshi',
            component: () =>
                import ( /* webpackChunkName: "about" */ '../components/storeCeshi.vue') //这个方法是路由懒加载 避免首屏渲染过多内容
        },
        {
            path: '/home/table',
            name: 'table',
            component: () =>
                import ('../components/table.vue')

        },
        //新增购物车项目
        {
            path: '/home/shopmart',
            name: 'shopmart',
            component: () =>
                import ('../components_2/shopmart.vue')
        },
    ]
}]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router