<template>
  <div class="vue-common-template-wrapper">
    <component :is="'vct-layout-' + theme.layout" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Layouts",
  computed: {
    ...mapGetters({
      theme: "settings/theme",
    }),
  },
};
</script>

<style lang="scss" scoped>
.vue-common-template-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
