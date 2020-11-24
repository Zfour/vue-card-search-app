<template>
    <div class="back-to-top">
      <img src="~@/assets/img/rocket/rocket.png">
    </div>
</template>

<script>
    export default {
        name: "BackToTop"
    }
</script>

<style scoped>
.back-to-top{
  box-shadow:0 2px 5px 0 rgba(102, 102, 102, 0.2);
  border-radius: 50px;
  position: fixed;
  right:20px;
  bottom: 80px;
  background-color: white;
  padding: 10px;
}
  .back-to-top img{
    width: 40px;
    height: 40px;
  }
</style>
