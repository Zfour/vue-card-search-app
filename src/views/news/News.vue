<template>
  <div >
    <nav-bar>
      <div slot="center">新闻</div>
    </nav-bar>
   <div class="news-nav-post-control">
     <tab-control @tabclick="tabclick" :titles="['公告','活动','版本']"></tab-control>
   </div>
    <scroll class="news-list-scroll" ref="listscroll">
      <news-list :listdata="switchtype"></news-list>
    </scroll>
    <back-to-top @click.native="backtotop"></back-to-top>
  </div>
</template>

<script>
  import {getNewsMutidata} from "../../network/news";
  import TabControl from "../../components/cotent/tabcontrol/TabControl";
  import NavBar from "../../components/common/navbar/NavBar";
  import NewsList from "./childcomponents/NewsList";
  import BackToTop from "../../components/cotent/backtotop/BackToTop";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "News",
    components: {Scroll, BackToTop, NewsList, NavBar, TabControl},
    data(){
      return{
        currenttype:'notice',
        newslist:{
          notice:{id:515,page:0,list:[]},
          activity:{id:511,page:0,list:[]},
          release:{id:509,page:0,list:[]}
        }
      }
    },
    created() {
      this.getNewsData('notice');
      this.getNewsData('activity');
      this.getNewsData('release');
    },
    mounted() {
      this.$bus.$on('itemImageLoad', () => {
        this.$refs.listscroll.Scroll.refresh()
      })
    },
    computed:{
     switchtype(){
      return  this.newslist[this.currenttype].list
     }
    },
    methods:{
      backtotop(){
  this.$refs.listscroll.Scroll.scrollTo(0,0,500);
        console.log(this.$refs.listscroll.Scroll)
      },
      tabclick(index){
switch (index) {
  case 0:
this.currenttype = 'notice'
        break
  case 1:
    this.currenttype = 'activity'
        break
  case 2:
    this.currenttype = 'release'
}
      },
      gettype(){

      },
      getNewsData(type){
        const page = this.newslist[type].page + 1;
        getNewsMutidata(this.newslist[type].id,
          page).then( res => {
            console.log(res);
          this.newslist[type].list.push(...res.data);
          this.newslist[type].page += 1
          }
        ).catch()
      }
    }
  }
</script>

<style scoped>
.news-nav-post-control{
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
  .news-list-scroll{
  margin:10px 0px 50px 0px;
  position: fixed;
  right: 0;
  left:0;
  top:92px;
  bottom: 49px;
    z-index: -1;
  }
</style>
