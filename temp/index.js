var App = require('../src/index.vue')
import Router from '../src/router/index.js';
import Store from '../src/store/index.js';
import axios from 'axios';
import Vuex from 'vuex';

Vue.prototype.$http = axios
Vue.prototype.apiUrl = 'http://112.74.31.159:8233/smy-worker-web'

App.el = '#root'
new Vue(App)
