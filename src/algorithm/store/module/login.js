/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 16:04:18
 * @LastEditTime: 2019-09-27 15:00:58
 */
import * as api from '@/common/service/index.js';

const login = {
  state: {
    status: 0, //记录登录状态
    token: sessionStorage.getItem('$token') || '',//验证用户登录
    user : sessionStorage.getItem('$user') != '' ? JSON.parse(sessionStorage.getItem('$user')) || {} : {},//保存用户登录后基本信息
  },
  mutations: {
    'update'(state,payload){
      for(let key in payload){
          state[key] = payload[key]
      }
    }
  },
  actions: {
    async 'login:handleLogin'({ commit, dispath }, params) {
      let { code, data } = api.login(params);
      const payload = {};
      //请求成功
      if (code === 0) {
        if (data) {
          payload.status = data.status;
          payload.user = data.user;
          payload.token = data.token;

          sessionStorage.setItem('$user', JSON.stringify(data.user));
          sessionStorage.setItem('$token', data.token);
        }
      }
      commit('update', payload);
    },
    async 'login:logout'({ commit, dispath }) {
      let { code, data } = api.logout();
      const payload = {};
      //请求成功
      if (code === 0) {
        if (data) {
          payload.status = 0;
          payload.user = {};
          payload.token = '';

          sessionStorage.setItem('$user', '');
          sessionStorage.setItem('$token', '');
        }
      }
      commit('update', payload);
    }
  },
  getters: {
    'login:status'(state) {
      return state.status;
    },
    'login:token'(state) {
      return state.token;
    },
    'login:userinfo'(state) {
      return state.user;
    }
  }
};

export default login;
