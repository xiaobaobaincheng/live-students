import Vue from 'vue';
import Vuex from 'vuex';

import login from './module/login';
import home from './module/home';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    login,
    home
  }
});

export default store;
