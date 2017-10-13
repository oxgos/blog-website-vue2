<template>
  <div class="acticle">
      <div class="main">
          <div class="banner"></div>
          <div class="bloglist"></div>
      </div>
      <aside>
          <div class="avatar">
              <router-link to="/"></router-link>
          </div>
      </aside>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import './acticle.less';
</style>
