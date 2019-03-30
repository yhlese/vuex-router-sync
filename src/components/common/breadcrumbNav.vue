<template>
  <el-breadcrumb separator-class="el-icon-arrow-right"
                 class="breadcrumb-nav">
    <el-breadcrumb-item v-for="(item, index) in currentRoute"
                        :key="JSON.stringify(item)+index"
                        :to="{ path: item.path }">{{item.desc}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  props: {
    ROUTES: {
      type: Object,
      required: true
    },
    //belongTo： 是否是归属于同一个面包屑的关键字
    belongTo: {
      type: String,
      default: '',
      required: true
    }
  },
  computed: {
    currentRoute() {
      let routes = [];
      let currentPath = this.$store.state.route.path;
      for (let route in this.ROUTES) {
        if (this.ROUTES.hasOwnProperty(route)) {
          const item = this.ROUTES[route];
          // 当前要跳转的地址是否 属于同一个面包屑下面
          if (item.belongTo && item.belongTo === this.belongTo) {
            let path = item.path;
            if (currentPath.includes(path) && !routes.includes(item)) {
              routes.push(item);
            }
          }
        }
      }
      // 顺序排序
      return routes.sort((a, b) => {
        return a.level > b.level;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.breadcrumb-nav {
  height: 40px;
  font-size: 17px;
  border-bottom: solid 1px #ccc;
  line-height: 40px;
}
</style>

