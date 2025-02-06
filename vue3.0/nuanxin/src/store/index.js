//在 store(仓库)下的index.js这份文件，就是用来做状态管理
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';
import state from './state.js';

Vue.use(Vuex)

const nest = new Vuex.Store({
    state,
    getters, //getters相当于组件中的computed，getters是全局的，computed是组件内部使用的
    mutations, //mutations相当于组件中的methods,但是他不能使用异步方法(定时器、axios)
    actions, //专门用来处理异步，但实际修改状态值的，依旧是mutations
})
export default nest;