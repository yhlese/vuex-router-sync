<template>
  <table style="width:100%;"
         class="table">
    <thead>
      <th>
        <div>排行</div>
      </th>
      <th>
        <div>项目</div>
      </th>
      <th>
        <div>风险数</div>
      </th>
      <th>
        <div>风险率</div>
      </th>
    </thead>
    <tbody>
      <tr v-for="i in 6">
        <td align="center">
          <div>1</div>
        </td>
        <td align="center">
          <div class="">惠东弘城项目</div>
        </td>
        <td align="center">
          <div>176</div>
        </td>
        <td align="center">
          <div>24%</div>
        </td>
      </tr>
    </tbody>

  </table>

</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'
export default {
  setup() {
    const state = reactive()
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  th {
    text-align: center !important;
    vertical-align: middle;
    font-size: 21px;
    font-family: FZLTZHUNHK;
    font-weight: normal;
    color: #26d6ff;
    div {
      margin-bottom: 12px;
    }
  }
  tr {
    font-size: 21px;
    font-family: Lantinghei SC;
    font-weight: 200;
    color: #ffffff;
    td:first-child {
      div {
        color: #fd7a1dff;
      }
    }
    td:nth-of-type(2) {
      div {
        max-width: 170px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    td {
      div {
        margin-top: 14px;
        margin-bottom: 14px;
      }
    }
  }
}
</style>
