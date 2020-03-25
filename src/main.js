import Vue from 'vue';
import App from './App.vue';
import '@/styles/index.scss'; // global css
import 'normalize.css';
import designRuler from 'design-ruler';
Vue.use(designRuler);

Vue.config.productionTip = false;
new Vue({
  render: h => h(App)
}).$mount('#app');
