<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-29 11:03:42
 -->
<template>
  <div id="region-discern" class="region-discern section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">地域识别</h2>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div class="content-text" v-html="'本文章在地域上最有可能属于: '+regions"></div>
      </page-session>
    </div>
    <explain :height="'427px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import section from "@/common/mixin/section.js";

export default {
  name: "region-discern",
  mixins: [section],
  data() {
    return {
      textHtml: "",
      tagsList: []
    };
  },
  created() {},
  mounted() {},
  computed: {
    isExist() {
      if (this.regions == "") {
        return false;
      } else {
        return true;
      }
    },
    tags() {
      return this.regionDiscern.tags;
    },
    text() {
      return this.regionDiscern.text;
    }
  },
  watch: {},
  methods: {}
};
</script>

<style lang="less">
@import "../../../common/assets/style/section.less";
@import "./index.less";
</style>
