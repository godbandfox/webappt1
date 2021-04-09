<template>

  <!-- List列表 -->
  <div>
    <van-list
      :finished = "finished"
      @load = "onLoad"
      finished-text = "没有更多了"
      v-model = "loading"
    >
      <van-cell :key = "item" :title = "item" @click = "cellClick(item)" v-for = "item in searchTipsListData"/>
    </van-list>
  </div>

</template>

<script>
export default {
  data() {
    return {
      loading: false,
      finished: true,
    };
  },
  props: ["searchTipsListData",],
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    },
    cellClick(val) {
      console.log(val)
      this.$emit("cellClick", val);
    },
  },
}
</script>

<style scoped>

</style>
