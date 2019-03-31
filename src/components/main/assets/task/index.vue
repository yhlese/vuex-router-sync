<template>
  <div class="task">
    这是任务页面
  </div>
</template>
<script>
import { getList } from '@/api/task/index.js';

export default {
  methods: {
    async fetchData() {
      try {
        let data = await getList();
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
