<template>
  <div class="shopCar">
 
    <my-header :backShow="false" fixed :title="'vuex示例'"
               :iconMarginLeft="'10px'"></my-header>
    <div style="height:45px"></div>
 
    <!--商品列表 -->
    <div class="goods" v-if="goodsData.length > 0">
      <div class="goods_item_head">
        <span style="margin-left:18px;font-weight: bold">商品列表</span>
      </div>
      <ul>
        <li v-for="(good,index) in goodsData" :key="good.id" :data-index="index">
          <goodsItem :good="good"></goodsItem>
        </li>
      </ul>
    </div>
    <div style="height:20px"></div>
 
 
    <!--购物车列表 -->
    <div class="goods">
      <div class="goods_item_head">
        <span style="margin-left:18px;font-weight: bold">购物车列表</span>
      </div>
 
      <div v-if="shopList.length == 0" style="color:#999999;text-align:center;font-size:14px;">
        <img src="../../../static/goods/cartNone.png" width=80 height=80 alt="">
        <p>空空如也~</p>
      </div>
 
      <shopCartList :shopList="shopList"></shopCartList>
    </div>
 
 
    <!--结算 -->
    <shopCartAccount></shopCartAccount>
 
  </div>
</template>
 
<script>
  import {mapState,mapActions,mapGetters} from 'vuex'     //引入state，action，getter对象
  const imgTmp = require('../../../static/home/banner-strategy.jpg');
 
 
  export default {
    name: "shopCar",
    data() {
      return {
 
        goodsData: [
          { 'id': 1, 'url':imgTmp, 'name': "美的洗碗机", 'price': 2000,'inventory':5,'num':1 },
          { 'id': 2, 'url':imgTmp, 'name': "美的豆浆机", 'price': 1000,'inventory':100,'num':1 },
          { 'id': 3, 'url':imgTmp, 'name': "美的微波炉", 'price': 1500,'inventory':80,'num':1 }
        ]
 
 
      }
    },
    methods:{
      ...mapActions(['addNum','reduceNum','deleteGoods'])
    },
    computed:{
      ...mapGetters(['totalPrice']),//在计算属性里面使用getter和state对象
      ...mapState(['shopList'])
    },
 
  }
</script>
 
<style scoped>
 
  .shopCar {
    background: #f8f8f9;
    overflow: hidden;
  }
 
  .goods {
    overflow: auto;
  }
 
  .goods li {
    border-bottom: 1px solid #eeeeee;
    border-top: 0.1px solid #eeeeee;
    background: #fff;
  }
 
  .goods_item_head {
    margin-top: 10px;
 
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    background: #fff;
    justify-content: space-between;
  }
 
  .goods_item_head span {
    font-size: 14px;
    align-items: center;
    display: flex;
  }
 
  .goods_item_head img {
    margin-right: 10px;
  }
 
</style>