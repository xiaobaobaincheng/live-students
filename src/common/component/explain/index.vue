<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-27 14:36:38
 -->
<template>
  <div class="explain" :style="{ height: height}">
    <h2 class="title">图例与说明</h2>
    <div class="tags">
      <span class="item" v-for="(item,index) in tags" :key="index">
        <i :style="{ backgroundColor:item.color }"></i>
        {{item.title}}
      </span>
    </div>
    <div class="text" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: "explain",
  props: {
    height: {
      type: String,
      default: "427px"
    },
    tags: {
      type: Array,
      default() {
        return [];
      }
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
