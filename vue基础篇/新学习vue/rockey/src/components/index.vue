<template>
  <div>
     <router-view></router-view>
    <ul class="footer">
      <li>
          <router-link to="/first">首页</router-link>
      </li>
      <li>
          <router-link to="/type">分类</router-link>
      </li>
      <li>
          <router-link to="/my">我的</router-link>
      </li>
    </ul>
   
  </div>
</template>
<style lang="less" scoped>
  .footer{
    width: 100%;
    position: fixed;
    bottom: 20px;
    li{
      width: 33.3%;
      
      float: left;
    }
  }
</style>