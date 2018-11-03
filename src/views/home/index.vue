<template>
  <div class="home">
    home<br >
    this is my own website<br >
    i want everything will be better
    {{note}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  inject: ['reload'], // 注入依赖，刷新当前页面
  data () {
    return {
      note: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: auto;
}
</style>
