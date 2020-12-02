<template>
<div class="home-menu">
  <div class="home-menu-item" @click="downloadapp">
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
        name: "HomeMenu",
      methods:{
        downloadapp(){
          console.log("aaa")
          var u = navigator.userAgent;
          var ua = navigator.userAgent.toLowerCase();
          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
          var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
          if(ua.match(/MicroMessenger/i)=="micromessenger") {   //微信内置浏览器+应用宝链接
              //跳转到下载地址  这块我写的是安卓下载地址
              window.location.href='https://igsk.cdn.bigkeer.cn/thg/android/%E9%86%89%E6%A2%A6%E4%BC%A0%E8%AF%B4-latest.apk'
          }else{
            if(isiOS){

                //跳转到ios下载地址
                alert("暂不支持苹果手机进行游戏，请使用pc端进行游戏！")


            }else if(isAndroid){

                window.location.href='https://igsk.cdn.bigkeer.cn/thg/android/%E9%86%89%E6%A2%A6%E4%BC%A0%E8%AF%B4-latest.apk'

            }else{  //PC 端

                window.location.href='https://thg.igsk.fun/download/'

            }

          }
        }
      }
    }
</script>

<style scoped>
  .home-menu-item-link{

  }
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
  cursor:pointer ;
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
