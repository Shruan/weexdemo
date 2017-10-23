<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <p>test1</p>
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
    created () {
      console.log('test')
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>

<style scoped>

</style>
