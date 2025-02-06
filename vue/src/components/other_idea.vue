<template>
<div>
    <div>
    <Spin size="small"></Spin>
    <Spin></Spin>
    <Spin size="large"></Spin>
    </div>
     <div class="demo-spin-container">
        <Spin fix></Spin>
     </div>
      <div>
        <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
        <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
    </div>
    <div>
          <Scroll :on-reach-edge="handleReachEdge">
        <Card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0">
            Content {{ item }}
        </Card>
    </Scroll>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            return{
                 spinShow: true,
                 list3:[1,2,3,4,5,6,7,8,9,10]
            }
        },
         methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'ios-loading',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
             handleReachEdge (dir) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        if (dir > 0) {
                            const first = this.list3[0];
                            for (let i = 1; i < 11; i++) {
                                this.list3.unshift(first - i);
                            }
                        } else {
                            const last = this.list3[this.list3.length - 1];
                            for (let i = 1; i < 11; i++) {
                                this.list3.push(last + i);
                            }
                        }
                        resolve();
                    }, 2000);
                });
            }
       }
}
</script>
<style>
    .demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>