<template>
<div class="news-list">
    <news-list-item :key="index" v-for="(item,index) in listdata" :listdataitem="item"></news-list-item>
</div>
</template>

<script>
    import NewsListItem from "./NewsListItem";
    export default {
        name: "NewsList",
      components: {NewsListItem},
      props:['listdata']
    }
</script>

<style scoped>
.news-list{
  margin-top: 20px;

}
</style>
