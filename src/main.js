/*
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2019-09-17 14:12:20
 * @LastEditTime: 2019-09-17 14:12:20
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// 路由
import router from './common/router/index';
// vuex
import store from './algorithm/store';
// 过滤器
import Filter from './common/filter';
// antd-vue
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// echarts
import echarts from 'echarts/lib/echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;

Vue.use(Filter);
Vue.use(Antd);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
