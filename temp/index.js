// var App = require('../src/index.vue')
import App from '../src/index.vue';

import router from '../src/router/index.js';
// import store from '../src/store/index.js';
import axios from 'axios';
import Vuex from 'vuex';

Vue.prototype.$http = axios
Vue.prototype.apiUrl = 'http://112.74.31.159:8233/smy-worker-web'

App.el = '#root'
// App.router = Router
// App.store = Store
// new Vue(App)
new Vue(
  Vue.util.extend({
    el: '#root',
    router,
    // store
  }, App)
)
