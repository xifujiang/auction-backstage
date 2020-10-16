// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import layout from './page/layout.vue'
import iView from 'iview';
import SMEditor from 'smeditor'
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex'
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = 'http://localhost:8432/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-from-urlencoded';
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(iView);
Vue.use(SMEditor);
Vue.use(ElementUI);

const store = new Vuex.Store({
	state: {
		active: '',
		open: []
	},
	mutations: {
		updateActive(state,active){
			state.active = active;
		},
		updateOpen(state,open){
			state.open[0] = open;
		}
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { layout },
  template: '<layout/>'
})
