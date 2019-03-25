<template>
<div>
  <router-view/>
  <FooterGuide v-show="$route.meta.isShow"/>
</div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default{
  async mounted(){
//异步获取当前地址信息
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUser')

  },


  components:{
    FooterGuide
  }
}

</script>
<style>


</style>
