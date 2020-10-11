import Vue from 'vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
import App from './App';
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

