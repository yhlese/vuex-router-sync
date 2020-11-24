
<template>
  <div>
    <div ref="body">
      <img :src="item"
           v-for="(item,index) of imgList"
           :key="index"
           crossorigin="anonymous">
      <el-button @click="downLoad">下载</el-button>
      <div id="scream">sdfasfsfasf</div>
    </div>
  </div>

</template>

<script>
import html2canvas from 'html2canvas';
export default {
  data () {
    return {
      imgList: [
        'https://dmp-xuhui.oss-cn-hangzhou.aliyuncs.com/cws01/2020/09/202009214fs6eosp1600688243460.png',
        'http://gt-wxb.oss-cn-hangzhou.aliyuncs.com/project%2F5d31e9065eeaec3850235522%2Focr%2Ffile%2Fwechat%2Fqrcode_1600939125893.jpg',
        require('./../../../../../assets/logo.png')
      ]
    }
  },
  methods: {
    getBase64Image (img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      var dataURL = canvas.toDataURL("image/" + ext);
      return dataURL;
    },
    downLoad () {

      const _body = this.$refs.body
      const width = _body.offsetWidth
      const height = _body.offsetHeight
      const canvasEl = document.createElement('canvas')
      canvasEl.width = width
      canvasEl.height = height
      const ctx = canvasEl.getContext('2d')

      const opts = {
        scale: 1,
        canvas: canvasEl,
        logging: true,
        width,
        height,
        // 开启跨域配置
        useCORS: true,
      }

      html2canvas(_body, opts).then(canvas => {
        console.log(canvas)
        let url = canvas.toDataURL('image/png')
        let a = document.createElement('a')
        a.download = 'ocr.png';
        a.href = url
        a.click();
      })

    }
  },

}
</script>

<style>
</style>