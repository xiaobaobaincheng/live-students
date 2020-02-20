/*
 * @Descripttion:
 * @version:
 * @Author: big bug
 * @Date: 2019-09-17 15:00:00
 * @LastEditTime: 2020-02-20 15:22:24
 */
import axios from "axios";
import qs from "qs";
import BASE_URL from "../config/index.js";
console.log(BASE_URL)

// 添加请求拦截器
axios.interceptors.request.use(
    config => {
        let TOKEN;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {

            switch (error.response.status) {
                case 401://登录超时
                // window.location = '/login'
            }
        }
        return Promise.reject(error.response);
    }
);

export default {
    post(url, data) {
        return axios({
            method: "post",
            baseURL: BASE_URL.BASE_URL_PREFIX,
            url,
            data: data,
            timeout: 100000,
        })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
    },
    get(url, data) {
        return axios({
            method: "get",
            baseURL: BASE_URL.BASE_URL_PREFIX,
            url,
            params: data, // get 请求时带的参数
            timeout: 100000,
        })
        .then(response => {
            return response;
        })
        .catch(error => {
            return error;
        });
    }
};
