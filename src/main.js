import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index.js'
import store from './store/store.js'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h =>h(App)
}).$mount('#app')
