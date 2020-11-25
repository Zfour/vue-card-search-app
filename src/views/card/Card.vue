<template>
  <div >
  <nav-bar><div slot="center">牌库</div></nav-bar>
    <div class="card-nav-post-control">
    <tab-control :titles="['基础卡组','推荐卡组','制作中']"></tab-control>
      </div>
    <scroll :probe-type="3"
            class="card-scroll"
            ref="cardscroll"
            @scroll="contentscroll"
    >
<card-group :cardlist="cardlist"></card-group>
      </scroll>
    <transition name="fade">
      <back-to-top @click.native="backtotop" v-show="backtotopdisplay"></back-to-top>
    </transition>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";
  import Scroll from "@/components/common/scroll/Scroll";
  import TabControl from "@/components/cotent/tabcontrol/TabControl";
  import BackToTop from "@/components/cotent/backtotop/BackToTop";
  import CardGroup from "@/views/card/childcomponents/CardGroup";
  export default {
    name: "Card",
    components: {CardGroup, BackToTop, TabControl, Scroll, NavBar},
    data(){
      return {
        cardlist:[
          {
            name:"东风谷早苗",
            "imgurl":require("../../../public/static/card/people/Sanae.jpg"),
            type:"人类",
            cardnum:"27",
            skill:"恢复目标2点生命值",
            cost:"2",
            link:""
          },
          {
            name:"魂魄妖梦",
            "imgurl":require("../../../public/static/card/people/KonpakuYoumu.png"),
            type:"人类",
            cardnum:"17",
            skill:"获得2点护甲",
            cost:"2",
            link:""
          },
          {
            name:"帕秋莉·诺蕾姬",
            "imgurl":require("../../../public/static/card/people/Patchouli.png"),
            type:"人类",
            cardnum:"14",
            skill:"施法造成1点伤害",
            cost:"2",
            link:""
          },
          {
            name:"铃仙·优昙华院·因幡",
            "imgurl":require("../../../public/static/card/people/Reisen.png"),
            type:"人类",
            cardnum:"20",
            skill:"施法造成1点伤害",
            cost:"2",
            link:""
          },
        ],
        backtotopdisplay: false,
      }
    },
    methods:{
      contentscroll(position) {
        this.backtotopdisplay = -position.y > 900
      },
      backtotop() {
        this.$refs.cardscroll.Scroll.scrollTo(0, 0, 500);
      },
    }
  }
</script>

<style scoped>
.icon-link{
  float: right;
  padding-top:50px;
  width: 30px;
}
.card-group-info-type{
  margin: 10px;
  min-width: 48px;
}
.card-group-info-type span{
  background-color: #000000;
  padding:0 10px 0 10px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  width: auto;
}
.card-group-info-number{
  font-size:20px;
}
.head-img{
margin: 10px;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 8px;
}
.card-scroll{
  margin: 10px 0px 50px 0px;
  position: fixed;
  right: 0;
  left: 0;
  top: 92px;
  bottom: 49px;
  z-index: -1;
}
.card-group{
  justify-content: space-between;
  display: flex;
  background-color: white;
  height:120px;
  margin: 10px 10px 20px 10px;
  box-shadow:0 2px 5px 0 rgba(102, 102, 102, 0.2);
  border-radius: 8px;
}
.card-group-info{
margin: 10px;
}
.card-group-info-title{
  font-size: 14px;
}
.card-group-info-title span{
  line-height: 2em;
}

.card-nav-post-control{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.05);
  z-index: 10;
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity .5s;
}
</style>
