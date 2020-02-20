<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-18 10:55:40
 * @LastEditTime: 2019-09-26 15:08:42
 -->
<template>
  <div class="session-common content">
    <template v-if="loading">
      <div class="loading">
        <a-spin :spinning="loading"></a-spin>
      </div>
    </template>
    <template v-else-if="!isExist">
      <div class="non-existent">
        <img src="@/common/assets/image/error.png" />
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
