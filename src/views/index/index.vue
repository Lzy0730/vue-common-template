<template>
  <div class="test">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a
    praesentium dolorem hic dignissimos, totam eum illo beatae repudiandae eos
    aliquid veritatis, voluptas quam assumenda adipisci velit autem amet
    ipsum?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
    perferendis quod! Soluta labore rerum earum saepe nulla quo ex sapiente at
    aut eveniet dolores, accusamus sequi qui ducimus sed? Ducimus.
    <test-event @click="clickTest"></test-event>
  </div>
</template>

<script>
import TestEvent from "@/components/test.vue";
export default {
  components: { TestEvent },
  name: "Index",
  methods: {
    clickTest() {
      console.log(11111);
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  height: 1000px;
}
</style>
