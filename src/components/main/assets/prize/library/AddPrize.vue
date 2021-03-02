<template>
  <div ref="map"
       style="height:600px;width:100%">

  </div>
</template>

<script>
import echarts from 'echarts'
import china from 'echarts/map/json/china';
import { mapConfig } from './config/index'
export default {
  methods: {
    initEcharts () {
      console.log('china', china)
      const mapRef = this.$refs.map
      const mapChart = echarts.init(mapRef)
      echarts.registerMap('china', china)
      mapChart.setOption(mapConfig, true);

    }
  },
  mounted () {
    this.initEcharts()
  }
}
</script>

<style>
</style>