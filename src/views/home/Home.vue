<template>
  <div class="home">
  <nav-bar><div slot="center">醉梦传说助手</div></nav-bar>
    <scroll class="home-scroll" ref="homescroll">
    <img-slider :cresult="result" ref="imageslider" @sliderImageLoadSuccess="refreshscroll"></img-slider>
    <div class="main-content">
    <version></version>
    <home-menu></home-menu>
      <div class="page-bottom-block"></div>
  </div>
    </scroll>
  </div>
</template>

<script>
  import {getHomeMutidata} from "@/network/home";
  import NavBar from "../../components/common/navbar/NavBar";
  import ImgSlider from "../../components/common/swiper/ImgSlider";
  import Version from "../../components/cotent/version/Verson";
  import HomeMenu from "../../components/cotent/homemenu/HomeMenu";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "Home",
    components: {Scroll, HomeMenu, Version, ImgSlider, NavBar},
    mounted() {
    },
    methods:{
      refreshscroll(){
        this.$refs.homescroll.Refresh()
      }
    },
    data(){
      return {
        result:[],
        results:[],
      }
    },
    activated() {
      this.result = this.results
     // this.$refs.imageslider.start()
      //console.log(this.$refs.imageslider.$refs.mySwiper.$swiper.autoplay.start())
    },
    deactivated() {
     // this.$refs.imageslider.stop()
      this.result = []
    },

    created() {
      getHomeMutidata().then(
        results => {
          this.results = results.data
          this.result = this.results
          console.log(this.result)
        }
      )
    },
  }
</script>

<style scoped>
  .home-scroll{
    margin:10px 0 10px 0;
    position: fixed;
    right: 0;
    left:0;
    top:44px;
    bottom: 49px;
  }
  .main-content{
    padding:0 5px;
  }
  .page-bottom-block{
height:5px
  }
  .home{

  }
</style>
