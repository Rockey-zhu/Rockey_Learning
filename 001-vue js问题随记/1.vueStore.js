// 1.state----vue store实例的根状态对象，用于定义共享的状态变量，就像Vue实例中的data
// 2.gettrers----读取器，外部程序通过它获取变量的具体值，或者在取值前做一些计算（可以人认为是store的计算属性）
// 3.actions----动作，向store发出调用通知，执行本地或者远端的某一个操作（可以理解为store的methods）
// 4.mutations ---- 修改器，它只用于修改state中定义的状态变量
// 5.modules ---- 模块，想store注入其他子模块，可以将其他模块以命名空间的方式引用。
// 6.strict----用于设置vuex的运行模式，true为调试模式，false为生产模式
// 7.pulgin ---- 用于向Vuex加入运行期的插件


//store的应用  及 ...map的映射函数简化过程

//vuex store：
// getters: {
//     recommended:state=>state.recommended,
// }

//home.vue
// computed: {
//     recommended(){
//           return this.$store.getters.recommended
//        }
//     }

//利用mapGetters简化代码
// computed: {
//     ...mapGetters([
//         'recommended'
//     ])
// }