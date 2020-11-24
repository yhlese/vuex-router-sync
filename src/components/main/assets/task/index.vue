<template>
  <div class="task">
    <p>动态事件名:</p>
    <el-button @click="openFullScreen">全屏</el-button>
    <!-- video test -->
    <!-- <VideoPlay></VideoPlay> -->
    <PhotoPlay></PhotoPlay>
    <input v-model="value"
           @[inputEvent]="doSomething"
           style="width:100px"
           placeholder="请输入内容"
           v-formatNum:0="value" />
    <el-button @click="()=>{ this.inputEvent = 'focus'}"
               v-if="inputEvent === 'input'">切换事件为Input</el-button>
    <el-button @click="()=>{ this.inputEvent = 'input';}"
               v-else>切换事件为Focus</el-button>
    <!-- 修饰符 -->
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
    <!-- 1.test: v-for 经常报warn:key值 -->
    <div v-for="(item,index) in warnForKeyList"
         :key="index">{{item}}-{{index}}</div>
    <!-- 2.test: this.$set 添加多个属性 -->
    <el-button @click="setMore">添加多个属性</el-button>
    <!-- 3.test: v-slot -->
    <!-- 4.test：在子组件上没有通过props声明的属性，传给子组件时候默认自动挂载到组建的根元素上，通过在子组件上加上 inheritAttrs:false 防止挂载 -->
    <v-slots title="inherit"
             msg="测试inherit">
      <template v-slot:header="{slotInfo}">
        <div>
          header-name：{{slotInfo.name}}
        </div>
      </template>
      <p>
        <el-input v-model="info.val"
                  v-formatNum:2="info.val"></el-input>
      </p>
      <template v-slot:footer>
        <div>
          footer
        </div>
      </template>
      <p>copy</p>
    </v-slots>
    <!-- 7.test：函数式组件 -->
    <functional />

  </div>
</template>
<script>
import { getList } from '@/api/task/index.js';
process.env.NODE_ENV === 'development' &&
  require('../../../../mockJs/task/index.js');
import VSlots from '@/components/main/assets/task/v-slot.vue';
import Functional from '@/components/main/assets/task/functional/index.vue';
import VideoPlay from './component/videoPlay.vue';
import PhotoPlay from './component/photoPlay.vue';
import screenfull from 'screenfull';


export default {
  components: {
    VSlots,
    Functional,
    VideoPlay,
    PhotoPlay
  },
  data() {
    return {
      value: '',
      // 动态事件名
      inputEvent: 'input',
      warnForKeyList: {
        a: 'a',
        b: 'b'
      },
      info: {
        val: ''
      }
    };
  },
  methods: {
    openFullScreen(){
      screenfull.toggle()
    },
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
    setMore() {
      // 添加多个
      this.warnForKeyList = Object.assign({}, this.warnForKeyList, {
        age: 12,
        sex: '男'
      });
      // 只添加一个属性 this.warnForKeyList.name = 'Liriye' 添加不成功的
      this.$set(this.warnForKeyList, 'name', 'Liriye');
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
