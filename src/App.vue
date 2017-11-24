<!--
 @file: App.vue
 @author: yanglei07
 @description ..
 @create data: 2017-11-24 16:56:1
 @last modified by: yanglei07
 @last modified time: 2017-11-24 17:17:12
-->

<template lang="html">
    <div id="app">
        <div class="title">{{ message }}</div>
        <img src="./assets/logo.png">
        <HelloWorld/>
    </div>
</template>

<script lang="js">
import HelloWorld from './components/HelloWorld';

export default {
    name: 'app',
    data() {
        return {
            message: 'Hello World!'
        };
    },
    components: {
        HelloWorld
    }
};
</script>

<style lang="less">
#app {
    .title {
        color: red;
    }
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
