import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePictureSwipe from 'vue-picture-swipe'; 
import VideoBackground from 'vue-responsive-video-background-player'

Vue.component('video-background', VideoBackground);
Vue.component('vue-picture-swipe', VuePictureSwipe);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
