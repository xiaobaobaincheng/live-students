<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-23 09:25:26
 * @LastEditTime: 2019-09-27 14:36:57
 -->
<template>
  <div class="left-menu" :class="fixed ? 'fixed' : ''">
    <ul class="list">
      <li
        class="item"
        v-for="(item,index) in menuList"
        :key="index"
        :id="item.href"
        :class="index==activeIndex ? 'active' : ''"
        @click="toScroll(index)"
      >
        <div
          class="bg"
          :style="{backgroundColor: index == activeIndex ? 'rgba(24, 144, 255, 1)' : '' }"
        >
          <span class="icon">
            <img :src="item.icon" alt="icon" />
          </span>
          <span class="title">{{item.title}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "vue-anchor",
  data() {
    return {
      scroll: "",
      fixed: false,
      activeIndex: -1,
      menuList: [
        {
          icon: require("@/common/assets/image/01.png"),
          href: "#pos-tag",
          title: "词性标注"
        },
        {
          icon: require("@/common/assets/image/02.png"),
          href: "#entity-recognition",
          title: "实体识别"
        },
        {
          icon: require("@/common/assets/image/03.png"),
          href: "#abstract",
          title: "文本摘要"
        },
        {
          icon: require("@/common/assets/image/04.png"),
          href: "#topic-models",
          title: "主题模型"
        },
        {
          icon: require("@/common/assets/image/05.png"),
          href: "#emotion-analysis",
          title: "情感分析"
        },
        {
          icon: require("@/common/assets/image/06.png"),
          href: "#keywords-extraction",
          title: "关键词抽取"
        },
        {
          icon: require("@/common/assets/image/07.png"),
          href: "#word-discovery",
          title: "新词发现"
        },
        {
          icon: require("@/common/assets/image/08.png"),
          href: "#region-discern",
          title: "地域识别"
        }
      ]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.windowScroll);
  },
  watch: {
    scroll(newVal, oldVal) {
      this.loadSroll();
    }
  },
  methods: {
    windowScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    toScroll(index) {
      this.activeIndex = index;
      let sectionArr = document.getElementsByClassName("section");
      let total = sectionArr[index].offsetTop;

      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        if (newTotal < 500) {
          step = newTotal / 10;
        } else if (newTotal >= 500 && newTotal < 1000) {
          step = newTotal / 30;
        } else {
          step = newTotal / 50;
        }
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total + 100) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    },
    loadSroll: function() {
      let _this = this;
      let sections = document.getElementsByClassName("section");
      for (let i = sections.length - 1; i >= 0; i--) {
        if (_this.scroll >= sections[i].offsetTop) {
          _this.fixed = true;
          _this.activeIndex = i;
          break;
        } else {
          _this.fixed = false;
          _this.activeIndex = -1;
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.windowScroll);
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
