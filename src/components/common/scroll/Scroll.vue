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
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      Finishpullup(){
       this.Scroll.finishPullUp()
      },
      Refresh(){
        this.Scroll.refresh()
        console.log('执行！')
      }
    },
    data() {
      return {
        Scroll: null,
      }
    },
    mounted() {

      this.Scroll = new BScroll(this.$refs.scrollwrapper, {
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,
      })
      this.Scroll.on('scroll',(position) => {
        this.$emit("scroll",position)
      })
      if(this.pullUpLoad === true){
        this.Scroll.on('pullingUp',()=>{
          this.$emit("pullingUp")
        })
      }
    }
  }
</script>

<style scoped>

</style>
