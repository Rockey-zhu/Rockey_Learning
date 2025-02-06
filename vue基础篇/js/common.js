 // 自定义指令Vue.directive('指令名字',{钩子函数 提供的一些接口，可以执行一些操作 bind inserted update unbind}})
 Vue.directive('color',{
    bind(){
        // 指令绑定到标签身上
        console.log('指令绑定到标签身上')
    },
    inserted(el,obj){
        // 标签插入到页面中 一般书写自己的代码
        console.log('标签插入到页面中');
        // el代表的是当前的标签
        // obj获取的是当前指令的一些信息
        // obj.arg获取的是传递的常量参数
        console.log(el,obj)
        if(obj.value){
            el.style.color=obj.value
        }else{
            el.style.color=obj.arg
        }
        
    },
    update(){
        // 数据更新的时候，执行
        console.log('数据更新的时候，执行');
        
    },
    unbind(){
        // 接触绑定的时候，执行代码
        console.log('接触绑定的时候，执行代码');
        
    }

})