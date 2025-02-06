<template>
  <div>
    <div v-if="list.length" class="haveCloth">
      <div class="cloth-thead">
        <el-col :span="6">商品信息</el-col>
        <el-col :span="3">尺码/颜色</el-col>
        <el-col :span="3">吊牌价</el-col>
        <el-col :span="3">数量</el-col>
        <el-col :span="3">折扣</el-col>
        <el-col :span="3">总金额</el-col>
        <el-col :span="3">操作</el-col>
      </div>
      <div class="hasCloth">
        <ul class="clothBox">{{selectArrCloth}}
          <li :v-for="item in list" :key="item"  class="cloth-tr" >
            <el-col :span="6">
              <el-checkbox v-model='selectArrCloth' :label="item.id" @change="item.checked=!item.checked"></el-checkbox>
              {{item.name}}商品信息
              <img src="@/assets/img/1.png"/>
            </el-col>
            <el-col :span="3">{{ list.size }}/{{ item.color }}尺码/颜色</el-col>
            <el-col :span="3">{{ item.price }}吊牌价</el-col>
            <el-col :span="3" class="ocloth-count">
              <span @click="cutCount(item)">-</span>
                              {{ item.count }}数量
              <span @click="addCount(item)">+</span>
            </el-col>
            <el-col :span="3">{{ item.active }}折扣</el-col>
            <el-col :span="3">{{
              item.price * item.count * item.active
            }}总金额</el-col>
            <el-col :span="3">
              <img
                class="delCloth"
                @click="deCloth(item)"
                title="删除"
                src="@/assets/img/delete.png"
              />
            </el-col>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>购物车没有商品，快去逛逛吧</div>
    <div class="totalCount">
      <div class="checkAll">全选</div>
      <div class="totalPrice">合计{{totalPrice}} 元</div>
      <div class="clothCount">
          {{totalCount}}已选商品
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectArrCloth:[],
      item:'',
      totalCount:0,
      totalPrice:0,
      list: [],
    }
  },
  created() {
    this.getList();
    // getTotalCount();
  },
  methods: {
    getTotalCount(){
      let totalPrice=0;
      let totalCount=0;
      this.list.forEach(item=>{
        if(item.checked){
          totalPrice=totalPrice+(parseFloat(item.price).toFixed(2)* parseFloat(item.active) * item.count)
          totalCount=totalCount + parseInt(item.count)
        }
      })
      this.totalCount=totalCount
      this.totalPrice=totalPrice
    },
    getList(){
        //ajax
        let arr=[
        {
          name: '款式1',
          count: '2',
          size: 'S',
          color: '红色',
          price: '300',
          active: '0.5',
          id: '1',
        },
        {
          name: '款式2',
          count: '2',
          size: 'S',
          color: '红色',
          price: '250',
          active: '0.5',
          id: '2',
        },
        {
          name: '款式3',
          count: '2',
          size: 'S',
          color: '红色',
          price: '100',
          active: '0.5',
          id: '3',
        },
        {
          name: '款式4',
          count: '2',
          size: 'S',
          color: '红色',
          price: '200',
          active: '0.5',
          id: '4',
        },
      ]
      arr.forEach(item=>{
        item.checked=false;
      })
      this.list=arr;
    },
    cutCount(item) {
      if(item.count ==0)return;
      item.count--;
      this.getTotalCount()
    },
    addCount(item) {
      item.count++;
      this.getTotalCount()
    },
    delCloth(item) {
      let index = this.list.findIndex(cloth => {
        return cloth.id == item.id;
      });
      this.list.splice(index, 1);
      this.getTotalCount()
    },
  },
  watch:{
    selectArrCloth(){
      this.getTotalCount()
      this.getTotalPrice()
    }
  }
};
</script>
<style scoped>
.haveCloth {
  position: relative;
  padding-top: 36px;
}
.noCloth {
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -200px;
}

.noCloth img {
  width: 100px;
}

.noClothMsg {
  letter-spacing: 3px;
  margin-left: 20px;
}

.noClotMsg a {
  color: #c9a978;
  margin: 0 20px;
}

.colorBox {
  width: 100%;
  display: table;
  border-spacing: 0px 10px;
}

.cloth-thead,
.cloth-tr {
  background: #fff;
}
.cloth-tr img{
  width: 25%;
}
.cloth-checkBox {
  width: 20px;
  height: 20px;
}

.checkboxImg {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  padding: 2px;
  margin-right: 10px;
}

.checkboxImg > img.checkedD {
  position: absolute;
  top: 3px;
  left: -5px;
  width: 110%;
}

.active-tr .checkboxImg > img.checkedD {
  display: block;
}

.checkboxImg > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.totalCount {
  height: 22px;
  background: #474747;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  color: #ffffff;
  padding: 15px;
  display: flex;
  justify-content: space-around;
}

.totalCount .goBuy {
  background: #c9a978;
  height: 100%;
}
.totalAllCheck {
  position: absolute;
  top: 15px;
  left: 10px;
  cursor: pointer;
}

.totalAllCheck > img {
  margin-top: -2px;
}

.totalAllCheck > span {
  margin-left: 5px;
}

.totalAllCheck {
  position: absolute;
  top: 15px;
  left: 10px;
  cursor: pointer;
}

.totalAllCheck > img {
  margin-top: -2px;
}
.totalAllCheck > span {
  margin-left: 5px;
}

.totalAllCheck > img.totalAllChecked {
  width: 20px;
  display: inline-block;
  vertical-align: middle;
}

.totalALLCheck > img.totalAllUnChecked{
  width: 26px;
  position: absolute;
  top: 3px;
  left: -3px;
}

.totalAllCheck > img.totalAllCheckedD {
  display: block;
}

.totalPrice > span,
.clothCount > span {
  color: #ffd36f;
  margin: 0 5px;
}

.ocloth-count > input {
  background-color: transparent;
  border: 1px solid #fff;
  margin: 0 5px;
}
.totalAllCheck > img.totalAllcheckedD {
  display: block;
}

.totalPrice > span,
.clothCount > span {
  color: #ffd36f;
  margin: 0 5px;
}

.ocloth-count > input {
  background-color: transparent;
  border: 1px solid #fff;
  margin: 0 5px;
  width: 40px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}

.clothAddCut > span:nth-child(1) {
  font-size: 30px;
  padding: 3px;
}

.sizeColorList > div > b {
  color: #000;
  font-weight: normal;
}

.sizeColorList > div > span {
  color: #939393;
  padding: 3px 12px;
  border: 1px solid #939393;
  cursor: pointer;
  margin-right: 10px;
}

.colorSumbit {
  padding: 5px 10px;
  background-color: #c9a978;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.colorCancel {
  cursor: pointer;
  color: #939393;
  margin-left: 10px;
}

.sizeColorListSJ {
  width: 0;
  border: 10px solid transparent;
  border-right: 10px solid #fff;
  top: 50%;
  left: -19px;
  margin-top: -5px;
}
</style>