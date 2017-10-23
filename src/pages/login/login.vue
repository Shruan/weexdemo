<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo" @click="update"></image>
    <text class="title">Hello {{target}}</text>
    <button type="button" name="button" @click="update">>dsassd</button>
    <text class="desc">Now, let's use vue to build your weex app.</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        logoUrl: 'http://img1.vued.vanthink.cn/vued08aa73a9ab65dcbd360ec54659ada97c.png',
        target: 'World'
      }
    },
    methods: {
      update (e) {
        console.log('xxxx')
        this.$router.push({path: '/test'})
      }
    }
  }
</script>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { padding-top:40px; padding-bottom: 40px; font-size: 48px; }
  .logo { width: 360px; height: 156px; }
  .desc { padding-top: 20px; color:#888; font-size: 24px;}
</style>
