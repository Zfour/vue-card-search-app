<template>
<div class="news-list-item">
  <p class="new-list-time">{{listdataitem.postTime}}</p>
  <div class="news-cell">
    <img :src="listdataitem.imgList[0]" @load="imageLoad()">
    <p class="new-list-title">{{listdataitem.title}}</p>
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
  .new-list-title{
    color:var(--color-text);
    padding: 20px 15px;
    background-color: white;
    font-size:16px;
    border-radius: 0px 0px 8px 8px;
  }
  .new-list-time{
    color: #cccccc;
    font-size: 14px;
    margin-top: 20px;
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
