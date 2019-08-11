import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import 'amfe-flexible'
import Hips from 'hips';
import 'hips/lib/index.css';

Vue.use(Hips);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
