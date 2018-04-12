// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import axios from 'axios';
import VueAxios from 'vue-axios';
import IEcharts from 'vue-echarts-v3';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import App from './App';
import router from './router';
import store from './store';
import filters from './filters';
import utils from './utils';

Vue.router = router;
sync(store, router, { moduleName: 'RouteModule' });
Vue.component('echart', IEcharts);
Vue.use(VueAxios, axios);
Vue.use(Vuetify);

Vue.config.devtools = true;
Vue.config.productionTip = false;

// Registers helper util functions to prototype to make available to all Vue components.
Object.entries(utils).forEach(([key, value]) => {
  Object.defineProperty(Vue.prototype, `$$${key}`, { value });
});

// Registers all filters under filter folder.
Object.keys(filters).forEach(helperFilter => {
  Object.keys(filters[helperFilter]).forEach(functionName => {
    Vue.filter(
      `${helperFilter}_${functionName}`,
      filters[helperFilter][functionName],
    );
  });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
