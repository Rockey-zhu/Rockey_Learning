### 初始

typeScript是js的超集
为 js 添加了 类型系统
兼容所有js 的平台
ts无法直接在js解析器中执行，需要将ts编译（转换）成js


### 增加内容

类型，新增了很多新特征（装饰器）有丰富的配置选项（可以编译成任意版本的js）

### 设计目标： 开发大型应用 方便项目管理


### 例子
```
//typeScript 
let age:number=19

//javaScript 
let age=10

```
###  优势
1.类型化思维
2.提高代码可读性，使维护和重构代码变得更加容易
3.补充了接口，枚举等大型应用开发功能
4.Vue3 源码使用TS重写
5. Angular默认支持Ts React 与Ts配合 是大型项目首选


### 安装命令

npm install -g typescrtpt

typescript 提供tsc命名对ts进行编译，实现Ts->Js的转化

终端 ：  tsc  xxxx.ts 会生成同名的xxxx.js文件

### node 如何执行 ts
1.安装： npm i -g ts-node

2.使用： ts-node xxx.ts

### tsc 编译配置选项
```
监视ts文件编译，文件改变就会自动编译
tsc xxx.ts -w 

编译所有文件 需要tsconfig.json文件（在此配置）
tsc (就会将所有的ts都编译)
tsc -w (会监视所有的ts文件)

```
