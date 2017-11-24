/**
 * @file: main.js
 * @author: yanglei07
 * @description ..
 * @create data: 2017-11-24 15:32:21
 * @last modified by: yanglei07
 * @last modified time: 2017-11-24 17:17:32
 */

/* global  */

/* eslint-disable fecs-camelcase */
/* eslint-enable fecs-camelcase */
'use strict';

import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

let el = document.createElement('div');
document.body.appendChild(el);
/* eslint-disable no-new */
new Vue({
    el: el,
    render: h => h(App)
});
