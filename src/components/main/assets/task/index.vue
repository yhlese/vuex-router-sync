<template>
  <div class="task">
    这是任务页面
  </div>
</template>
<script>
import { getList } from '@/api/task/index.js';
process.env.NODE_ENV === 'development' &&
  require('../../../../mockJs/task/index.js');
export default {
  methods: {
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
