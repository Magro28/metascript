import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePictureSwipe from 'vue-picture-swipe'; 
import VideoBackground from 'vue-responsive-video-background-player'
import { VueFinalModal } from 'vue-final-modal'
import { Row, Column } from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);
Vue.component('video-background', VideoBackground);
Vue.component('vue-picture-swipe', VuePictureSwipe);
Vue.component('vue-final-modal', VueFinalModal);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
