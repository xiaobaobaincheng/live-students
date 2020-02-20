<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 15:19:32
 * @LastEditTime: 2020-02-20 16:40:01
 -->
<template>
  <page-common :loading="loading" :is-exist="isExist">
    <div class="home">
      <div class="header-from">
        <my-header :isUser="true" :userInfo="userinfo" @logoutSubmit="handleLogout()"></my-header>
        <text-form :contentStr="contentHtnl" @formSubmit="handleGetAllMsg"></text-form>
      </div>
      <div class="content">
        <div class="left">
          <left-menu></left-menu>
          <back-top></back-top>
        </div>
        <div class="right">
          <pos-tag></pos-tag>
          <entity-recognition></entity-recognition>
          <abstract></abstract>
          <topic-models></topic-models>
          <emotion-analysis></emotion-analysis>
          <keywords-extraction></keywords-extraction>
          <word-discovery></word-discovery>
          <region-discern></region-discern>
        </div>
      </div>
    </div>
  </page-common>
</template>

<script>
import myHeader from "@/common/component/layout/header/index.vue";
import leftMenu from "@/common/component/vue-anchor/index.vue";
import backTop from "@/common/component/back-top/index.vue";

import textForm from "../../components/text-form/index.vue";
import posTag from "../../components/posTag/index.vue";
import entityRecognition from "../../components/entityRecognition/index.vue";
import abstract from "../../components/abstract/index.vue";
import topicModels from "../../components/topicModels/index.vue";
import emotionAnalysis from "../../components/emotionAnalysis/index.vue";
import keywordsExtraction from "../../components/keywordsExtraction/index.vue";
import wordDiscovery from "../../components/wordDiscovery/index.vue";
import regionDiscern from "../../components/regionDiscern/index.vue";

import { mapGetters, mapActions } from "vuex";

import PageBase from "@/common/mixin/page-base.js";

export default {
  name: "home",
  mixins: [PageBase],
  components: {
    myHeader,
    leftMenu,
    backTop,
    textForm,
    posTag,
    entityRecognition,
    abstract,
    topicModels,
    emotionAnalysis,
    keywordsExtraction,
    wordDiscovery,
    regionDiscern
  },
  data() {
    return {};
  },
  mounted() {
    let params = {
      content: this.contentHtnl
    };
    this.handleGetAllMsg(params);
  },
  computed: {
    ...mapGetters({
      loginStatus: "login:status", // 登录状态
      homeLoading: "home:loading",
      funCode: "home:funCode"
    })
  },
  watch: {
    $route() {
      this.reset();
    }
  },
  methods: {
    ...mapActions({
      loginLogout: "login:logout",
      getAllMsg: "home:getAllMsg",
      reset: "home:reset"
    }),
    handleLogout() {
      let _this = this;
      _this.loginLogout().then(() => {
        _this.reset();
        _this.loginStatus == 0 ? _this.$router.push({ path: "/login" }) : "";
      });
    },
    handleGetAllMsg(params) {
      let _this = this;
      params.key_word_num = [10, 8, 5]; //关键词个数
      params.new_word_num = 10; //新词个数
      params.text_length = [500, 300, 100]; //摘要长度
      params.title = ""; //标题

      _this.getAllMsg(params).then(() => {
        let code = this.funCode;
        switch (code) {
          case 3:
            _this.$message.error("请求参数异常");
            break;
          case 4:
            _this.$message.error("模型调用异常");
            break;
          case 4:
            _this.$message.error("未知异常");
            break;
          default:
            return;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
