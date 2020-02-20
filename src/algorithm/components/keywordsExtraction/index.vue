<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-19 09:53:59
 * @LastEditTime: 2019-09-27 11:18:03
 -->
<template>
  <div id="keywords-extraction" class="keywords-extraction section">
    <div class="left-box">
      <div class="header">
        <h2 class="title">关键词提取</h2>
        <a-radio-group :value="keyWordsTabs" @change="onChange">
          <a-radio-button value="minKeyWordMap">少</a-radio-button>
          <a-radio-button value="midKeyWordMap">中</a-radio-button>
          <a-radio-button value="maxKeyWordMap">多</a-radio-button>
        </a-radio-group>
      </div>
      <page-session :loading="loading" :is-exist="isExist">
        <div class="my-echarts">
          <div id="radar" ref="myEchartBar"></div>
        </div>
      </page-session>
    </div>
    <explain :height="'427px'" :tags="tags" :text="text"></explain>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import section from "@/common/mixin/section.js";

import echarts from "echarts";

export default {
  name: "keywords-extraction",
  mixins: [section],
  data() {
    return {
      dataObj: {}, //接口返回数据
      echartsObj: {
        //重构后的数据
        indicator: [],
        value: []
      },
      spinning: false
    };
  },
  created() {},
  mounted() {
    // this.setDataObj(this.keyWords, this.tabsVal);
  },
  computed: {
    isExist() {
      if (JSON.stringify(this.keyWords) == "{}") {
        return false;
      } else {
        return true;
      }
    },
    tags() {
      return this.keywordsExtraction.tags;
    },
    text() {
      return this.keywordsExtraction.text;
    }
  },
  watch: {
    keyWords(newVal, oldVal) {
      this.dataObj = newVal;
      if (JSON.stringify(this.dataObj) != "{}") {
        this.$nextTick(function() {
          // 初始化数据
          this.initData();
          // 修改数据结构
          this.setDataObj(this.dataObj, this.keyWordsTabs);
        });
      }
    }
  },
  methods: {
    ...mapActions({
      handleTabs: "home:keyWordsTabs"
    }),
    // 切换时间
    onChange(e) {
      this.handleTabs(e.target.value).then(() => {
        this.initData();
        this.setDataObj(this.dataObj, this.keyWordsTabs);
      });
    },
    // 重构数据
    setDataObj(dataObj, tabsVal) {
      let obj = dataObj;
      for (let key in obj) {
        if (key == tabsVal) {
          let data = obj[key];
          for (let k in data) {
            // 数值
            this.echartsObj.value.push(data[k]);
            // 挑选最大值
            let maxValue = Math.max(...this.echartsObj.value);
            // 事件
            this.echartsObj.indicator.push({
              name: k,
              max: maxValue + 10
            });
          }
        }
      }
      this.chinaConfigure(this.echartsObj);
    },
    // 初始化数据
    initData() {
      this.echartsObj = {
        indicator: [],
        value: []
      };
    },
    // echarts函数
    chinaConfigure(data) {
      let _this = this;
      let myChart = echarts.init(this.$refs.myEchartBar); //这里是为了获得容器所在位置
      window.addEventListener("resize", function() {
        setTimeout(function() {
          myChart.resize();
        }, 500);
      });

      myChart.setOption({
        radar: {
          center: ["50%", "50%"],
          name: {
            textStyle: {
              color: "#4c4c4c"
            }
          },
          axisLine: {
            lineStyle: {
              color: "rgba(105,107,108,1)",
              width: 1
            }
          },
          splitLine: {
            lineStyle: {
              color: ["rgba(105,107,108,1)"],
              width: 1
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)",
                "rgba(255, 255, 255, 0)"
              ],
              shadowColor: "#fff"
            }
          },
          indicator: data.indicator
        },
        series: [
          {
            type: "radar",
            label: {
              show: true
            },
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: data.value,
                name: "关键词提取",
                label: {
                  normal: {
                    show: true,
                    formatter: function(params) {
                      return params.value;
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: "#8064a4"
                  }
                }
              }
            ]
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
