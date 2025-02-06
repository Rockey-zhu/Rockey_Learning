<template>
    <div>
        <h1>
            {{$store.getters.reverseMsg}}
        </h1>
        <h2>
            {{reverseMsg}}
        </h2>
        <h2>{{mixinMsg}}</h2>
        <h2>{{msg}}</h2>
        <h2>{{num}}</h2>
        <h2>{{mixinMsg1}}</h2>
        <div>{{list}}</div>
    </div>
</template>

<script>
import  {mapGetters,mapState} from 'vuex'
let mapGetData=mapGetters(['reverseMsg','mixinMsg']);
let mapStateData=mapState(['msg','num'])
export default {
    mounted() {
        console.log(this)
    },
    // computed:{
    //     reverseMsg:function(){
    //         return this.$store.getters.reverseMsg
    //     }
    // },
    computed: {
        mixinMsg1:function(){
            return this.$store.getters.mixinMsg('vuex vuex')
        },
        ...mapGetData,
        ...mapStateData
        },
}
</script>