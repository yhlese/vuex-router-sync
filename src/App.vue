<template>
  <div id="app">
    <el-button type="primary">主要按钮</el-button>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}
</style>
