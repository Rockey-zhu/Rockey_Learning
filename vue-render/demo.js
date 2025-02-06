//举个例子

render: (h) => {
    return h('div', {
        //给div绑定value属性
        props: {
            value: ''
        },
        //给div绑定样式
        style: {
            width: '30px'
        },
        //给div绑定点击事件
        on: {
            click: () => {
                console.log("点击事件");
            }
        }
    })
};

//约束
/*
* VNode必须唯一
组件树中的所有VNode必须是唯一的，这意味着，下面的渲染函数是不合法的

*/
render: function(createElement) {
    var myParagraphVNode = createElement('p', "hi")
    return createElement('div', [
        //错误-重复的VNode
        myParagraphVNode, myParagraphVNode
    ])
}

//如果你真的需要重复很多元素/组价，工厂函数实现，面这渲染函数用完全合法的方式渲染了 20 个相同的段落：
render: function(createElement) {
    return createElement('div',
        Array.apply(null, {
            lenght: 20
        }).map(function() {
            return createElement('p', "hi")
        })
    )
}