<template>
  <div id="app">
    <router-view></router-view>
    <main-tap-bar></main-tap-bar>
  </div>
</template>
<script>


import MainTapBar from "./components/maintapbar/MainTapBar";
export default {
  name: "App",
  components: {MainTapBar},
  data() {
    return {

    }
  }
}
</script>
<style>
body{
  padding: 0;
  margin: 0;
}

</style>
