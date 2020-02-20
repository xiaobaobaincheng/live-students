<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-10-08 16:48:16
 -->
<template>
  <div id="pos-tag" class="pos-tag section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">词性标注</h2>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div class="tags-list">
          <span
            class="item"
            v-for="(item,index) in tagsList"
            :key="index"
            :style="{backgroundColor:item.color}"
          >{{item.title}}</span>
        </div>
      </page-session>
    </div>
    <explain :height="'583px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import section from "@/common/mixin/section.js";

export default {
  name: "pos-tag",
  mixins: [section],
  data() {
    return {
      tagsList: []
    };
  },
  created() {},
  mounted() {},
  computed: {
    isExist() {
      if (JSON.stringify(this.wordtag) == "{}") {
        return false;
      } else {
        return true;
      }
    },
    tags() {
      return this.posTag.tags;
    },
    text() {
      return this.posTag.text;
    }
  },
  watch: {
    wordtag(newVal, oldVal) {
      let tagsObj = newVal;
      let tagsArr = [];
      for (let key in tagsObj) {
        this.tags.forEach((item, index) => {
          if (tagsObj[key] == item.title) {
            tagsArr.push({
              title: key,
              color: item.color
            });
            return;
          }
        });
      }
      this.tagsList = tagsArr;
    }
  },
  methods: {}
};
</script>

<style lang="less">
@import "../../../common/assets/style/section.less";
@import "./index.less";
</style>
