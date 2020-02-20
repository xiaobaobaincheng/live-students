/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 16:04:26
 * @LastEditTime: 2019-09-27 16:29:08
 */
import * as api from '@/common/service/index.js';

const home = {
  state: {
    content: '',//提交的文本
    summaryTabs: 'maxSentence',
    keyWordsTabs: 'minKeyWordMap',

    loading: false,//加载状态
    funCode: 0,//接口反馈
    wordtag: {},//词性标注
    summary: {},//摘要
    key_words: {},//关键词
    new_words: [],//新词
    topic_type: [],//主题
    sentiment: '',//情感分析
    entity_words: {},//实体
    regions: '',//地域识别
  },
  mutations: {
    'update'(state, payload) {
      for (let key in payload) {
        state[key] = payload[key]
      }
    },
  },
  actions: {
    async 'home:getAllMsg'({ commit, dispatch }, params) {
      commit('update', {
        loading: true,
        content: params.content
      });

      // let { code, data } = await api.getAllMsg(params);
      let result = await api.getAllMsg(params);
      console.log(result)
      let { code, data } = result.data;
      console.log(code, data);
      const payload = {};
      payload.funCode = code;
      dispatch('home:summaryTabs', 'maxSentence');
      dispatch('home:keyWordsTabs', 'minKeyWordMap');
      //请求成功
      if (code === 0 || code === 1) {
        if (data) {
          payload.loading = false;
          payload.wordtag = data.wordtag;
          payload.summary = data.summary;
          payload.key_words = data.key_words;
          payload.new_words = data.new_words;
          payload.topic_type = data.topic_type;
          payload.sentiment = data.sentiment;
          payload.entity_words = data.entity_words;
          payload.regions = data.regions;
        }
      }
      commit('update', payload);
    },
    async 'home:summaryTabs'({ commit, dispatch }, params) {
      commit('update', {
        summaryTabs: params
      });
    },
    async 'home:keyWordsTabs'({ commit, dispatch }, params) {
      commit('update', {
        keyWordsTabs: params
      });
    },
    async 'home:reset'({ commit, dispatch }, params) {
      let payload = {
        content: '',//提交的文本
        summaryTabs: 'maxSentence',
        keyWordsTabs: 'minKeyWordMap',

        loading: false,//加载状态
        funCode: 0,//接口反馈
        wordtag: {},//词性标注
        summary: {},//摘要
        key_words: {},//关键词
        new_words: [],//新词
        topic_type: [],//主题
        sentiment: '',//情感分析
        entity_words: {},//实体
        regions: '',//地域识别
      }
      commit('update', payload);
    },
  },
  getters: {
    'home:loading'(state) {
      return state.loading;
    },
    'home:funCode'(state) {
      return state.funCode;
    },
    'home:summaryTabs'(state) {
      return state.summaryTabs;
    },
    'home:keyWordsTabs'(state) {
      return state.keyWordsTabs;
    },
    'home:content'(state) {
      return state.content;
    },
    'home:wordtag'(state) {
      return state.wordtag;
    },
    'home:summary'(state) {
      return state.summary;
    },
    'home:key_words'(state) {
      return state.key_words;
    },
    'home:new_words'(state) {
      return state.new_words;
    },
    'home:topic_type'(state) {
      return state.topic_type;
    },
    'home:sentiment'(state) {
      return state.sentiment;
    },
    'home:entity_words'(state) {
      return state.entity_words;
    },
    'home:regions'(state) {
      return state.regions;
    },
  }
}

export default home;
