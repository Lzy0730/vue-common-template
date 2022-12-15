<template>
  <div
    class="vct-layout-column"
    :class="{
      fixed: fixedHeader,
      'no-tabs-bar': !showTabs,
    }"
  >
    <vct-column-bar />
    <div
      class="vct-main"
      :class="{
        'is-collapse-main': collapse,
      }"
    >
      <div
        class="vct-layout-header"
        :class="{
          'fixed-header': fixedHeader,
        }"
      >
        <vct-nav />
      </div>
      <vct-app-main />
    </div>
  </div>
</template>

<script>
export default {
  name: "VctLayoutColumn",
  props: {
    collapse: {
      type: Boolean,
      default() {
        return false;
      },
    },
    fixedHeader: {
      type: Boolean,
      default() {
        return true;
      },
    },
    showTabs: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.vct-layout-column {
  .vct-main {
    .fixed-header {
      left: $base-left-menu-width;
      width: $base-right-content-width;
    }
  }
}
</style>
