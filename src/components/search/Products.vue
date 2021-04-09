<template>
  <ul>
    <li :key = "item.id" v-for = "item in goodsList">
      <img :src = "item.list_pic_url" alt = "" style = "display: block;" width = "100%">
      <div class = "van-ellipsis">{{ item.name }}</div>
      <div class = "price">{{ item.retail_price | RMBformat }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      imgSrc: require("@/assets/logo.png"),
    }
  },
  props: ["goodsList",]
}
</script>

<style scoped>
ul {
  padding: .1rem 2%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

li {
  width: 49%;
  margin-bottom: .1rem;
  background: #fff;
  text-align: center;
  line-height: .3rem;
}

.price {
  color: #e51212;
}
</style>
