<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-26 17:39:03
 -->
<template>
  <div id="entity-recognition" class="entity-recognition section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">实体识别</h2>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div v-html="textHtml"></div>
      </page-session>
    </div>
    <explain :height="'493px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import section from "@/common/mixin/section.js";

export default {
  name: "entity-recognition",
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
      if (JSON.stringify(this.entityWords) == "{}") {
        return false;
      } else {
        return true;
      }
    },
    contentHtml() {
      return "<div>" + this.content + "</div>";
    },
    tags() {
      return this.entityRecognition.tags;
    },
    text() {
      return this.entityRecognition.text;
    }
  },
  watch: {
    entityWords(newVal, oldVal) {
      let words = newVal;
      let tagsArr = [];
      for (let key in words) {
        this.tags.forEach((item, index) => {
          if (key == item.en) {
            tagsArr.push({
              data: words[key],
              color: item.color
            });
            return;
          }
        });
      }
      this.tagsList = tagsArr;
      this.getContentHtml(this.tagsList);
    }
  },
  methods: {
    getContentHtml(List) {
      let html = this.contentHtml;
      List.forEach((item, index) => {
        if (item.data.length > 0) {
          let data = item.data;
          // 模糊匹配修改样式
          data.map((v, i) => {
            let reg = "/" + v + "/g";
            html = html.replace(
              eval(reg),
              '<span style="background:' +
                item.color +
                ';color:#ffffff;padding:0 5px;margin:0 2px;">' +
                v +
                "</span>"
            );
          });
        }
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
