<template>
  <div>
    <nav-bar>
      <div slot="center">新闻</div>
    </nav-bar>
    <div class="news-nav-post-control">
      <tab-control @tabclick="tabclick" :titles="['公告','活动','版本','更新']"></tab-control>
    </div>
    <scroll :probe-type="3"
            :pull-up-load="true"
            class="news-list-scroll"
            ref="listscroll"
            @scroll="contentscroll"
            @pullingUp="loadmore"
    >
      <news-list :listdata="switchtype" @finalPushItemImageLoad="refresh"></news-list>
    </scroll>
    <transition name="fade">
      <back-to-top @click.native="backtotop" v-show="backtotopdisplay"></back-to-top>
    </transition>

  </div>
</template>

<script>
  import {getNewsMutidata} from "../../network/news";
  import {getThgNewsMutidata} from "../../network/zmcsnews"
  import TabControl from "../../components/cotent/tabcontrol/TabControl";
  import NavBar from "../../components/common/navbar/NavBar";
  import NewsList from "./childcomponents/NewsList";
  import BackToTop from "../../components/cotent/backtotop/BackToTop";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: "News",
    components: {Scroll, BackToTop, NewsList, NavBar, TabControl},
    data() {
      return {
        currenttype: 'notice',
        backtotopdisplay: false,
        newslist: {
          notice: {id: 515, page: 0, list: []},
          activity: {id: 511, page: 0, list: []},
          release: {id: 509, page: 0, list: []},
          verson: {page: 0, list: [],content:'' },
        }
      }
    },
    created() {
      getThgNewsMutidata(4).then(
        res =>{
          console.log(res);
          for(let item of res){
            let reitem ={imgList:['https://thg.igsk.fun/wp-content/uploads/2020/05/53031871_p0.jpg'],title:''};
            reitem.title=item.title.rendered;
            reitem.content=item.content.rendered;
            reitem.time=item.date.replace(/T/g," "),
            //console.log(item.title)
            this.newslist.verson.list.push(reitem);
            console.log(this.newslist.verson)
          }

        }
      );
      this.getNewsData('notice');
      this.getNewsData('activity');
      this.getNewsData('release');
    },
    computed: {
      switchtype() {
        return this.newslist[this.currenttype].list
      }
    },
    methods: {
      loadmore() {
        this.getNewsData(this.currenttype)
      },
      refresh() {
        this.$refs.listscroll.Refresh()
      },
      contentscroll(position) {
        this.backtotopdisplay = -position.y > 900
      },
      backtotop() {
        this.$refs.listscroll.Scroll.scrollTo(0, 0, 500);
      },
      tabclick(index) {
        switch (index) {
          case 0:
            this.currenttype = 'notice';
            this.$refs.listscroll.Scroll.scrollTo(0, 0, 200);
            break
          case 1:
            this.currenttype = 'activity';
            this.$refs.listscroll.Scroll.scrollTo(0, 0, 200);
            break
          case 2:
            this.currenttype = 'release';
            this.$refs.listscroll.Scroll.scrollTo(0, 0, 200);
          case 3:
            this.currenttype = 'verson';
            this.$refs.listscroll.Scroll.scrollTo(0, 0, 200);
        }
      },
      gettype() {

      },
      getNewsData(type) {
        const page = this.newslist[type].page + 1;
        getNewsMutidata(this.newslist[type].id,
          page).then(res => {
            console.log(res);
            this.newslist[type].list.push(...res.data);
            this.newslist[type].page += 1;
            this.$refs.listscroll.Finishpullup()
          }
        ).catch()
      }
    }
  }
</script>

<style scoped>
  .news-nav-post-control {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 1px rgba(0, 0, 0, 0.05);
    z-index: 10;
  }

  .news-list-scroll {
    margin: 10px 0px 50px 0px;
    position: fixed;
    right: 0;
    left: 0;
    top: 92px;
    bottom: 49px;
    z-index: -1;
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
