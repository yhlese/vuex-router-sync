import Vue from 'vue';
import App from './App';
import store from '@/store';
import useragent from '@/comJS/useragent';
import {
  sync
} from 'vuex-router-sync';
import vueRouter from './router/index';
import ElementUI from 'element-ui';
// import "element-ui/lib/theme-chalk/index.css";
// import "@/directive"
Vue.config.productionTip = false;
import './element-variables.scss';
// import ElInputValidate from 'el-input-validate'
// ElInputValidate(Vue)
Vue.use(ElementUI);
sync(store, vueRouter);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: vueRouter,
  components: {
    App,
  },
  store,
  template: '<App/>',
});
window.app = app;
