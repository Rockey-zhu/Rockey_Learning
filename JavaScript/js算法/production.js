/* 
    生产者和消费者问题
	
	生产者和消费者 是 并发过程
	
	两者之间有个N个缓冲区的缓冲池
	
	生产者放，消费者取
	
	
	满足如下条件：
	1.不能向满缓冲区存产品
	2.不能向空缓冲区取产品
	3.每个时刻仅允许一个生产者或消费者存取一个产品
*/

let full = 0; //缓冲区间
let empty = 20; //可供使用的缓冲区数
let mutex = false; //互斥信号量

/*
let full=0; //缓冲区数
let empty=20; //可供使用的缓冲区数
let mutex=false;//互斥信号量*/


//定义全局数组当作缓存仓库
var factoryCapacity = new Array();

console.log("prorate==" + prorate + "," + "conrate==" + conrate)
    /*定义一个定时函数，如果仓库未满，按照生产速率往仓库塞值 */
this.proTimer = setInterval(
        () => this.add(), prorate)
    /*定义一个定时函数，如果仓库未空，按照生产速率往仓库取值 */
this.conTimer = setInterval(
    () => this.remove(), conrate)

function add() {
    if (factoryCapacity.length < this.state.factory) {
        factoryCapacity.push("1");
        this.setState({
            fac: "容量为" + factoryCapacity.length,
            con: "消费中"
        });
        /* console.log("r工厂容量为"+factoryCapacity.length)*/
    } else {
        this.setState({
            fac: "工厂已空",
            con: "停止消费"
        });
    }
}