<template>
  <div class="art">
  <video-background 
    src="../assets/vid/savanna.mp4"
    style="max-height: 600px; height: 100vh;"
 >
 <!-- overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)" -->
      <h1 style="color: white;">Hello welcome to my little art section!</h1>
      <vue-picture-swipe :items="items"></vue-picture-swipe>
       <p style="color: white;">Drawing is just one of my other hobbies I do when I'm in the mood.
         Usually I fiddle around with ProCreate on my Ipad, sometimes I'm crazy and use real tools in the real world like my pencil set. 
       </p>
       <p>So here are some of my works. Hove fun!</p>
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
          src: '../assets/art/Savanna.png',
          thumbnail: '../assets/art/SavannaThumb.png',
          w: 1366,
          h: 1024,
          title: 'Savanna Sunset by Mario Groß'
        },
        {
          src: '../assets/art/Berg_und_Wald.png',
          thumbnail: '../assets/art/Berg_und_WaldThumb.png',
          w: 1366,
          h: 1024,
          title: 'Mountain Forest by Mario Groß'
        },
        {
          src: '../assets/art/Das_Auge.png',
          thumbnail: '../assets/art/Das_AugeThumb.png',
          w: 1366,
          h: 1024,
          title: 'The Eye by Mario Groß'
        }
        ,
        {
          src: '../assets/art/Wintertime.png',
          thumbnail: '../assets/art/WintertimeThumb.png',
          w: 1366,
          h: 1024,
          title: 'Winter landscape ☃️ by Mario Groß'
        }
        ,
        {
          src: '../assets/art/Bonfire.png',
          thumbnail: '../assets/art/BonfireThumb.png',
          w: 1366,
          h: 1024,
          title: 'Bonfire in Waterfall Country by Mario Groß'
        }
      ]};
    }
  }
</script>