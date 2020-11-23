<template>
    <div class="tab-control">
   <div @click="active(index)" class="tab-control-item" v-for="(item,index) in titles" :class="{active:index === currentindex}">
     <span>{{item}}</span>
   </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:["titles"],
      data(){
          return{
            currentindex:0,
          }
      },
      methods:{
        active(index){
         this.currentindex = index;
         this.$emit('tabclick',index)
        }
      }
    }
</script>

<style scoped>
  .tab-control{
    background-color: white;
    display: flex;
    margin-top:44px;
    text-align: center;
  }
  .tab-control-item{
    font-size: 12px;
    padding: 15px 0 20px;
    flex:1;
  }
  .tab-control-item span{
    padding :12px;
  }
  .active {
    color:var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
