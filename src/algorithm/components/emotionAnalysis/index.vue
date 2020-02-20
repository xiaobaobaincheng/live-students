<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-26 17:56:55
 -->
<template>
  <div id="emotion-analysis" class="emotion-analysis section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">情感分析</h2>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div class="charts">
          <h3 class="title pos" v-if="sentimentVal > 30">情感偏正面</h3>
          <h3 class="title neg" v-else>情感偏负面</h3>
          <div class="center-from">
            <span class="label left">负面</span>
            <div class="bar">
              <div class="sad" :style="{ width:(100-sentimentVal)+'%' }">
                <img class="img" src="@/common/assets/image/sad.png" />
              </div>
              <div class="happy" :style="{ width:sentimentVal+'%' }">
                <img class="img" src="@/common/assets/image/happy.png" />
              </div>
            </div>
            <span class="label right">正面</span>
          </div>
        </div>
      </page-session>
    </div>
    <explain :height="'427px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import section from "@/common/mixin/section.js";

export default {
  name: "emotion-analysis",
  mixins: [section],
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    isExist() {
      if (this.sentiment == '') {
        return false;
      } else {
        return true;
      }
    },
    sentimentVal() {
      if (this.sentiment == "pos") {
        return 70;
      } else {
        return 30;
      }
    },
    tags() {
      return this.emotionAnalysis.tags;
    },
    text() {
      return this.emotionAnalysis.text;
    }
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../../common/assets/style/section.less";
@import "./index.less";
</style>
