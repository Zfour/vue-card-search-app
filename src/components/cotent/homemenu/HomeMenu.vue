<template>
<div class="home-menu">
  <div class="home-menu-item">
    <img>
    <div>游戏下载</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>更新日志</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>热门卡组</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>排行榜</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>DIY投稿</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>游戏众筹</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>加入我们</div>
  </div>
  <div class="home-menu-item">
    <img>
    <div>BUG反馈</div>
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
    height: 100%;
    display: flex;
    flex-wrap:wrap;
    text-align: center;
    margin-bottom:60px;
  }
.home-menu-item{
min-height: 50vw;
  width: 50%;
  border:5px solid #f6f6f6;
  height: auto;
  background-color: #ffffff;
}
</style>
