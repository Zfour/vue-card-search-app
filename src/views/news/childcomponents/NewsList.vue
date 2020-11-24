<template>
<div class="news-list">
    <news-list-item :key="index" v-for="(item,index) in listdata" :listdataitem="item" @itemImageLoad="pushItemImageLoad"></news-list-item>
</div>
</template>

<script>
    import NewsListItem from "./NewsListItem";
    export default {
        name: "NewsList",
      components: {NewsListItem},
      props:['listdata'],
      methods:{
        pushItemImageLoad(){
          this.$emit('finalPushItemImageLoad')
        }
      }
    }
</script>

<style scoped>
.news-list{
  margin-top: 20px;

}
</style>
