<template>
  <div class="flex statistics">
    <div @click.stop="showDateRef"
         class="pick_text">
      <span class="el-link el-link--primary el-dropdown-link">
        {{pickerText}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-date-picker ref="dateRangeRef"
                      v-model="dateRangeData"
                      class="range_input"
                      :clearable="false"
                      type="monthrange"
                      value-format="yyyy-MM-dd"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      :picker-options="pickerOptions"
                      @change="valueChange">
      </el-date-picker>
    </div>
  </div>
</template>
<script>
import {
  pickerOptions,
  currentMonth,
  lastMonth,
  currentQuarter,
  lastQuarter,
  currentYear,
  lastYear
} from '@/comJS/date-selection.js';
import { difference } from 'lodash';
import dayjs from 'dayjs';
export default {
  props: {
    dateRange: {
      default: () => []
    }
  },
  computed: {
    pickerText() {
      const { dateInPage } = this;
      if (difference(dateInPage, currentMonth()).length === 0) {
        return '本月';
      }
      if (difference(dateInPage, lastMonth()).length === 0) {
        return '上月';
      }
      if (difference(dateInPage, currentQuarter()).length === 0) {
        return '本季度';
      }
      if (difference(dateInPage, lastQuarter()).length === 0) {
        return '上季度';
      }
      if (difference(dateInPage, currentYear()).length === 0) {
        return '今年';
      }
      if (difference(dateInPage, lastYear()).length === 0) {
        return '去年';
      }
      return `${dayjs(dateInPage[0]).format('YYYY-MM')}  至  ${dayjs(
        dateInPage[1]
      ).format('YYYY-MM')}`;
    }
  },
  data() {
    return {
      dateRangeData: currentMonth(),
      rankCountObj: {},
      dateInPage: [],
      pickerOptions: pickerOptions
    };
  },
  methods: {
    valueChange(val) {
      let res = val || currentMonth();
      let t1 = new Date(res[1]);
      if (t1.getMonth() === new Date().getMonth()) {
        res[1] = dayjs(new Date()).format('YYYY-MM-DD');
      }
      if (t1.getMonth() < new Date().getMonth()) {
        let end = t1.setMonth(t1.getMonth() + 1, 0);
        res[1] = dayjs(end).format('YYYY-MM-DD');
      }
      this.dateInPage = val;
      this.$emit('change', val);
      this.$emit('update:dateRange', val);
    },
    showDateRef() {
      this.$refs.dateRangeRef.focus();
    }
  }
};
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
}
.pick_text {
  position: relative;
  margin-left: 30px;
  & > span {
    position: relative;
    z-index: 3;
    display: inline-block;
    background-color: #fff;
  }
}
.range_input {
  position: absolute;
  left: 0;
  top: 50%;
  height: 10px;
  width: 0;
  visibility: hidden;
}
strong {
  margin-right: 20px;
}
</style>
