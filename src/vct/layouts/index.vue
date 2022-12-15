<template>
  <div class="vue-common-template-wrapper">
    <component
      :is="'vct-layout-' + theme.layout"
      :collapse="collapse"
      :show-tabs="theme.showTabs"
      :fixed-header="theme.fixedHeader"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Layouts",
  computed: {
    ...mapGetters({
      theme: "settings/theme",
      collapse: "settings/collapse",
    }),
  },
};
</script>

<style lang="scss" scoped>
.vue-common-template-wrapper {
  position: relative;
  width: 100%;
  height: 100%;

  [class*="vct-layout-"] {
    position: relative;

    :deep() {
      .vct-layout-header {
        box-shadow: $base-box-shadow;
      }
    }

    &.fixed {
      padding-top: $base-nav-height + $base-tabs-height;
    }

    &.fixed.no-tabs-bar {
      padding-top: $base-nav-height;
    }
  }

  :deep() {
    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: $base-z-index - 1;
      width: 100%;
    }
    .vct-main {
      position: relative;
      width: auto;
      min-height: 100%;
      margin-left: $base-left-menu-width;

      &.is-collapse-main {
        margin-left: $base-left-menu-width-min;

        .fixed-header {
          left: $base-left-menu-width-min;
          width: calc(100% - #{$base-left-menu-width-min});
        }
      }
    }
  }
}
</style>
