import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import Tawk from 'vue-tawk';

Vue.config.productionTip = false

Vue.use(Tawk, {
  tawkSrc: 'https://embed.tawk.to/5e33a027298c395d1ce571be/default'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
