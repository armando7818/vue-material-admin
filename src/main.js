// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
// https://github.com/vuetifyjs/vuetify/blob/dev/src/components/index.js
// import {
//   Vuetify,
//   VApp,
//   VNavigationDrawer,
//   VFooter,
//   VList,
//   VBtn,
//   VIcon,
//   VGrid,
//   VToolbar,
//   VBreadcrumbs,
//   transitions,
//   VMenu,
// } from 'vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import ECharts from 'vue-echarts';
import IEcharts from 'vue-echarts-v3';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import 'styles/z-index.css';

import App from './App';
import router from './router';
import store from './store';


// FIXME look up proper way to use router
Vue.router = router;
// TODO change this to echarts and change the compoenents everywhere
// because we will be bringing in other libraries.
Vue.component('echart', IEcharts);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);

// Vue.use(Vuetify, {
//   components: {
//     VApp,
//     VNavigationDrawer,
//     VFooter,
//     VList,
//     VBtn,
//     VIcon,
//     VGrid,
//     VToolbar,
//     VBreadcrumbs,
//     transitions,
//     VMenu,
//   },
// });

Vue.config.devtools = true;
// FIXME: https://github.com/vuejs/vuex-router-sync
// Route is not synching
sync(store, router);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
