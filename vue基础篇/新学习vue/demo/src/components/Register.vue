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
      <div class="input">
        <label for="confirm">确认密码：</label>
        <input type="text" id="confirm" v-model="confirm" />
      </div>
    </div>
    <div class="btn">
      <button @click="register">注册</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirm: "",
    };
  },
  methods: {
    // register(){

    //     //get请求
    //     /*this.$axios.get('https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/getData',
    //     {params:{name:'xunuo',age:18}})*/

    //     //post请求
    //     // this.$axios.post('https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/postData',
    //     // {params:{name:'xunuo',age:18}})
    //     // .then(
    //     //     res=>{
    //     //         //请求成功回调函数
    //     //         console.log(res)
    //     //     }
    //     // )
    //     // .catch(
    //     //     err=>{
    //     //         //请求失败回调函数
    //     //         console.log(err)
    //     //     }
    //     // );

    //     this.$axios({
    //         method:'post',
    //         url:'https://mock.presstime.cn/mock/62e0a1659bb24ed0313cc0af/demo/postData',
    //         // data:{
    //         //     name:'许诺',age:20
    //         // }
    //         params:{
    //             name:'许诺',age:20
    //         }
    //     })
    //     .then(
    //         res=>{
    //             //请求成功回调函数
    //             console.log(res)
    //         }
    //     )
    //     .catch(
    //         err=>{
    //             //请求失败回调函数
    //             console.log(err)
    //         }
    //     );
    // },

    register() {
      if (this.username == "") {
        alert("请输入用户名");
        return;
      }
      if (this.password == "") {
        alert("请输入密码");
        return;
      }
      if (this.confirm != this.password) {
        alert("两次输入的密码不一样");
        return;
      }

      //把要传递的数据存储在一个对象里，作为数据交互的第二个参数
      const formData = {
        userName : this.username,
        passWord: this.password,
      };

      //请求数据接口

      this.$axios({
        method: "get",
        url: "https://keyportaldev.krclouds.com/krdataapidev/v1/web/api/test/test",
        params: formData,  //发送get请求，使用params关键字接收请求参数
      })
        .then((res) => {
          console.log(res.data);
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