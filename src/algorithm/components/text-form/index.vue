<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-18 15:55:52
 * @LastEditTime: 2019-09-27 16:18:04
 -->
<template>
  <div class="text-form">
    <a-form :form="textform" @submit="handleSubmit">
      <a-form-item>
        <a-textarea v-decorator="[
            'content',
          ]" placeholder="请输入文本..." />
      </a-form-item>
      <a-button type="primary" html-type="submit">提交文本</a-button>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "text-from",
  props: {
    contentStr: {
      type: String,
      default: ""
    }
  },
  created() {
    this.textform = this.$form.createForm(this, {
      mapPropsToFields: () => {
        return {
          content: this.$form.createFormField({
            ...this.contentStr,
            value: this.contentStr
          })
        };
      }
    });
  },
  watch: {
    contentStr() {
      this.textform.updateFields({
        content: this.$form.createFormField({
          ...this.contentStr,
          value: this.contentStr
        })
      });
    }
  },
  methods: {
    handleSubmit(e) {
      let _this = this;
      e.preventDefault();
      this.textform.validateFields((err, values) => {
        if (!err) {
          if (values.content == undefined) {
            _this.$error({
              title: "错误提示",
              content: "请输入要检查的文本内容..."
            });
          } else if (values.content.length > 2000) {
            _this.$warning({
              title: "警告提示",
              content: "输入的内容超过了2000字"
            });
          } else {
            _this.$emit("formSubmit", values);
          }
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
