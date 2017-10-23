// var App = require('../src/index.vue')
import App from './index.vue';

import router from './router/index.js';
// import store from '../src/store/index.js';
// import axios from 'axios';
import Vuex from 'vuex';

// Vue.prototype.$http = axios
Vue.prototype.apiUrl = 'http://112.74.31.159:8233/smy-worker-web'

new Vue(
  Vue.util.extend({
    el: '#root',
    router }, App)
)

// Vue.extend({
//   router,
//   // store
// }, App)
// new Vue({
//
// router,   //not Router,  需要严格参照router的构造配置http://router.vuejs.org/zh-cn/api/options.html
// render： (h)=>h(App)
// }).$mount('#app')
router.push({path: '/login'})
