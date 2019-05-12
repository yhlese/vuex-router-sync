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
    <!-- test: v-for 经常报warn:key值 -->
    <div v-for="(item,index) in warnForKeyList" :key="index">{{item}}-{{index}}</div>
    <!-- test: this.$set 添加多个属性 -->
    <el-button @click="setMore">添加多个属性</el-button> 
    <!-- test: v-slot -->
    <v-slots>
      <template v-slot:header="slotProps">
        <div>
          header-name：{{slotProps.slotInfo.name}}
        </div>
      </template>
      <p>main</p>
      <template v-slot:footer>
        <div>
          footer
        </div>
      </template>
      <p>copy</p>
    </v-slots>
  </div>
</template>
<script>
import { getList } from '@/api/task/index.js';
process.env.NODE_ENV === 'development' &&
  require('../../../../mockJs/task/index.js');
import VSlots from '@/components/main/assets/task/v-slot.vue'
export default {
  components:{
    VSlots
  },
  data() {
    return {
      value: '',
      // 动态事件名
      inputEvent: 'input',
      warnForKeyList:{
        a:'a',
        b:'b'
      }
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
    },
    // 给 data 添加新的值
    setMore(){
      // 添加多个
      this.warnForKeyList = Object.assign({},this.warnForKeyList,{
        age:12,
        sex:'男'
      })
      // 只添加一个属性 this.warnForKeyList.name = 'Liriye' 添加不成功的  
      this.$set(this.warnForKeyList,'name','Liriye')
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
