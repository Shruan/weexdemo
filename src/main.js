// var App = require('../src/index.vue')
import App from './index.vue';

import router from './router/index.js';
import store from '../src/store/index.js';
import axios from 'axios';
import Vuex from 'vuex';

import { appRequire, myAxios } from './assets/require.js'

const modal = weex.requireModule('modal')
if (WXEnvironment.platform == 'Web') {
  modal.toast({ message: 'web端' })
  Vue.prototype.$http = myAxios
} else {
  modal.toast({ message: 'app' })
  Vue.prototype.$http = appRequire
}

Vue.prototype.apiUrl = 'http://112.74.31.159:8233/smy-worker-web'

new Vue(
  Vue.util.extend({
    el: '#root',
    router }, App)
)

router.push({path: '/login'})
