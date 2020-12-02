<template>
<div class="news-list-item">
  <p class="new-list-time">{{listdataitem.postTime}}</p>
  <div class="news-cell">
    <img :src="listdataitem.imgList[0]" @load="imageLoad()">
    <p class="new-list-title">{{listdataitem.title}}</p>
    <p class="new-list-title-time">{{listdataitem.time}}</p>
    <div class="new-list-context" v-html="listdataitem.content"></div>
  </div>
</div>
</template>

<script>
    export default {
        name: "NewsListItem",
      props:['listdataitem'],
      methods:{
          debounce(func, delay) {
          let timer = null
          return function (...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
              func.apply(this,args)
            }, delay)
          }
        },
        imageLoad() {
          this.$emit('itemImageLoad')
        }
      }
    }
</script>

<style scoped>
  .new-list-title-time{
    color:#cccccc;
    padding: 10px 15px 20px;
    background-color: white;
    font-size:14px;
    font-weight: bold;
    border-radius: 0px 0px 0px 0px;
  }
  .new-list-title{
    color:var(--color-text);
    padding: 20px 15px 0px;
    background-color: white;
    font-size:18px;
    font-weight: bold;
    border-radius: 0px 0px 8px 8px;
  }
  .new-list-context{
    list-style-type:none;
    color:var(--color-text);
    padding: 0px 15px 20px 15px;
    background-color: white;
    font-size:16px;
    border-radius: 0px 0px 8px 8px;
    text-decoration: none;
  }
  .new-list-time{
    color: #cccccc;
    font-size: 14px;
    margin-top: 0px;
  }
  .news-cell{
   margin: 10px 10px 20px 10px;
    box-shadow:0 2px 5px 0 rgba(102, 102, 102, 0.2);
    border-radius: 8px;
  }
.news-list-item img{
  width:100%;
  height: 50vw;
  border-radius: 8px 8px 0px 0px;
}
  .news-list-item{
    flex-direction:column;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
