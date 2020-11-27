<!--
 * @Author: your name
 * @Date: 2020-11-27 15:17:55
 * @LastEditTime: 2020-11-27 16:46:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \hlb-faceid\src\views\bigScreen\components\rightContent\main\topInfo.vue
-->
<template>
  <div class="topInfo">
    <titleCard>
      <div class="info-content">
        <ul class="info">
          <li v-for="i in 6">
            <i></i>
            <div>
              <span>访客流量</span>
              <span>890312</span>
            </div>
          </li>
        </ul>
        <div class="charts">

        </div>
      </div>

    </titleCard>
  </div>
</template>

<script>
import titleCard from './../../titleCard/index'
export default {
  components: {
    titleCard
  }
}
</script>

<style lang="scss" scoped>
.topInfo {
  display: flex;
  margin-top: 63px;
  margin-left: 12px;
  width: 1000px;
  .info-content {
    // padding: 53px 14px 3px 25px;
  }
  .info {
    display: flex;
    flex-wrap: wrap-reverse;
    padding: 54px 25px;
    padding-right: 0;
    li {
      display: flex;
      align-items: center;
      width: 233px;
      i {
        display: inline-block;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid red;
        margin-right: 17px;
        flex-shrink: 0;
      }
      span:first-child {
        font-size: 18px;
        color: #ffffff;
        margin-bottom: 5px;
        display: inline-block;
      }
      span:last-child {
        font-size: 40px;
        font-weight: bold;
        color: #26d6ff;
      }
    }
  }
  .charts {
  }
}
</style>