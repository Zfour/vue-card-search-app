<template>
  <div id="app">
    <router-view></router-view>
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
