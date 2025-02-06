//vuex怎么保存并子组件调用值.js
// 在使用 Vuex 时，我们经常需要从 store 中获取 state 或 dispatch action 或触发 mutations，为了避免在组件中直接访问store，这里需要使用 Vuex 中提供的映射函数进行封装和简化调用。

// Vuex 提供了 4 个映射函数，它们分别是：mapState、mapMutations、mapGetters 和 mapActions。下面分别介绍其用法。

// 1. mapState

// mapState 是用来映射 state 的值到组件计算属性中。

``
`javascript
import { mapState } from 'vuex'

export default {
  // ...
  computed: {
    ...mapState({
      count: state => state.count,
      username: state => state.user.username
    })
  }
}
`
``

// 2. mapMutations

// mapMutations 是用来映射 mutations 到组件的 methods 中。

``
`javascript
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // 实际调用：this.$store.commit('increment')
      'add', // 实际调用：this.$store.commit('add', payload)
      'reset' // 实际调用：this.$store.commit('reset')
    ])
  }
}
`
``

// 3. mapGetters

// mapGetters 是用来映射 getters 到组件的 computed 计算属性中。

``
`javascript
import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
    ...mapGetters(['doneTodosCount'])
  }
}
`
``

// 4. mapActions

// mapActions 是用来映射 actions 到组件的 methods 中。

``
`javascript
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'incrementAsync', // 实际调用：this.$store.dispatch('incrementAsync')
      'addAsync', // 实际调用：this.$store.dispatch('addAsync', payload)
      'resetAsync' // 实际调用：this.$store.dispatch('resetAsync')
    ])
  }
}
`
``



// 可以通过使用Vue.js的状态管理工具Vuex来实现。

// 步骤如下：

// 1. 创建store

// 在Vue.js项目中创建store文件夹， 在该文件夹中创建index.js文件来存储状态和修改状态的方法。

``
`javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  value: ''
}

const mutations = {
  SAVE_VALUE(state, payload) {
    state.value = payload
  }
}

const actions = {
  saveValue({ commit }, payload) {
    commit('SAVE_VALUE', payload)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
`
``

// 在上面的代码中，我们定义了一个状态（value），以及修改该状态的方法（SAVE_VALUE）。同时，我们还定义了一个操作（saveValue），在该操作中通过commit方法提交保存值的操作，在其他组件中可以通过dispatch方法来调用该操作。

// 2. 在组件中获取值

// 使用mapState方法将值映射到组件的computed属性上，就可以在组件模板中直接使用了。

``
`javascript
<template>
  <div>{{ value }}</div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['value'])
    }
  }
</script>
`
``

// 通过以上步骤，即可实现在Vue.js中调取接口值保存在状态机上，在其他组件中获取值。