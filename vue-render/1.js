//Element 中的 Tree

// 树节点的内容区的渲染回调
renderContent(h, {
    node,
    data,
    store
}) {
    let aa = () => {
        console.log(data)
    }
    return h('span', [
        h('span', {
            class: "custom-tree-node"
        }, [
            h('i', {
                class: "icon-folder"
            }), h('span', {
                props: {
                    title: node.label
                },
                class: "text ellipsis"
            }, node.label),
            h('el-popover', {
                props: {
                    placement: "bottom",
                    title: "",
                    width: "61",
                    popperClass: "option-group-popover",
                    trigger: "hover"
                }
            }, [
                h('ul', {
                    class: "option-group"
                }, [
                    h('li', {
                        class: "pointer-text",
                        on: {
                            click: aa
                        }
                    }, '编辑'),
                    h('li', {
                        class: "pointer-text"
                    }, '删除'),
                    h('li', {
                        class: "pointer-text"
                    }, '添加')
                ]),
                h('i', {
                    slot: "reference",
                    class: "el-icon-more fr more-icon",
                    on: {
                        click: (e) => {
                            e.stopPropagation();
                        }
                    }
                })
            ])
        ])
    ])
},