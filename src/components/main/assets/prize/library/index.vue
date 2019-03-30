<template>
  <div class="library-index">
    <breadcrumb-nav :ROUTES='ROUTES'
                    belongTo='prizeLibrary'></breadcrumb-nav>
    <div class="price-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import BreadcrumbNav from '@/components/common/breadcrumbNav.vue';
import RouterConfig from '@/router/router.config.js';
export default {
  components: { BreadcrumbNav },
  data() {
    return {
      ROUTES: RouterConfig.Assets
    };
  }
};
</script>
<style lang="scss" scoped>
.price-content {
  margin-top: 20px;
}
</style>
