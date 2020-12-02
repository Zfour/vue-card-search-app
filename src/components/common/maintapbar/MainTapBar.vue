<template>
  <tap-bar>
    <tapbar-item path="/home" activeColor="black">
      <img slot="itemactive" class="tapbar-img" src="./tapbaricon/black/home.png">
      <img slot="itemdeactive" class="tapbar-img" src="./tapbaricon/white/home.png">
      <div class="tapbar-name" slot="itemname">
        首页
      </div>
    </tapbar-item>
    <tapbar-item path="/news" activeColor="black">
      <img slot="itemactive" class="tapbar-img" src="./tapbaricon/black/news.png">
      <img slot="itemdeactive" class="tapbar-img" src="./tapbaricon/white/news.png">
      <div class="tapbar-name" slot="itemname">
        新闻
      </div>
    </tapbar-item>
    <tapbar-item path="/card" activeColor="black">
      <img slot="itemactive" class="tapbar-img" src="./tapbaricon/black/details.png">
      <img slot="itemdeactive" class="tapbar-img" src="./tapbaricon/white/details.png">
      <div class="tapbar-name" slot="itemname">
        牌库
      </div>
    </tapbar-item>
    <tapbar-item path="/game" activeColor="black">
      <img slot="itemactive" class="tapbar-img" src="./tapbaricon/black/game.png">
      <img slot="itemdeactive" class="tapbar-img" src="./tapbaricon/white/game.png">
      <div class="tapbar-name" slot="itemname">
        对局
      </div>
    </tapbar-item>
    <tapbar-item path="/profile" activeColor="black">
      <img slot="itemactive" class="tapbar-img" src="./tapbaricon/black/profile.png">
      <img slot="itemdeactive" class="tapbar-img" src="./tapbaricon/white/profile.png">
      <div class="tapbar-name" slot="itemname">
        用户
      </div>
    </tapbar-item>
  </tap-bar>
</template>

<script>
  import TapBar from "./tapbar/Tapbar";
  import TapbarItem from "./tapbar/TapbarItem";

  export default {
    name: "MainTapBar",
    components: {TapBar, TapbarItem}
  }
</script>

<style scoped>
  .tapbar-img {
    width: 20px;
    height: 20px;
  }

  .tapbar-name {
    margin-top: -3px;
    font-size: 12px;
  }

  #tap-bar {
    height: 49px;
    display: flex;
    background-color: #000000;
    box-shadow: 0px -1px rgba(0, 0, 0, 0.05);
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .tapbar-item {

    color: white;
    flex: 1;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .tapbar-item:active {
    background-color: white;

  }

  .isactive {
    background-color: white;
  }
</style>
