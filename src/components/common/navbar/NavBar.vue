<template>
<div class="nav-bar">
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.nav-bar{
  z-index:999;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  height: 44px;
  line-height: 44px;
  background-color: black;
  box-shadow: 0px 1px #0000002e;
}
  .left,.right{
    width:60px;
  }
  .center{
    flex: 1;/*将剩余空间全部占据*/
    color:white;
    text-align: center;
  }
</style>
