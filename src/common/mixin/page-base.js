/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 14:50:54
 * @LastEditTime: 2019-09-27 16:28:24
 */
import { mapGetters, mapActions } from 'vuex';


import PageCommon from '../page/common/index.vue';

import {
  contentHtnl
} from '../assets/json/data.js';

export default {
  data() {
    return {
      loading: false,
      isExist: true,
      contentHtnl: contentHtnl
    }
  },
  computed: {
    ...mapGetters({
      userinfo: 'login:userinfo',
    })
  },
  components: {
    PageCommon,
  },
}
