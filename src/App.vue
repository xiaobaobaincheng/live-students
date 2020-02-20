<!--
 * @Descripttion: 
 * @version: 
 * @Author: big bug
 * @Date: 2019-09-17 14:12:20
 * @LastEditTime: 2020-02-20 15:20:10
 -->
<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family:PingFangSC;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
p{
    margin: 0;
}
ul{
    list-style:none;
    padding: 0;
    margin: 0;
}
</style>
