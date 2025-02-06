<!--记住滚动条-->
<!--  顾名思义，这个功能是用来记录上一页或者下一页的滚动条的位置的
  这个功能只在支持 history.pushState 的浏览器中可用。（听不懂！）
  这个功能只有通过浏览器的 前进/后退 按钮触发时才可用。（好理解了）
  当然你可以用router.go(1)前一页 / router.go(-1) 上一页 去触发这个功能。
  如果你用router.push('./index')这种的去跳转页面，他并记不住滚动条的位置，这个时候你可能得依靠localhost做点什么了。

   用法:
    const router=new VueRouter({
        routes:[...],
        scrollBehavior(to,from,savedPosition){
            //return 期望滚动到哪个位置
            if(savedPosition){
                return savedPosition 
            }else{
                return{x:0,y:0}
            }
        }
    })
-->
