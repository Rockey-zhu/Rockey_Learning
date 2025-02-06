<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>余你⛑管理系统</span>
      </div>

      <el-tabs v-model="currentIndex" stretch @tab-click="handleTabsClick">
        <el-tab-pane label="登陆" name="login">
          <el-form
            :model="loginForm"
            :rules="rules"
            status-icon
            ref="loginForm"
          >
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('loginForm')"
                >确定</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="注册" name="register">
          <el-form
            :model="registerForm"
            :rules="rules"
            status-icon
            ref="registerForm"
          >
            <el-form-item label="用户名" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" label-width="80px" prop="username">
              <el-input type="text" v-model="registerForm.email"></el-input>
            </el-form-item>
            <el-form-item label="密码" label-width="80px" prop="password">
              <el-input
                type="password"
                v-model="registerForm.password"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="确认密码"
              label-width="80px"
              prop="configurePassword"
            >
              <el-input
                type="password"
                v-model="registerForm.configurePassword"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')"
                >确定</el-button
              >
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import api from "../api";
import { mapMutations } from "vuex";
export default {
  data() {
    //验证规则
    var validataUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (value.length < 4) {
        callback(new Error("长度不够"));
      } else {
        callback();
      }
    };
    var validataPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    //确认密码验证规则
    var validataConfigurePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.registerForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      currentIndex: "login",
      loginForm: {
        username: "",
        password: "",
      },
      registerForm: {
        username: "",
        password: "",
        configurePassword: "",
        email: "",
      },
      activeTab: "login",
      rules: {
        username: [
          {
            validator: validataUserName,
            trigger: "blur",
          },
        ],
        password: [
          {
            validator: validataPassword,
            trigger: "blur",
          },
        ],
        configurePassword: [
          {
            validator: validataConfigurePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    ...mapMutations("login", ["setUser"]),
    submitForm(formname) {
      this.$refs[formname].validate((valid) => {
        if (valid) {
          if (this.activeTab === "login") {
            //说明登录
            //console.log(this.loginForm);
            api.login(this.loginForm).then((res) => {
              //console.log(res.data)
              if (res.data.status === 200) {
                this.setUser(res.data);
                localStorage.setItem("ego", JSON.stringify(res.data));
                this.$router.push('/')
              } else {
                const h = this.$createElement;
                this.$notify({
                  title: "登录失败",
                  message: h("用户名密码错误"),
                });
              }
            });
          }
          if (this.activeTab === "register")  {  
            console.log(this.registerForm);
          }
        } else {
          return;
        }
      });
    },
    handleTabsClick(tab) {
      console.log(tab.name);
      this.activeTab = tab.name;
    },
  },
};
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 0 auto;
  .box-card {
    width: 600px;
    margin: 150px auto;
  }
}
</style>