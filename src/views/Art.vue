<template>
  <div class="art">
    <h1>This is an Art page</h1>   
   <video-background 
    src="../assets/vid/hd0983.mp4"
    style="max-height: 400px; height: 100vh;"
    overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)"
 >
      <h1 style="color: white;">Hello welcome!</h1>
      <vue-picture-swipe :items="items"></vue-picture-swipe>
  </video-background>
  </div>
</template>
<script>
  // eslint-disable-next-line no-unused-vars
  import VuePictureSwipe from 'vue-picture-swipe';
  export default {
    data() {
      return {
        items: [{
          src: 'http://via.placeholder.com/600x400',
          thumbnail: 'http://via.placeholder.com/64x64',
          w: 600,
          h: 400,
          title: 'Hallo'
        },
        {
          src: 'http://via.placeholder.com/1200x900',
          thumbnail: 'http://via.placeholder.com/64x64',
          w: 1200,
          h: 900,
          title: 'Hallo'
        }
      ]};
    }
  }
</script>