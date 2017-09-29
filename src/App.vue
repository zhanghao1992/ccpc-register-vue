<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
body,
html {
  height: 100%;
}
#app {
  height: 100%;
  padding: 0 1rem;
}
</style>
