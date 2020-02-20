<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-26 17:57:24
 -->
<template>
  <div id="topic-models" class="topic-models section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">主题模型</h2>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div class="my-echarts">
          <div id="pie" ref="myEchartBar"></div>
        </div>
        <div class="label-list">
          <div class="header">
            <span class="number">主题编号</span>
            <span class="title">主题词</span>
            <span class="value">概率值</span>
          </div>
          <ul class="list">
            <li class="item" v-for="(item,index) in list" :key="index">
              <span class="number">{{item.topic}}</span>
              <div class="title">
                <span class="tags" v-for="(v,i) in item.topic_word" :key="i">{{v}}</span>
              </div>
              <span class="value">{{item.topic_weight}}</span>
            </li>
          </ul>
        </div>
      </page-session>
    </div>
    <explain :height="'427px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import section from "@/common/mixin/section.js";

import echarts from "echarts";

export default {
  name: "topic-models",
  mixins: [section],
  data() {
    return {
      list: [],
      chartData: []
    };
  },
  created() {},
  mounted() {},
  computed: {
    isExist() {
      if (this.topicType.length == 0) {
        return false;
      } else {
        return true;
      }
    },
    tags() {
      return this.topicModels.tags;
    },
    text() {
      return this.topicModels.text;
    }
  },
  watch: {
    topicType(newVal, oldVal) {
      this.list = newVal;
      this.chartData = [];
      this.list.map((v, i) => {
        this.chartData.push({
          value: v.topic_weight,
          name: v.topic
        });
      });

      this.$nextTick(function() {
        this.chinaConfigure();
      });
    }
  },
  methods: {
    chinaConfigure() {
      let _this = this;
      let myChart = echarts.init(this.$refs.myEchartBar); //这里是为了获得容器所在位置
      window.addEventListener("resize", function() {
        setTimeout(function() {
          myChart.resize();
        }, 500);
      });

      myChart.setOption({
        series: [
          {
            tooltip: {
              trigger: "item",
              formatter: "{b} : {c} ({d}%)"
            },
            type: "pie",
            center: ["50%", "50%"],
            radius: ["60%", "70%"],
            avoidLabelOverlap: false,

            label: {
              normal: {
                formatter: function(params, ticket, callback) {
                  return params.name;
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: _this.chartData,
            color: ["#eb7e65", "#73a0fa", "#73deb3", "#7585a2", "#f7c739"]
          }
        ]
      });
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  }
};
</script>

<style lang="less">
@import "../../../common/assets/style/section.less";
@import "./index.less";
</style>
