<template>
    <div class="scroll-wrapper" ref="scrollwrapper">
     <div class="scroll-wrapper-content">
       <slot></slot>
     </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll"
    export default {
        name: "Scroll",
      data(){
          return{
Scroll:null,
          }
      },
      mounted() {
this.Scroll = new BScroll(this.$refs.scrollwrapper,{
 probeType:3,
  pullUpLoad:true,
})
      }
    }
</script>

<style scoped>

</style>
