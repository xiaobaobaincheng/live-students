/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 15:32:36
 * @LastEditTime: 2020-02-20 15:36:02
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import sfRouter from '@/students/router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',//去掉路由#,需要nginx配置下
    
    routes: [
        ...sfRouter
    ],
});

// 路由守卫
router.beforeEach((to, from, next) => {
    //不需要登录能访问的path
    const whiteList=['/login'];
    //获取缓存看是否登录过
    let token = sessionStorage.getItem('$token') || '';
    //访问了需要登录才能访问的页面
    if(whiteList.indexOf(to.path)<0){
        //登录过来直接进去
        if(token){
            next();
        }else{
            if(to.path=='/login'){
                next();
            }else{
                next('/login');
            }
        }
    }
    else{
        next();
    }
})

export default router;
