// pay.vue写我们的组件
import designRuler from './lib/index.vue';

// 定义我们的插件
const myPlugin = {
  // 该插件有一个install方法
  // 方法的第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  install(Vue, options) {
    Vue.component('DesignRuler', designRuler);
  }
};
// 如果是渐进式开发（script 引入简单粗暴的开发方式），需要自动注册你的插件
if (window && window.Vue) {
  window.Vue.use(myPlugin);
}
// 最后将插件导出，并在main.js中通过Vue.use()即可使用插件
export default myPlugin
;
