<template>
  <div>
    <!--    历史搜索-->
    <div class = "his-hot" v-show = "isShowHistory">
      <div class = "hd">
        <h4>历史记录</h4>
        <van-icon @click = "clearHistory"
                  name = "delete"
        />
      </div>
      <div class = "bd">
        <van-tag :key = index @click = "tagClick(item)"
                 plain
                 type = "default"
                 v-for = "(item,index) in historyListData"
        >{{ item }}
        </van-tag>
      </div>
    </div>
    <div class = "his-hot">
      <div class = "hd">
        <h4>热门搜索</h4>
      </div>
      <div class = "bd">
        <van-tag :class = "item.is_hot == 1? 'red' :'' " :key = "index" @click = "tagClick(item.keyword)" plain
                 type = "default"
                 v-for = "(item,index) in hotKeywordListData">
          {{ item.keyword }}
        </van-tag>
      </div>
    </div>
  </div>
</template>
<script>
import {ClearHistory} from "../../request/api";
import {Toast} from "vant";

export default {
  name: "History",
  data() {
    return {
      isShowHistory: true
    }
  },
  methods: {
    tagClick(val) {
      console.log(val)
      this.$emit("tagClick", val)
    },
    clearHistory() {
      ClearHistory().then(res => {
        if (res.data.errno == 0) {
          console.log(res.data)
          //延时隐藏历史记录
          setTimeout(() => {
            this.isShowHistory = false
          }, 1000)
          this.$toast.success("删除成功")
        }
      }).catch(err => {

      })
    }

  },
  props: ["historyListData", "hotKeywordListData"],
}
</script>
<style scoped>
.his-hot {
  background-color: #fff;
  padding: .1rem;
  margin-bottom: .5rem;
}

.red {
  color: red;
}

.hd {
  font-size: .24rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: .05rem;

h4 {
  font-size: .2rem;
}

}
.van-tag {
  padding-top: .02rem;
  margin-top: .02rem;
  margin-bottom: .05rem;
  margin-right: .05rem;
}
</style>
