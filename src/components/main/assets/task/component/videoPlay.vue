<template>
  <div>
    <video id="my-player"
           class="video-js vjs-default-skin vjs-big-play-centered vjs-fluid"
           preload="auto"
           autoplay
           style="width: 1200px;height: 640px;"
           controls
           data-setup="{}"></video>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-flash';
export default {
  methods: {
    playVideo() {
      var videoPlayer = videojs(
        'my-player',
        {
          sources: [
            {
              src: 'rtmp://www.91cb.site:8510/live/product1621',
              type: 'rtmp/flv'
            }
          ],
          muted: true,
          controls: true,
          autoplay: true,
          loop: true,
          techOrder: ['html5', 'flash'],
          width: '1200',
          height: '640'
        },
        function() {
          this.play();
        }
      );
    }
  }
};
</script>

<style>
</style>