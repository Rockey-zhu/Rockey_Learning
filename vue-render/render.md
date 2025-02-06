### 什么是Render
```
Render函数时Vue 2.新增的一个函数,主要用来提升节点性能，它是基于js计算，使Render函数将Template里面的节点解析成
虚拟的Dome

在Vue中我们使用模板HTML语法组建页面时，使用Render函数可以用js语言来构建DOM

Vue就是虚拟的DOM 所以拿到Template模板时也要编译成Vnode的函数，而用Render函数构建Dom，vue就免去了转译的过程

```

### ivew 写法
```
render:(h,params=>{
    return h('div',{style:{wdith:'100px',height:'100px',background:'#ccc',fontSize:'22px'}},'地方')
})

```

### 节点，树
<div>
    <h1>my title</h1>
    Some text content
    <!--TODO: Add tagline-->
</div>

节点树:https://img-blog.csdnimg.cn/18856e6b5c61490d83560ea5a8aa87c8.png#pic_center

可以渲染在一个模板里
<div>{{blogTitle}}</div>

或者一个渲染函数里：
render:function(createElement){
    return createElement('h1',this.blogTitle)
}

这两个情况下，Vue都会自动保持页面的更新，即使blogTitle发生了变化

### 虚拟Dom
```
Vue通过建立一个虚拟Dom来追踪自己要如何改变真是Dom,
return createElement('h1',this.blogTitle)

createElement到底返回什么？===》  不是一个实际的Dom元素，createNodeDescription
它所包含的信息会告诉Vue页面需要渲染什么样的节点，包括及其子节点的描述信息，称为虚拟节点，vnode

约定的简写叫 h ,将h 作为 createElement 的别名是Vue生态系统中的一个通用惯例，实际上也是JSX所要求的

```

