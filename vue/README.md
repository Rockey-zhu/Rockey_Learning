# apptext

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 笔记

### vue-router 有两种跳转页面的方法

<1>使用内置的<router-link>组件，它会被渲染成一个<a>标签

//index.vue
<temple>
    <div>
        <h1>首页</h1>
        <router-link to ="/about">跳转到about</router-link>
    </div>
</temple>
to是一个prop,指定需要跳转的路径。

常用的prop
<router-link to="/about" tag="li"> 渲染结果是<li> 而不是<a>
<router-link-active > 可以用该功能高亮显示当前对应的导航菜单项

<2>在about.vue里通过点击事件跳转
<button @click="handleRouter">跳转到user</button>
<script>
    export default{
        methods:{
            handleRouter(){
                this.$router.push('/user/123');
            }
        }
    }
</script>





### vue-ViewUI安装
 一，	安装导入

用Npm安装
输入 npm  install  view-design
第二步：在main.js引入ViewUI
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

二、使用



### vuex的小笔记

改变 store中的state字段（数据）
在组件中，通过this.$store.commit()方法来执行


### Es6运行
在node.js中直接在控制台运行代码

### mounted  methods  commit  computed
mounted:html加载完成后执行
methods：事件方法
commit：执行方法
computed:依赖其他属性计算所得出的值


### less安装
$ npm install -g less      node里面安装

安装是否成功
npm less -v   验证

命令行用法
$ lessc styles.less
$ lessc styles.less styles.css
$ lessc --clean-css styles.less styles.min.css






