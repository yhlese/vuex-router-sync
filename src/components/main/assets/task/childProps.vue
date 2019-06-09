<template>
  <!-- 孙子组件 -->
  <div>
    <p>coo:{{coo}}</p>
    <button @click="sendParent">我要给父组件发东西</button>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: ["coo"],
  methods: {
    sendParent() {
      this.$emit("fromGrandson");
    }
  }
};
</script>

