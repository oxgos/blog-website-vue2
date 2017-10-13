<template>
  <div id="app">
    <div class="app-wrapper">
      <v-header></v-header>
      <router-view/>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/header/header'

export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style lang="less">
#app {
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.app-wrapper {
  width: 1000px;
  margin: 0 auto;
  background: url('./assets/bg.png') repeat-y;
  box-shadow: -2px -1px 5px #666;
}
</style>
