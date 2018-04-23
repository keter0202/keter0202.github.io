<template>
  <div id="app">
    <v-header></v-header>
  </div>
</template>

<script>
import vheader from '../src/components/header/header.vue'

export default {
  name: 'App',
  components: {
    'v-header': vheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
