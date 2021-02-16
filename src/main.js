import Vue from 'vue'
import VueImgix from 'vue-imgix';

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueImgix, {
  domain: "lball.imgix.net",
  defaultIxParams: {
    /* 
     * This enables the auto format imgix parameter by default
     * for all images, which we recommend to reduce image size, 
     * but you might choose to turn this off.
     */
    auto: "format"
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");