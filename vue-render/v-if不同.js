/*v-if 和 v-for
只要在原生的 JavaScript 中可以轻松完成的操作，Vue 的渲染函数就不会提供专有的替代方法。
比如，在模板中使用的 v-if 和 v-for： */

/*
{ <ul v-if="items.length">
    <li v-for="item in items">{{item.name}}</li>
</ul>
<p v-else>No items found</p> }
*/

//render函数 用 if/else 和map重写
/*
props: ['items'],
    render: function(createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(item => {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', "No items found")
        }
}
*/