<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 15:12:18
 * @LastEditTime: 2019-09-26 17:43:46
 -->
<template>
  <page-common :loading="false" :is-exist="isExist">
    <div class="login">
      <my-header :wrapCls="['header-fixed','header-opacity']" :isUser="false"></my-header>
      <div class="content">
        <div class="form-box">
          <h2 class="title">管理账户登录</h2>
          <a-form id="formlogin" :form="loginform" class="login-form" @submit="loginSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'username',
                  { rules: [{ required: true, message: '请输入用户名称' }] }
                ]"
                placeholder="用户名称"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  { rules: [{ required: true, message: '请输入用户密码' }] }
                ]"
                type="password"
                placeholder="用户密码"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" class="login-button">登录</a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
    </div>
  </page-common>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import myHeader from "@/common/component/layout/header.vue";

import PageBase from "@/common/mixin/page-base.js";

export default {
  name: "login",
  mixins: [PageBase],
  components: {
    myHeader
  },
  data() {
    return {};
  },
  beforeCreate() {
    this.loginform = this.$form.createForm(this);
  },
  computed: {
    ...mapGetters({
      loginStatus: "login:status" // 登录状态
    })
  },
  methods: {
    ...mapActions({
      login: "login:handleLogin"
    }),
    loginSubmit(e) {
      e.preventDefault();
      let _this = this;
      _this.loginform.validateFields((err, values) => {
        if (!err) {
          _this.login(values).then(()=>{
            _this.loginStatus == 1 ? _this.$router.push({ path: '/' }) : _this.$message.error('用户名或密码错误')
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
