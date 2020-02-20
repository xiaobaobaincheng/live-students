<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-10-08 16:21:51
 -->
<template>
  <div id="abstract" class="abstract section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">文本摘要</h2>
        <!-- <a-radio-group :value="summaryTabs" @change="onChange">
          <a-radio-button value="maxSentence">丰富</a-radio-button>
          <a-radio-button value="midSentence">普通</a-radio-button>
          <a-radio-button value="minSentence">简洁</a-radio-button>
        </a-radio-group> -->
      </div>

      <page-session :loading="loading" :is-exist="isExist">
        <div class="content-text">{{dataObj[summaryTabs]}}</div>
      </page-session>
    </div>
    <explain :height="'427px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import section from "@/common/mixin/section.js";

export default {
  name: "abstract",
  mixins: [section],
  data() {
    return {
      dataObj: {},
    };
  },
  created() {},
  mounted() {},
  computed: {
    isExist() {
      if (JSON.stringify(this.summary) == "{}") {
        return false;
      } else {
        return true;
      }
    },
    tags() {
      return this.abstract.tags;
    },
    text() {
      return this.abstract.text;
    }
  },
  watch: {
    summary(newVal, oldVal) {
      this.dataObj = newVal;
    }
  },
  methods: {
    ...mapActions({
      handleTabs: "home:summaryTabs"
    }),
    onChange(e) {
      this.handleTabs( e.target.value)
    }
  }
};
</script>

<style lang="less">
@import "../../../common/assets/style/section.less";
@import "./index.less";
</style>
