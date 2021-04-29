import Vue from 'vue'
import App from './App.vue'
import Vueresource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(Vueresource);

new Vue({
  render: h => h(App),
}).$mount('#app')
