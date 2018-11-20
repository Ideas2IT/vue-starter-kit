import Vue from 'vue';
/* ============
 * Plugins
 * ============
 *
 * Import and bootstrap the plugins.
 */
import './plugins/bootstrap-vue';
import './plugins/axios';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
