<template>
  <div>
    <el-form>
      <el-form-item>
        <el-date-picker ref="dateRangeRef"
                        v-model="_daterange"
                        :clearable="false"
                        type="daterange"
                        value-format="timestamp"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { pickerOptions } from '@/comJS/date-selection.js';
export default {
  data() {
    return {
      ROUTER: RouterConfig.Assets,
      _daterange: '',
      pickerOptions: pickerOptions
    };
  }
};
</script>
