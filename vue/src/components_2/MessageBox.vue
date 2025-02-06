<template>
 <div>
    <Button type="primary" @click="handleToModal1">点击上传信息{{tabs}}</Button>
    <Modal
        v-model="modal1"
        title="输入信息"
        @on-ok="ok"
        @on-cancel="cancel">
       id：<Input v-model="Id" placeholder="Enter something..." style="width: 300px" /><br>
       password：<Input v-model="password" placeholder="Enter something..." style="width: 300px" />
    </Modal>
     <Table :columns="colTable" :data="tabs"></Table>
 </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

    export default {
        data () {
            return {
                modal1: false,
                colTable:[{
                    title:"Id",
                    key:"Id"
                },{
                    title:"password",
                    key:"password"
                }],
                Id:" ",
                password:"",
            }
        },
        computed:{
            // ...mapState([
            //     // "logs",
            //     // "nickName"
            //     ]),
                tabs () {
                    return this.$store.state.tabs.tabs;
                }
        },
        methods: {
            ...mapMutations(["setTabs"]),
            handleToModal1(){
                this.modal1 =true;
                this.Id=" "
                this.password=""
            },
            ok(){
                console.log(this.Id);

                //需要将输入的值传给tabs,需要通过mapaction
                /*********************** */
                let obj=[{Id:"",password:""}]
                obj[0].Id=this.Id;
                obj[0].password=this.password;
                console.log(obj)
                /************************* */
                this.setTabs({
                    tabs:obj
                })
            },
            cancel () {
                this.$Message.info('取消');
            }
        },
        // mounted() {
        //     console.log("--logs--",this.logs)
        // },
        
    }
</script>