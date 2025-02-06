<template>
    <div id="en">
        <ul class="shop_contaier">
           <li v-for="item in goods" :key="item.id" class="shop_container_li">
                <div class="shopping_img">
                    <img:src="item.img" alt="" width="100px" height="100%">
                </div>
                <div class="shop_detail">
                    <p class="shop_name">{{item.name}}</p>
                    <p class="shop_price">单价:{{item.price}}</p>
                    <div class="shop_btn">
                        <Button class="use_btn" type="error" ghost @click="handlereduce(item.id)">-</Button>
                        <span>{{item.num}}</span>
                        <Button class="use_btn" type="error" ghost @click="handleadd(item.id)">+</Button>
                    </div>
                </div>
            </li>
        </ul>
        <div class="foot">
            <div class="total_price"></div>
                <span>合计：￥{{totalPrice}}</span>
        </div>
        <div class="total_price">
            <span>合计：￥{{totalPrice}}</span>
        </div>
        <div class="total_num">
            <span>去结账:{{$store.state.modules.totalNum}}</span>
            <br>
            <Poptip confirm title="你是否要购买？" @on-ok="ok" @on-cancel="cancel">
                <Button class="btn_buy">结算</Button>
            </Poptip>
        </div>
        <br/>

       </div>
</template>
<script>
    export default{
        mounted() { 
            
        }
    }
</script>