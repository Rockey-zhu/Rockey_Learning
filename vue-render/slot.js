//插槽

//function (createElement)  ==>   h
/*
你可以通过 this.$slots 访问静态插槽的内容，每个插槽都是一个 VNode 数组：

*/
render: function(createElement) {
    //`<div><slot></slot></div>`
    return createElement('div', this.$slot.default)
};

//也可以通过 this.$scopedSlots 访问作用域插槽，每个作用域插槽都是一个返回若干 VNode 的函数：
props: ['message'],
    render: function(createElement) {
        // `<div><slot :text="message"></slot></div>`
        return createElement('div', [
            this.$scopedSlots.default({
                text: this.message
            })
        ])
    };


//如果要用渲染函数向子组件中传递作用域插槽，可以利用 VNode 数据对象中的 scopedSlots 字段：
render: function(createElement) {
    return createElement('div', [
        createElement('child', {
            //在数据对象中传递`scopedSlots`
            //格式为{name:props=>VNode | Array<VNode}
            scopedSlots: {
                default: function(props) {
                    return createElement('span', props.text)
                }
            }
        })
    ])
}