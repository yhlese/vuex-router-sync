<template>
  <div class="rightContent">
    <div style="height:100%">
      <el-radio-group v-model="chooseTime"
                      @change="handleChange">
        <el-radio-button v-for="(item,index) of dataList"
                         :key="index"
                         :label="item.fn">{{item.label}}
        </el-radio-button>
      </el-radio-group>
      <div class="content margin-top-10">
        <div style="height:100%">
          <titleCard title="项目风险排行榜">
            <TableContent></TableContent>
          </titleCard>
        </div>
      </div>
    </div>
    <div class="info-center">
      <TopInfo></TopInfo>
    </div>

  </div>

</template>

<script>
import { onMounted, reactive, toRefs } from '@vue/composition-api'
import TableContent from './../tableContent/index'
import TopInfo from './main/topInfo'

import {
  currentDay,
  currentMonth,
  currentWeek,
  currentYear
} from '././../../../../util/dataSearch'
import TitleCard from '../titleCard/index'

export default {
  components: {
    TitleCard,
    TableContent,
    TopInfo
  },
  setup(props, context) {
    const state = reactive({
      chooseTime: currentMonth,
      dataList: [
        {
          label: '本日',
          fn: currentDay
        },
        {
          label: '本周',
          fn: currentWeek
        },
        {
          label: '本月',
          fn: currentMonth
        },
        {
          label: '本年',
          fn: currentYear
        },
        {
          label: '总计',
          fn: () => {
            return 'all'
          }
        }
      ]
    })

    const handleChange = val => {
      console.log(val())
    }
    const init = () => {
      state.chooseTime = ''
    }

    return {
      ...toRefs(state),
      handleChange,
      init
    }
  }
}
</script>

<style lang="scss" scoped>
.rightContent {
  // width: 23%;
  border: 1px solid red;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #1c5080;
  display: flex;
  .content {
    height: 930px;
  }
}
</style>