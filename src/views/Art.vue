<template>
  <div class="art">
    <h1>This is an Art page</h1>
    <vue-picture-swipe :items="items"></vue-picture-swipe>
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