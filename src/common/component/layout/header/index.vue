<!--
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-18 09:47:27
 * @LastEditTime: 2020-02-20 16:40:58
 -->
<template>
    <div :class="pageCls">
        <div class="content">
            <div class="logo">
                <img src="../../../assets/image/logo.png" alt />
            </div>
            <div v-show="isUser" class="right-menu">
                <div class="head-img">
                    <img :src="userInfo.headImg" alt />
                </div>
                <div class="user-info">
                    <p class="username">{{userInfo.username}}</p>
                    <p class="button">
                        <span @click="openNotification">修改密码</span> |
                        <!-- <span @click="passwordVisible = true">修改密码</span> | -->
                        <span @click="handleLogout">注销</span>
                    </p>
                </div>
            </div>
        </div>

        <a-modal
            title="修改密码"
            v-model="passwordVisible"
            :centered="true"
            @ok="submitPassword"
            okText="确认"
            cancelText="取消"
        >
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
        </a-modal>
    </div>
</template>

<script>
export default {
    name: "my-header",
    props: {
        wrapCls: {
            type: Array,
            default() {
                return [];
            }
        },
        isUser: {
            type: Boolean,
            default: false
        },
        userInfo: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            userinfo: {
                username: "菅双朋"
            },
            passwordVisible: false
        };
    },
    computed: {
        pageCls() {
        let cls = ["header", ...[this.wrapCls]];
            return cls;
        }
    },
    methods: {
        openNotification() {
            this.$notification.open({
                message: "温馨提示",
                description:
                "密码修改服务暂未开放",
                icon: <a-icon type="smile" style="color: #108ee9" />
            });
        },
        submitPassword() {
            let _this = this;
            _this.passwordVisible = false;
        },
        handleLogout() {
            let _this = this;
            _this.$confirm({
                title: "温馨提示",
                content: "确定注销登录吗？",
                centered: true,
                okText: "确认",
                cancelText: "取消",
                onOk() {
                console.log("OK");
                _this.$emit("logoutSubmit");
                },
                onCancel() {
                console.log("Cancel");
                }
            });
        }
    }
};
</script>

<style scoped lang='less'>
    @import "./index.less";
</style>
