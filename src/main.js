import Vue from 'vue'
import Bootstrapvue from 'bootstrap-vue'
import App from './App'


Vue.config.productionTip = false
Vue.use(Bootstrapvue);

new Vue({
  render: h => h(App)
}).$mount('#app')


