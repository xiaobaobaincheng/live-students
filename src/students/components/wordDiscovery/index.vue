<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-26 17:39:24
 -->
<template>
  <div id="word-discovery" class="word-discovery section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">新词发现</h2>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div v-html="textHtml"></div>
      </page-session>
    </div>
    <explain :height="'427px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import section from "@/common/mixin/section.js";

export default {
  name: "word-discovery",
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
      if (this.newWords.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    contentHtml() {
      return "<div>" + this.content + "</div>";
    },
    tags() {
      return this.wordDiscovery.tags;
    },
    text() {
      return this.wordDiscovery.text;
    }
  },
  watch: {
    newWords(newVal, oldVal) {
      this.tagsList = newVal;
      this.getContentHtml(this.tagsList);
    }
  },
  methods: {
    getContentHtml(List) {
      let html = this.contentHtml;
      let color = this.tags[0].color;
      // 模糊匹配修改样式
      List.map((v, i) => {
        let reg = "/" + v + "/g";
        html = html.replace(
          eval(reg),
          '<span style="background:' +
            color +
            ';color:#ffffff;padding:0 5px;margin:0 2px;">' +
            v +
            "</span>"
        );
      });
      this.textHtml = html;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../common/assets/style/section.less";
@import "./index.less";
</style>
