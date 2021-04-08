<template>
  <div class = "home">
    <van-search
      @click = "$router.push('/home/searchPopup')"
      background = "#4fc08d"
      disabled
      placeholder = "请输入搜索关键词"
      shape = "round" v-model = "searchVal"/>
    <!--    <van-button type = "primary">主要按键</van-button>-->
    <!--    轮播图-->
    <van-swipe :autoplay = "3000" class = "my-swipe" indicator-color = "blue">
      <van-swipe-item :key = "item.id" v-for = "item in banner">
        <img :src = "item.image_url" :style = "{display:'block'}" @click = "" alt = "" height = "auto" width = "100%">
      </van-swipe-item>
    </van-swipe>
    <!--    步进框 +-栏-->
    <!--    <van-stepper v-model = "value"></van-stepper>-->
    <transition name = "van-slide-right">
      <!--      name会自动扩展class 6种格式-->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {GetHomeList} from "@/request/api"

export default {
  name: 'Home',
  data() {
    return {
      value: 10,
      searchVal: '',
      banner: [],
    }
  },
  created() {
    GetHomeList()
      .then(res => {
        //和后端传递的参数有关
        //错误码判断
        /*        if (res.errno == 0) {

                }*/
        this.banner = res.data.data.banner
        console.log(res.data.data.banner)
      })
      .catch(err => {
        console.log('error')
        console.log(err)
      })
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
