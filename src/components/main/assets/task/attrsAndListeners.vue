<template>
  <!-- 子组件 -->
  <div>
    <chidrenProp v-bind="$attrs"
                 v-on="$listeners"></chidrenProp>
  </div>

</template>
<script>
import chidrenProp from "@/components/main/assets/task/childProps.vue";
export default {
  components: {
    chidrenProp
  },
  inheritAttrs: false
};
</script>
