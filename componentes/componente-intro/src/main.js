import Vue from 'vue';
import App from './App.vue';
import Contadores from './Contadores-teste.vue';

Vue.config.productionTip = false
Vue.component('Contadores-teste',Contadores);

new Vue({
  render: h => h(App),
}).$mount('#app')
