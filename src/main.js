import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Vuetify from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

 
Vue.use(Vuetify, {
  // other stuff
  directives: {
    Ripple
  }
})


Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
