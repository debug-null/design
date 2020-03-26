import Vue from 'vue';
import App from './App.vue';
import '@/styles/index.scss'; // global css
import 'normalize.css';
Vue.config.productionTip = false;
import Svg from '@/components/svg';
Vue.component('svgIcon', Svg);

import designRuler from '../plugins';
console.log('designRuler', designRuler);
Vue.use(designRuler);

new Vue({
  render: h => h(App)
}).$mount('#app');
