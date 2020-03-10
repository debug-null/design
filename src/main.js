import Vue from 'vue';
import App from './App.vue';
import '@/styles/index.scss'; // global css
import 'normalize.css';
Vue.config.productionTip = false;
import Svg from '@/components/svg';
Vue.component('svgIcon', Svg);
new Vue({
  render: h => h(App)
}).$mount('#app');
