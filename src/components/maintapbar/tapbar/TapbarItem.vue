<template>
<div class="tapbar-item" @click="itemClick()" :class="{isactive:isActive}">
  <div v-if="!isActive" ><slot name="itemdeactive"></slot></div>
  <div v-else ><slot name="itemactive"></slot></div>
  <div :style="styleColor"><slot name="itemname"></slot></div>
</div>
</template>

<script>
export default {
  name: "TapbarItem",
  props:{
    path:String,
    activeColor: {
      type:String,
      default:'red'
    }
  },
  data(){
    return{

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    styleColor(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>

</style>