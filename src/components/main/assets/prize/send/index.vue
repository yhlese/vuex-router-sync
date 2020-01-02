<template>
  <div>
    <DpDatePicker @change="valueChange"></DpDatePicker>
  </div>
</template>

<script>
import DpDatePicker from '@/components/common/dp-date-picker/index.vue';
export default {
  components: {
    DpDatePicker
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