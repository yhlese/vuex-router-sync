<template>
  <div class="asset">
    <main-router :route="ROUTER"></main-router>
  </div>
</template>
<script>
import MainRouter from '@/components/common/mainRouter';
import RouterConfig from '@/router/router.config.js';
export default {
  components: {
    MainRouter
  },
  data() {
    return {
      ROUTER: RouterConfig.Assets
    };
  }
};
</script>
