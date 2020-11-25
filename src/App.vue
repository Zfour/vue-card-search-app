<template>
  <div id="app">
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <main-tap-bar></main-tap-bar>
  </div>
</template>
<script>


  import MainTapBar from "./components/common/maintapbar/MainTapBar";

  export default {
    name: "App",
    components: {MainTapBar},
    data() {
      return {}
    }
  }
</script>
<style>
  @import "./assets/css/base.css";

</style>
