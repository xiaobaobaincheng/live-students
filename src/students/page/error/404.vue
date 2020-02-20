<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 15:23:30
 * @LastEditTime: 2019-09-17 15:23:30
 -->
<template>
  <div class="not-found">
    <div class="error-img">
      <img src="@/common/assets/image/404.jpg" alt />
    </div>
    <div class="go-back">
      <router-link to="/">回到首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "not-found",
  data() {
    return {
      msg: "404"
    };
  }
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
