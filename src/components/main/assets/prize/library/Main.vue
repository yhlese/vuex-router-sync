<template>
  <div class="library-main">
    <el-button type="primary"
               size="medium"
               @click="addPrice"><i class="el-icon-plus el-icon--left"></i>新增</el-button>
    <Magnifier></Magnifier>
  </div>
</template>
<script>
import Magnifier from '@/components/common/magnifier/index.vue';
import RouterConfig from '@/router/router.config.js';
export default {
  components: {
    Magnifier
  },
  methods: {
    // 添加奖品
    addPrice() {
      this.$router.push(RouterConfig.Assets.PrizeLibraryAdd.path);
    }
  }
};
</script>
