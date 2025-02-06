import Vue from 'vue'
import Vuex from 'vuex'
import VJsoneditor from 'v-jsoneditor'
// import state from './state.js'
import tabs from './components/tabs/tabs'
import tableDetailsData from './components/tableDetailsData/tableDetailsData'
Vue.use(Vuex)
Vue.use(VJsoneditor)

//创建整个项目的数据仓库对象，将多组件公用的数据放置到此对象里
const nest = new Vuex.Store({
    //data
    state: {
        counter: 1
    },
    //state相当于组件中的data,专门用来存放全局的数据
    getters: {
        //getters相当于组件中的computed,getters是全局的，computed是组件内部使用的
        reverseMsg: function(state) {
            return state.msg.split('').reverse().join('')
        },
        mixinMsg: function(state) {

            return function(val) {
                return val + state.msg
            }
        },
        getNum(state) {
            return state.num
        }
    },
    //methods,在mutatio里处理状态
    mutations: {
        //mutations相当于组件中的methods,但是它不能使用异步方法（定时器，axios）
        addNum(state) {
            state.num += 2;
        },
        addNumber(state) {
            state.number = state.number * 2;
        },
        setHigh(state, value) {
            state.high = value
        },
        increase(state, n = 5) {
            state.count += n;
        },
        decreased(state, n = 5) {
            state.count -= n;
        },
        add(state) {
            state.number++
        },
        decrease(state) {
            state.number -= 5
        },
        changeNickName(state) {
            state.nickName = '猪八戒';
        }


    },
    //异步方法
    actions: {
        decreaseAsync(context) {
            context.commit('decrease')
        }
    },
    //模块
    modules: {
        tabs,
        tableDetailsData,
    }
})
export default nest;