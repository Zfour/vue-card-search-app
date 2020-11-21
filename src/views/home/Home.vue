<template>
  <div class="home">
  <nav-bar><div slot="center">醉梦传说助手</div></nav-bar>
    <img-slider :cresult="result"></img-slider>
    <div class="main-content">
    <version></version>
    <home-menu></home-menu>
  </div>
  </div>
</template>

<script>
  import {getHomeMutidata} from "../../network/home";
  import NavBar from "../../components/common/navbar/NavBar";
  import ImgSlider from "../../components/common/swiper/ImgSlider";
  import Version from "../../components/cotent/version/Verson";
  import HomeMenu from "../../components/cotent/homemenu/HomeMenu";

  export default {
    name: "Home",
    components: {HomeMenu, Version, ImgSlider, NavBar},
    data(){
      return {
        result:null
      }
    },
    created() {
      getHomeMutidata().then(
        results => {
          this.result = results.data
        }
      )
    }
  }
</script>

<style scoped>
  .main-content{
    padding:0 5px;
  }
</style>
