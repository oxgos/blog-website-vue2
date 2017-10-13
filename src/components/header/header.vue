<template>
  <div class="header">
      <header class="head">我是头部</header>
      <nav class="nav">
          <ul>
              <li class="active"><router-link to="/">首页</router-link></li>
              <li><router-link to="/about">关于我</router-link></li>
              <li><router-link to="/website">前端分享</router-link></li>
              <li><router-link to="/server">后端分享</router-link></li>
          </ul>
          <div class="logo">
            <router-link to="/"></router-link>
          </div>
      </nav>
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
  @import './header.less';
</style>
