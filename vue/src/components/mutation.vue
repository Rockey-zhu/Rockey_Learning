<template>
    <div>
       <div> 
           {{list}}
           {{count}}
          <button @click="increase">+5</button>
          <button @click="decreased">-5</button>
       </div>
        
      <!-- <div>  {{$store.state.list}}</div> -->
    </div>
</template>
<script>
export default {
    computed:{
        // list(){
        //   (item=>{return item<10});   
        // },
        count(){
            return this.$store.state.count;
        }
    },
   methods: {
     increase:function(){
        this.$store.commit('increase')
     },
     decreased:function(){
         this.$store.commit('decreased')
     }
   }
}
</script>