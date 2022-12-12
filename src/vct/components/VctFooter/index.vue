<template>
  <footer class="vct-footer">
    Copyright
    <!-- <vab-icon icon="copyright-line" /> -->
    {{ fullYear }} Vct Footer
  </footer>
</template>

<script>
export default {
  name: "VctFooter",
  data() {
    return {
      fullYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
.vct-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  // padding: 0 $base-padding 0 $base-padding;
  color: rgba(0, 0, 0, 0.45);
  // background: $base-color-white;
  // border-top: 1px dashed $base-border-color;

  i {
    margin: 0 5px;
  }
}
</style>
