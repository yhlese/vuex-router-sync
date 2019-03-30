<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu :default-active="defaultActive"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               :router="true"
               active-text-color="#ffd04b">
        <template v-for="item in ROUTES">
          <el-submenu v-if="item.children && item.children.length>0"
                      :key="JSON.stringify(item)"
                      :index="item.path">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.desc}}</span>
            </template>
            <el-menu-item v-for="(child,key) in item.children"
                          :key="key"
                          :index="ROUTES[child].path">{{ROUTES[child].desc}}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else-if="item.single"
                        :key="JSON.stringify(item)"
                        :index="item.path">{{item.desc}}</el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    ROUTES: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    defaultActive() {
      return this.$store.state.route.path;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" type="text/scss" scoped>
</style>
<style>
.el-menu-vertical-demo {
  overflow-y: auto;
  height: 100%;
  min-width: 202px;
}
</style>
