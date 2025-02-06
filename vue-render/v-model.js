// v-model
//渲染函数中没有与 v-model 的直接对应——你必须自己实现相应的逻辑：
// props: ['value'],
//     render: function(createElement) {
//         var self = this
//         return createElement('input', {
//             domProps: {
//                 value: self.value
//             },
//             on: {
//                 input: function(event) {
//                     self.$emit('input', event.target.value)
//                 }
//             }
//         })
//     }