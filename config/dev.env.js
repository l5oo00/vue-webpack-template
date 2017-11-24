/**
 * @file: dev.env.js
 * @author: yanglei07
 * @description ..
 * @create data: 2017-11-24 15:25:8
 * @last modified by: yanglei07
 * @last modified time: 2017-11-24 15:25:20
 */

/* global  */

/* eslint-disable fecs-camelcase */
/* eslint-enable fecs-camelcase */
'use strict';

const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
