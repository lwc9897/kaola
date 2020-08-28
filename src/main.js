import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/style/reset.css'

Vue.use(VueRouter)
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import { Tabbar, TabItem } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'
import { Navbar } from 'mint-ui';
import { Header } from 'mint-ui';

Vue.use(Mint);
//引入路由
import router from '../src/assets/js/router.js' 

import axios from 'axios'
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
