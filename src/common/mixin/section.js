/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 14:50:54
 * @LastEditTime: 2019-09-27 10:01:50
 */
import { mapGetters, mapActions } from 'vuex';

import PageSession from '../page/session/index.vue';
import explain from '../component/explain/index.vue';

import {
  posTag,
  entityRecognition,
  abstract,
  topicModels,
  emotionAnalysis,
  keywordsExtraction,
  wordDiscovery,
  regionDiscern,
} from '../assets/json/data.js';

export default {
  data() {
    return {
      posTag: posTag,
      entityRecognition: entityRecognition,
      abstract: abstract,
      topicModels: topicModels,
      emotionAnalysis: emotionAnalysis,
      keywordsExtraction: keywordsExtraction,
      wordDiscovery: wordDiscovery,
      regionDiscern: regionDiscern,
    }
  },
  computed: {
    ...mapGetters({
      loading: 'home:loading',

      content: 'home:content',//文本
      summaryTabs: 'home:summaryTabs',
      keyWordsTabs: 'home:keyWordsTabs',


      wordtag: 'home:wordtag',//词性标注
      entityWords: 'home:entity_words',//实体
      summary: 'home:summary',//摘要
      topicType: 'home:topic_type',//主题
      sentiment: 'home:sentiment',//情感分析
      keyWords: 'home:key_words',//关键词
      newWords: 'home:new_words',//新词
      regions: 'home:regions',//地域识别
    })
  },
  components: {
    PageSession,
    explain,
  },
}
