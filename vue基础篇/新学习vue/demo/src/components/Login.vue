<template>
  <div class="loginBox">
    <div class="top">
      <div class="logo"></div>
      <div class="input">
        <label for="username">账号：</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input">
        <label for="password">密码：</label>
        <input type="text" id="password" v-model="password" />
      </div>
    </div>
    <div class="btn">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<script>
/* 
		vue-resource
			安装：npm install vue-resource --save

			1、get请求
				this.$http.get(url,{params:{key:value}})
				.then(
					res=>{
						//请求成功回调函数
					},
					err=>{
						//请求失败回调函数
					}
				);
			2、post请求
				this.$http.post(url,{key:value})
				.then(
					res=>{
						//请求成功回调函数
					},
					err=>{
						//请求失败回调函数
					}
				);
			3、JSONP请求
				this.$http.jsonp(url,{params:{key:value}})
				.then(
					res=>{
						//请求成功回调函数
					},
					err=>{
						//请求失败回调函数
					}
				);

		https://www.easy-mock.com	在线生成数据接口
		https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/getData
		https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/postData
		https://api.douban.com/v2/movie/search?q=%E7%BA%A2&start=0
	*/

export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  // methods: {
  // login() {
  //   console.log(this.$http);
  //get 请求无参数   this.$http.get('https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo')

  //get  请求带参数
  //   this.$http.get('https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/getData',{params:{name:'xunuo',age:18}})

  // post   请求无参数
  //this.$http.post('https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/postData')

  // post   请求有参数
  //this.$http.post('https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/postData',{name:'xunuo',age:20})

  //JSONP请求
  //  this.$http.jsonp("https://api.douban.com/v2/movie/search",{params:{q:'地球',start:0}})
  //   .then(
  //     (res) => {
  //       //请求成功回调函数
  //       console.log(res)
  //     },
  //     (err) => {
  //       //请求失败回调函数
  //       console.log(err)
  //     }
  //   );
  // },


  methods: {
    


    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名与密码");
        return;
      }
     
      
      this.$axios({
        method: "get",
        url: "https://keyportaldev.krclouds.com/krdataapidev/v1/web/api/test/test",
        params: "userName:this.username,passWord:this.password",  //发送get请求，使用params关键字接收请求参数
      })
        .then((res) => {
          console.log(res.data);
          // const keys=Object.keys(res.data); //把对象
          // // console.log(keys)
          // for(let v of keys){
          //   console.log(res.data[v])
            
          // }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>




<style>
.loginBox {
  width: 600px;
  height: 520px;
  background: rgba(173, 173, 173, 0.7);
  border-radius: 30px;
  box-shadow: 0 0 20px #403939;
  overflow: hidden;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.loginBox .top div.logo {
  height: 200px;
}
.loginBox .top {
  text-align: center;
}
.loginBox .input {
  height: 60px;
  font-size: 30px;
  color: #fff;
  margin-bottom: 20px;
}
.loginBox .top input {
  width: 260px;
  height: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  outline: none;
  font-size: 30px;
  color: #fff;
}
.loginBox .btn button {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #f39801;
  text-align: center;
  font-size: 40px;
  color: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>