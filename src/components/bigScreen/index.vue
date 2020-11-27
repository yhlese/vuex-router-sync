<template>
  <div id="dvFullNode">
    <dv-full-screen-container>
      <!-- <el-button @click="handleScreenfull"></el-button> -->
      <div class="title-box">
        <div class="title">
          <p>海伦堡集团人脸风控大屏</p>
          <span>今天是{{newDateTime}} {{newDateDay()}}</span>
        </div>
      </div>
      <div class="main-content-right">
        <RightContent></RightContent>
      </div>

    </dv-full-screen-container>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from '@vue/composition-api'
import TitleCard from './components/titleCard'
import RightContent from './components/rightContent'
import dayjs from 'dayjs'
import screenfull from 'screenfull'

export default {
  components: {
    TitleCard,
    RightContent
  },
  setup() {
    const state = reactive({
      newDateTime: dayjs(new Date()).format('YYYY年MM月DD日')
    })
    const newDateDay = () => {
      let day = dayjs(new Date()).day()
      let dayArr = ['一', '二', '三', '四', '五', '六', '日']
      return `星期${dayArr[day - 1]}`
    }

    const handleScreenfull = () => {
      screenfull.request(document.getElementById('dvFullNode'))
    }

    return {
      ...toRefs(state),
      newDateDay,
      handleScreenfull
    }
  }
}
</script>

<style lang="scss" scoped>
#dv-full-screen-container {
  position: static;
  background: #091524;
  font-size: 21px;
  color: #fff;
}

$defalut-color: #26d6ff;
#dvFullNode {
  .title-box {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    .title {
      padding: 20px 0 10px;
      width: 658px;
      box-sizing: border-box;
      background: linear-gradient(0deg, #0683bd 0%, #051340 100%);
      p {
        font-size: 38px;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        color: #a5d5ff;
        line-height: 42px;
        // text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.75);
        background: linear-gradient(0deg, #36c8e6 30%, #deefff 107%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 11px;
      }
      span {
        font-size: 19px;
      }
    }
  }
  .main-content-right {
    margin: -60px 14px 0;
    height: calc(100% - 60px);
    box-sizing: border-box;
  }
}
/deep/ {
  .el-radio-button__inner {
    font-size: 21px;
    background: none;
    border: 1px solid #1c5080;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 21px;
    padding-right: 21px;
    &:hover {
      color: #26d6ff;
    }
  }

  .el-radio-button:last-child .el-radio-button__inner,
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0;
  }
  .el-radio-button__orig-radio:checked + .el-radio-button__inner {
    background-color: $defalut-color;
    font-weight: 600;
    color: #082345;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-left: 1px solid #1c5080;
  }
  .el-radio-button__inner {
    color: $defalut-color;
  }
}
</style>