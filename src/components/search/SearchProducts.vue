<template>


  <div>
    <van-dropdown-menu>
      <van-dropdown-item disabled title = "综合"/>
      <van-dropdown-item
          :options = "option1"
          @change = "priceChange" title = "价格" v-model = "priceVal"/>
      <!--    filterCategory已经处理了键和值  -->
      <van-dropdown-item :options = "filterCategory" @change = "categoryChange" title = "分类" v-model = "categoryVal"/>
    </van-dropdown-menu>
    <!--    空标签展示,没有商品时-->
    <van-empty description = "描述信息商品不存在" image = "search" v-if = "goodsList.length < 1"></van-empty>
    <Products :goodsList = "goodsList" v-else></Products>

  </div>
</template>


<script>
import Products from "./Products";

/**
 * checked: true  value是谁则谁被checked 组件内置的
 text: "全部"
 value: 0
 */
export default {
  name: "SearchProducts",
  data() {
    return {
      priceVal: 'desc',
      //为了展示集合中哪个数据是被勾上的,做个遍历
      categoryVal: 0,
      option1: [
        {text: '价格高到低', value: 'desc'},
        {text: '价格低到高', value: 'asc'},
      ],
    };
  },
  beforeUpdate() {
    //数据挂载完毕 初始化数据选中
    this.filterCategory.map(item => {
      if (item.checked == true) {
        // console.log(item.value, "item")
        this.categoryVal = item.value
        return
      }
    })
  },
  methods: {
    categoryChange(value) {
      // console.log(value)
      //调用父组件方法
      this.$emit("categoryChange", value)
    },
    priceChange(val) {
      console.log(val)
      this.$emit("priceChange", val)
    }
  },
  props: ["goodsList", "filterCategory"]
  ,
  components: {Products,}
}
</script>
<style scoped>
</style>
