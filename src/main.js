import Vue from "vue";
import App from "./App";
import store from '@/store';
import useragent from '@/comJS/useragent';
import {
  sync
} from 'vuex-router-sync';
import vueRouter from './router/index';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
sync(store, vueRouter);
/* eslint-disable no-new */

new Vue({
  el: "#app",
  router: vueRouter,
  components: {
    App
  },
  store,
  template: "<App/>"
});
