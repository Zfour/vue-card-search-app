<template>
<div class="home-menu">
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/xiazai-01.png">
    <div class="home-menu-title">游戏下载</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/bangzhushouce.png">
    <div class="home-menu-title">更新日志</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/kapian-01.png">
    <div class="home-menu-title">热门卡组</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/liebiao.png">
    <div class="home-menu-title">排行榜</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/bianjiziliao.png">
    <div class="home-menu-title">DIY投稿</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/xihuan-01.png">
    <div class="home-menu-title">交流群</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/haoyou.png">
    <div class="home-menu-title">加入我们</div>
  </div>
  <div class="home-menu-item">

    <img class="home-menu-img" src="~@/assets/img/home-menu/shanchu-01.png">
    <div class="home-menu-title">BUG反馈</div>
  </div>

  </div>

</template>

<script>
    export default {
        name: "HomeMenu"
    }
</script>

<style scoped>
  .home-menu{
    display: flex;
    height: 100%;
    justify-content: space-between;
    flex-wrap:wrap;
    text-align: center;
    margin-bottom:20px;
    margin-left: 10px;
    margin-right: 10px;
  }
.home-menu-item{
  box-shadow:0 2px 5px 0 rgba(102, 102, 102, 0.2);
  margin-top:3vw;
  border-radius: 8px;
min-height: calc(48.5vw - 10px);
  width: 48.5%;
  height: auto;
  background-color: #ffffff;
}
  .home-menu-img{
    height: 20vw;
    width:  20vw;
    margin-top: 8vw;
  }
  .home-menu-title{
    margin-top: 3vw;
  }
</style>
