<template>
  <div >
    <nav-bar>
      <div slot="center">新闻</div>
    </nav-bar>
   <div class="news-nav-post-control">
     <tab-control @tabclick="tabclick" :titles="['公告','活动','版本']"></tab-control>
   </div>
    <div>
      <news-list :listdata="switchtype"></news-list>
    </div>
  </div>
</template>

<script>
  import {getNewsMutidata} from "../../network/news";
  import TabControl from "../../components/cotent/tabcontrol/TabControl";
  import NavBar from "../../components/common/navbar/NavBar";
  import NewsList from "./childcomponents/NewsList";

  export default {
    name: "News",
    components: {NewsList, NavBar, TabControl},
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
    computed:{
     switchtype(){
      return  this.newslist[this.currenttype].list
     }
    },
    methods:{
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
  position:sticky;
  top:44px;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.1);
}
</style>
