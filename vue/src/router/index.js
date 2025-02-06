import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login";


//配置路由相关信息

//安装插件
Vue.use(VueRouter)


//创建vueRouter对象
const routes = [{
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/home',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue'),

        children: [{
                path: '/home/about',
                name: 'About',
                component: () =>
                    import ('../components/about.vue')
            }, {
                path: '/home/together',
                name: 'Together',
                component: () =>
                    import ('../components/together.vue')
            }, {
                path: '/home/ceshi1',
                name: 'Ceshi1',
                component: () =>
                    import ('../components/ceshi1.vue')
            },
            {
                path: '/home/ceshi2',
                name: 'Ceshi2',
                component: () =>
                    import ('../components/ceshi2.vue')
            },
            {
                path: '/home/list',
                name: 'list',
                component: () =>
                    import ('../components/list.vue')
            },
            {
                path: '/home/buycar',
                name: 'buycar',
                component: () =>
                    import ('../components/buycar.vue')
            },
            {
                path: '/home/ag',
                name: 'ag',
                component: () =>
                    import ('../components/ag.vue')
            },
            {
                path: '/home/svg',
                name: 'svg',
                component: () =>
                    import ('../components/svg.vue')
            },
            {
                path: '/home/syg',
                name: 'syg',
                component: () =>
                    import ('../components/syg.vue')
            },
            {
                path: '/home/exchange',
                name: 'HelloWorld',
                component: () =>
                    import ('../components/exchange.vue')
            },
            {
                path: '/home/submit',
                name: "news",
                component: () =>
                    import ('../components/submit.vue')
            },
            {
                path: '/home/click',
                name: "click",
                component: () =>
                    import ('../components/click.vue')
            },
            {
                path: '/home/life',
                name: "life",
                component: () =>
                    import ('../components/life.vue')
            },
            {
                path: '/home/state',
                name: "state",
                component: () =>
                    import ('../components/state.vue')
            },
            {
                path: '/home/getter',
                name: "getter",
                component: () =>
                    import ('../components/getter.vue')
            },
            {
                path: '/home/mutation',
                name: "mutation",
                component: () =>
                    import ('../components/mutation.vue')
            },
            {
                path: '/home/action',
                name: "action",
                component: () =>
                    import ('../components/action.vue')
            },
            {
                path: '/home/button',
                name: "button",
                component: () =>
                    import ('../components/button.vue')
            },
            {
                path: '/home/card',
                name: "button",
                component: () =>
                    import ('../components_2/card.vue')
            },
            {
                path: '/home/MessageBox',
                name: "button",
                component: () =>
                    import ('../components_2/MessageBox.vue')
            },
            {
                path: '/home/MenuPr',
                name: "MenuPr",
                component: () =>
                    import ('../components/MenuPr.vue')
            },
            {
                path: '/home/Form',
                name: "Form",
                component: () =>
                    import ('../components/Form.vue')
            },
            {
                path: '/home/menu',
                name: "menu",
                component: () =>
                    import ('../components/menu.vue')
            },
            {
                path: '/home/view',
                name: "view",
                component: () =>
                    import ('../components/view.vue')
            },
            {
                path: '/home/view_1',
                name: "view_1",
                component: () =>
                    import ('../components/view_1.vue')
            },
            {
                path: '/home/other_idea',
                name: "other_idea",
                component: () =>
                    import ('../components/other_idea.vue')
            },
            {
                path: '/home/copy',
                name: "copy",
                component: () =>
                    import ('../components_2/copy.vue')
            },
            {
                path: '/home/lunbo',
                name: "lunbo",
                component: () =>
                    import ('../components_2/lunbo.vue')
            },
            {
                path: '/home/table',
                name: "table",
                component: () =>
                    import ('../components_2/table.vue')
            },
            {
                path: '/home/mainFather',
                name: "mainFather",
                component: () =>
                    import ('../components_2/mainFather.vue')
            },
            {
                path: '/home/mainFather/InputSearch',
                name: "InputSearch",
                component: () =>
                    import ('../components_2/components/InputSearch.vue')
            },
            {
                path: '/home/v-forList',
                name: "v-forList",
                component: () =>
                    import ('../components_2/v-forList.vue')
            },
            {
                path: '/home/v-forList/details',
                name: "details",
                component: () =>
                    import ('../components_2/details.vue')
            },
            {
                path: '/home/v-jsoneditor',
                name: "v-jsoneditor",
                component: () =>
                    import ('../components_2/v-jsoneditor.vue')
            },
            {
                path: '/home/jsoneditor',
                name: "jsoneditor",
                component: () =>
                    import ('../components_2/jsoneditor.vue')
            },

            // {
            //     path: '/home/路由懒加载1',
            //     name: "Page1",
            //     component: () =>
            //         import ('../components_2/路由懒加载1.vue')
            // },
            // {
            //     path: '/home/路由懒加载2',
            //     name: "Page2",
            //     component: () =>
            //         import ('../components_2/路由懒加载2.vue')
            // },
        ]
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
        //配置路由与组件之间的关系
})

//将router对象传入vue实例中
export default router
//导出router