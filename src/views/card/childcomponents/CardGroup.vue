<template>
<div >
  <div class="card-group" v-for="(item,index) in cardlist" :key="index">
    <img class="head-img" :src="item.imgurl">
    <div class="card-group-info">
      <div class="card-group-info-title">
        <span style="font-weight: bold">{{item.name}}</span>
        <br>
        <span style="font-size: 12px" >{{item.cardnum}}</span>
        <br>

        <span style="font-size: 12px">{{item.skill}}</span>
        <br>
        <span style="font-size: 12px">消耗：{{item.cost}}</span>

      </div>
    </div>
    <div class="card-group-info-type">
      <span>{{item.type}}</span>
      <br>
      <img class="icon-link" src="~@/assets/img/ui/lianjie.png">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "CardGroupItem",
  props: ["cardlist"]
}
</script>

<style scoped>
.icon-link{
  float: right;
  padding-top:50px;
  width: 30px;
}
.card-group-info-type{
  margin: 10px;
  min-width: 48px;
}
.card-group-info-type span{
  background-color: #000000;
  padding:0 10px 0 10px;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  width: auto;
}
.head-img{
  margin: 10px;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 8px;
}
.card-group{
  justify-content: space-between;
  display: flex;
  background-color: white;
  height:120px;
  margin: 10px 10px 20px 10px;
  box-shadow:0 2px 5px 0 rgba(102, 102, 102, 0.2);
  border-radius: 8px;
}
.card-group-info{
  margin: 10px;
}
.card-group-info-title{
  min-width: 120px;
  font-size: 14px;
}
.card-group-info-title span{
  line-height: 2em;
}
</style>
