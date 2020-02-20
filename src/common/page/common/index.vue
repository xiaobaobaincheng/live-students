<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-18 10:55:40
 * @LastEditTime: 2019-09-26 14:42:33
 -->
<template>
  <div class="page-common">
    <template v-if="loading">
      <div class="loading-text">
        <span>努力加载中 ...</span>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    isExist: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
