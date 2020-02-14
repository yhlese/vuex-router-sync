<template>
  <div class="magnifier">
    <div class="small-box">
      <img :src="config.smallPicture.url"
           alt="">
      <div class="magnifier-zoom"
           :style="{ background: configs.smallPicture.maskColor,
          height: configs.smallPicture.maskWidth + 'px',
          width: configs.smallPicture.maskHeight + 'px', 
          opacity: configs.smallPicture.maskOpacity, 
          transform: transformMask}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      default: {
        smallPicture: {
          url:
            'http://glemp-dev.oss-cn-beijing.aliyuncs.com/timg1-1579074565723.jpg',
          width: 200,
          hegith: 100,
          maskHeight: 50, // 遮罩区域
          maskWidth: 50,
          maskColor: 'rgba(25,122,255,0.5)', //遮罩样式
          maskOpacity: 0.6
        },
        bigPicture: {
          width: 200,
          hegith: 100
        }
      }
    }
  },
  data() {
    return { transformMask: `translate(0px, 0px)` };
  }
};
</script>
<style lang='scss' scoped>
</style>