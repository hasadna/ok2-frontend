import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import routes from './app/routes';
import Vuex from 'vuex';
import { store } from './store';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  routes
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
