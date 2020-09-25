<template>
  <div>
    <DpDatePicker @change="valueChange"></DpDatePicker>
    <CanvasComponent></CanvasComponent>
  </div>
</template>

<script>
import DpDatePicker from '@/components/common/dp-date-picker/index.vue';
import CanvasComponent from './canvas'
export default {
  components: {
    DpDatePicker,
    CanvasComponent
  },
  data() {
    return {};
  },
  methods: {
    valueChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>