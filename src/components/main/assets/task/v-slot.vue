<template>
  <!-- v-slot -->
  <div class="v-slot">
    <header>
      这是标题：{{title}}
      <slot name="header"
            v-bind:slotInfo="slotInfo">
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  props: ["title"],
  inheritAttrs: false, //设置 inheritAttrs 为false 可以关闭自动挂载
  data() {
    return {
      slotInfo: {
        name: "这是slot里面的name"
      }
    };
  }
};
</script>
