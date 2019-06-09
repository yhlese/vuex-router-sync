<template>
  <!-- test：props -->
  <div>
    <input v-bind="$props">
    $props:{{$props}}
    <chidrenProp v-bind="$attrs"
                 v-on="$listeners"></chidrenProp>
  </div>

</template>
<script>
import chidrenProp from "@/components/main/assets/task/childProps.vue";
export default {
  props: ["placeholder"],
  components: {
    chidrenProp
  },
  // inheritAttrs: false,
  mounted() {
    console.log(this);
  }
};
</script>
