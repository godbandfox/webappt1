<template>
  <div class = "search-popup">
    <form action = "/">
      <van-search
        :placeholder = "placeholderVal"
        @cancel = "onCancel"
        @search = "onSearch"
        show-action
        v-model = "searchVal"
      />
    </form>
  </div>
</template>

<script>

import {Toast} from "vant";

export default {
  name: "SearchPopup",
  data() {
    return {
      searchVal: '',
      placeholderVal: '',

    }
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      this.searchVal = '';
      Toast('取消');
      this.$router.go(-1);//返回上一级
    },
  },
}
</script>

<style scoped>
.search-popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(117, 117, 117, .5);
}
</style>
