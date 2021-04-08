<template>
  <div id = "app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #efefef;
  /*最小宽度100%盒子填充满*/
  min-height: 100%;
  font-size: .14rem;
}

body, html {
  height: 100%;
}

html {
  font-size: 100px !important;
}

</style>
