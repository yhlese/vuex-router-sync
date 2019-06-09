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
    <!-- props 父组件 -->
    <chidrenProp placeholder="Enter your username"
                 name="姓名"></chidrenProp>
    <!-- 父组件：父组件和孙子组件的数据传递 -->
    <attrsListeners coo="这是父组件给孙子组件"
                    @fromGrandson="fromGrandson"></attrsListeners>
  </div>
</template>
<script>
import chidrenProp from "@/components/main/assets/task/props.vue";
import attrsListeners from "@/components/main/assets/task/attrsAndListeners.vue";

export default {
  props: ["title"],
  components: {
    chidrenProp,
    attrsListeners
  },
  inheritAttrs: false, //设置 inheritAttrs 为false 可以关闭自动挂载
  data() {
    return {
      slotInfo: {
        name: "这是slot里面的name"
      }
    };
  },
  methods: {
    fromGrandson() {
      console.log("父组件跳过子组件，收到了孙子组件发送的东西");
    }
  }
};
</script>
