<template>
  <div class = "home">
    <van-search
      background = "#4fc08d"
      placeholder = "请输入搜索关键词"
      shape = "round"
      v-model = "searchVal"/>
    <van-button type = "primary">主要按键</van-button>
    <!--    步进框 +-栏-->
    <!--    <van-stepper v-model = "value"></van-stepper>-->
    <p>测试关键字</p>
  </div>
</template>

<script>
import '@/vantui'


export default {
  name: 'Home',
  data() {
    return {
      value: 10,
      searchVal: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
