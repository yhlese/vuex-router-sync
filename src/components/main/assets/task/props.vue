<template>
  <!-- props 子组件 -->
  <div>
    <!-- 1.props中有注册属性 $props-->
    <!-- good -->
    <input v-bind="$props">
    <!-- bad -->
    <input :name="name"
           :placeholder="placeholder">
    <!-- 2.props没有注册属性使用 $attrs ; 注意 $attrs 中只包含 props 中没有注册的属性 -->
    <!-- good -->
    <!-- <input v-bind="$attrs"> -->
    <!-- bad -->
    <!-- <input :name="$attrs['name']"
           :placeholder="$attrs['placeholder']"> -->
  </div>

</template>
<script>
export default {
  props: ["placeholder", "name"]
};
</script>
