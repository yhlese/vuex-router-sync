<template>
  <div class="hello">
    <div class="header">
      <span>logo</span>
      <div class="header-menu">
        <router-link :to="RouterConfig.Assets.Assets.path">资源管理</router-link>
        <router-link :to="RouterConfig.Member.MemberManager.path">会员管理</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import RouterConfig from '@/router/router.config.js';
export default {
  name: 'Index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      RouterConfig
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: #00a2ca;
  .header-menu {
    display: flex;
    border-left: solid 1px #007ba8;
    border-right: solid 1px #3bbce5;
    justify-content: space-between;
    align-items: center;
    a {
      border-right: solid 1px #007ba8;
      border-left: solid 1px #3bbce5;
      padding: 0 10px;
      color: #fff;
      display: block;
      height: 100%;
      line-height: 70px;
    }
  }
  .logo {
    display: block;
    line-height: 68px;
    color: #0cb8f5;
    font-weight: bold;
    font-size: 18px;
    img {
      vertical-align: middle;
    }
  }
}
</style>

