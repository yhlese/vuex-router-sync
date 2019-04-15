<template>
  <div class="task">
    <p>动态事件名:</p>
    <el-input v-model="value"
              @[inputEvent]="doSomething"
              style="width:100px"
              placeholder="请输入内容"></el-input>
    <el-button @click="()=>{ this.inputEvent = 'focus'}"
               v-if="inputEvent === 'input'">切换事件为Input</el-button>
    <el-button @click="()=>{ this.inputEvent = 'input';}"
               v-else>切换事件为Focus</el-button>

    <div id="obj1"
         @click.self="doc">
      obj1
      <div id="obj2"
           @click="doc">
        obj2
        <div id="obj3"
             @click="doc">
          obj3
          <div id="obj4"
               @click="doc">
            obj4
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { getList } from '@/api/task/index.js';
process.env.NODE_ENV === 'development' &&
  require('../../../../mockJs/task/index.js');
export default {
  data() {
    return {
      value: '',
      // 动态事件名
      inputEvent: 'input'
    };
  },
  methods: {
    doc() {
      this.id = event.currentTarget.id;
      console.log(this.id);
    },
    // input执行事件
    doSomething() {
      console.log('val', this.value);
    },
    // mock数据获取
    async fetchData() {
      try {
        let data = await getList();
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
