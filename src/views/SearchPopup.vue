<template>
  <div class = "search-popup">
    <form action = "/">
      <van-search
        :placeholder = "placeholderVal"
        @cancel = "onCancel"
        @input = "onInput"
        @search = "onSearch"
        show-action
        v-model = "searchVal"
      />
    </form>
    <History :historyListData = 'historyListData' :hotKeywordListData = "hotKeywordListData"
             @tagClick = "tagClick"
             v-if = "blockShow == 1"
    ></History>
    <SearchTipsList
      :searchTipsListData = "searchTipsListData"
      @cellClick = "tagClick" v-else-if = "blockShow == 2"></SearchTipsList>
    <SearchProducts :filterCategory = "filterCategory"
                    :goodsList = "goodsList"
                    @categoryChange = "categoryChange"
                    @priceChange = "priceChange"
                    v-else
    ></SearchProducts>
  </div>
</template>
<script>
import {Toast} from "vant";
import History from "../components/search/History";
import {GetGoodsListData, GetSearchPopupData, GetSearchTipsListData} from "../request/api";
import SearchTipsList from "../components/search/SearchTipsList.vue"
import SearchProducts from "../components/search/SearchProducts";

export default {
  name: "SearchPopup",
  data() {
    return {
      searchVal: '',
      placeholderVal: '',
      blockShow: 1,
      historyListData: [],
      hotKeywordListData: [],
      //  实时搜索提示列表
      searchTipsListData: [],
      //搜索产品内容的分类数据
      filterCategory: [],
      //搜索产品内容的列表数据
      goodsList: [],
      //价格排序: 高到低低到高
      order: "desc",
      //分类Id
      categoryId: 0,
      //默认的搜索方式
      sort: "price"
    }
  },
  methods: {
    tagClick(val) {
      this.searchVal = val
      this.onSearch(val)
    },
    categoryChange(value) {
      this.categoryId = value
      this.onSearch(this.searchVal)
    },
    priceChange(value) {
      this.order = value
      this.sort = 'price'
      this.onSearch(this.searchVal)
    },
    onSearch(val) {
      this.blockShow = 3;
      Toast(val);
      GetGoodsListData({
        keyword: val,
        page: 1,
        size: 10,
        order: this.order,
        categoryId: this.categoryId,
        sort: this.sort,
      }).then(res => {
        if (res.data.errno == 0) {
          // filterCategory
          // goodsList
          let {filterCategory, goodsList} = res.data.data
          this.goodsList = goodsList
          //处理参数,vant组件的属性名字固定了,所以修改接收的参数键名
          let newArr = JSON.parse(JSON.stringify(filterCategory).replace(/name/g, 'text')
            .replace(/id/g, 'value'))
          console.log(newArr)
          this.filterCategory = newArr

          console.log(res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    onCancel() {
      this.searchVal = '';
      Toast('取消');
      this.$router.go(-1);//返回上一级
    },
    //输入框内容发生变化
    onInput(val) {
      this.blockShow = 2;
      GetSearchTipsListData({keyword: val}).then(res => {
        if (res.data.errno == 0) {

          this.searchTipsListData = res.data.data;
          console.log(res.data.data)
        }
      }).catch(err => {
        console.log(err)
      })
    },
  },
  components: {
    History,
    SearchTipsList,
    SearchProducts,
  },
  created() {
    GetSearchPopupData()
      .then(res => {
        if (res.data.errno == 0) {
          console.log(res.data)
          this.placeholderVal = res.data.data.defaultKeyword.keyword
          this.historyListData = res.data.data.historyKeywordList
          this.hotKeywordListData = res.data.data.hotKeywordList
        }
      })
      .catch(err => {
      })
  }
}
</script>
<style scoped>
.search-popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #fff;
}
</style>
