// action不能直接修改state值
// action 必须通过提交mutation来更新state
// 只有mutation才能更新state

// this.$store.dispatch():含有异步操作，例如向后台提交数据，
// 写法：this.$store.dispatch('action方法名',值)

//this.$store.commit():同步操作，写法：this.$store.commit('mutations方法名'，值)


//commit：同步操作

// 存储：this.$store.commit('changeValue',name)
// 取值：this.$store.state.changeValue

//dispatch: 异步操作

//存储：this.$store.dispatch('getlists',name)
//取值：this.$store.getters.getlists