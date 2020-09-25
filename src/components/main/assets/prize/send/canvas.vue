<template>
<div>
  <div >
      <img :src="item" v-for="(item,index) of imgList" :key="index">
      <el-button @click="downLoad">下载</el-button>
    </div>
    <canvas id="myCanvas"></canvas>
    <div id="scream">sdfasfsfasf</div>
</div>
  
</template>

<script>
export default {
  data(){
    return{
      imgList:[
        'https://dmp-xuhui.oss-cn-hangzhou.aliyuncs.com/cws01/2020/09/202009214fs6eosp1600688243460.png',
        'http://gt-wxb.oss-cn-hangzhou.aliyuncs.com/project%2F5d31e9065eeaec3850235522%2Focr%2Ffile%2Fwechat%2Fqrcode_1600939125893.jpg'
      ]
    }
  },
  methods:{
    downLoad(){
      // let _imgRef = this.$refs.imgRef
      // let _width = _imgRef.offsetWidth
      // let _height = _imgRef.offsetHeight
      // let canvas = document.getElementById("myCanvas");
      // let cxt = canvas.getContext("2d");
      // console.log(cxt,canvas,_imgRef)
      // cxt.drawImage(_imgRef,0,0,_width,_height)

      // let a = document.createElement('a')
      // document.body.append(a)
      // document.body.toDataURL('image/png')
      // a.download = '下载'
      // a.click()

      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = document.getElementById("scream");

        ctx.drawImage(img,0,0,10,10);
    }
  },
  mounted(){
    this.downLoad()
  }
}
</script>

<style>

</style>