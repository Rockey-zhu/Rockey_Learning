<template>
    
</template>
<!--


v-if 指令用于条件性地渲染一块内容
<h1 v-if="awsome">Vue is awesome!</h1>
可以用v-else添加一个"Vue is awesome!"

<h1 v-id="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no ???</h1>


<template>元素上使用v-if 条件渲染分组
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>

v-else 
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
v-else 元素必须紧跟在带v-if或者v-else-if的元素的后面，否则他将不会被识别



v-if  vs  v-show



v-if是"真正"的条件渲染，因为他会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建
v-if也是惰性的：如果在初始渲染时条件为假，则什么也不同做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，v-show——不管初始条件是什么，元素总是会被渲染并且只是简单地基于css进行切换。

总结： 频繁切换：v-show
       在运行时条件很少改变：v-if

    
-->