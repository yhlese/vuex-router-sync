<template>
  <!-- 函数式组件 -->
  <div>
    <List :items="['Wonderwoman', 'Ironman']"
          :item-click="item => (clicked = item)" />
    <p>Clicked hero: {{ clicked }}</p>
  </div>
</template>
<script>
import List from "@/components/main/assets/task/functional/list.vue";

export default {
  name: "App",
  data: () => ({ clicked: "" }),
  components: {
    List
  }
};
</script>