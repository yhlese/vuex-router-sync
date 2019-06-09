<template functional>
  <!-- 子组件 -->
  <div>
    <p v-for="(item,key) in props.items"
       :key="key"
       @click="props.itemClick(item);">
      {{ item }}
    </p>
  </div>
</template>