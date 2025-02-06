//requestAnimationFrame 是浏览器专门为动画提供的API

// requestAnimationFrame刷新频率与显示器的刷新频率保持一致，
//使用该api可以避免使用 setTimeout/setInterval造成动画卡顿的情况


//setTimeout、setInterval、requestAnimationFrame 三者的区别

// 1.引擎方面
// setTimeout属于 js引擎，存在事件轮询
// requestAnimationFrame属于GUI引擎
// js引擎和GUI引擎是互斥的，就是说GUI引擎在渲染时会阻塞js引擎的计算

//这样设计的原因， 如果在GUI渲染的时候， JS同时又改变了dom， 那么就会造成页面渲染不同步


//性能方面
// 当页面被隐藏或最小化时， 定时器setTimeout仍会在后台执行动画任务

// 当页面处于未激活的状态下， 该页面的屏幕刷新任务会被系统暂停， requestAnimationFrame也会停止