<template>
  <swiper  class="banner" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(image,index)  in cresult" :key="index">
<a :link="image.imageUrl">
  <img class="slider-img" :src="image.imageUrl" alt="">
</a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  // import style (<= Swiper 5.x)
  import 'swiper/css/swiper.css'

    export default {
        name: "ImgSlider",
       props:['cresult'],
      components: {
        Swiper,
        SwiperSlide
      },
      directives: {
        swiper: directive
      },
      data() {
        return {
          imglist:[],
          swiperOptions: {
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            // Some Swiper option/callback...
          }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper
        }
      },
      mounted() {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(1, 1000, false)
      }
    }
</script>

<style scoped>
.slider-img{
  width:100vw;
  height:100%;
}
.banner {
  box-shadow:0 2px 5px 0 rgba(102, 102, 102, 0.2);
  margin:10px;
  margin-top: 54px;
  border-radius: 8px;
  height: 560px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 991px) {
  .banner {
    height: 460px;
  }
}

@media (max-width: 767px) {
  .banner {
    height: 250px;
  }
}
</style>
