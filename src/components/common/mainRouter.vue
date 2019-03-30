<template>
  <div class="main-router">
    <left-menu class="menu"
               :ROUTES='route'></left-menu>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import LeftMenu from '@/components/common/LeftMenu.vue';
export default {
  components: {
    LeftMenu
  },
  props: ['route']
};
</script>
<style lang="scss" scoped>
.main-router {
  display: flex;
  justify-content: flex-start;
  padding-left: 220px;
  .menu {
    position: fixed;
    left: 0;
    width: 202px;
    top: 70px;
    bottom: 0;
    z-index: 100;
  }
  .content {
    width: 100%;
    min-height: 400px;
    margin: 0 20px;
  }
}
</style>
