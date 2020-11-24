<template>
  <div>
    <nav-bar>
      <div slot="center">新闻</div>
    </nav-bar>
    <div class="news-nav-post-control">
      <tab-control @tabclick="tabclick" :titles="['公告','活动','版本']"></tab-control>
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
          release: {id: 509, page: 0, list: []}
        }
      }
    },
    created() {
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
      debounce(func, delay) {
        let timer = null
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          }, delay)
        }
      },
      loadmore() {
        this.getNewsData(this.currenttype)
      },
      refresh() {
        const refreshde = this.debounce(this.$refs.listscroll.Refresh,500)
        refreshde()
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
            this.currenttype = 'notice'
            break
          case 1:
            this.currenttype = 'activity'
            break
          case 2:
            this.currenttype = 'release'
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
    box-shadow: 0px 1px rgba(0, 0, 0, 0.1);
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
