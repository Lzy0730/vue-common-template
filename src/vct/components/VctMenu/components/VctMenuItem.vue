<template>
  <el-menu-item :index="itemOrMenu.path">
    <vct-icon
      v-if="itemOrMenu.meta && itemOrMenu.meta.icon"
      :icon="itemOrMenu.meta.icon"
      :is-custom-svg="itemOrMenu.meta.isCustomSvg"
    />
    <span :title="itemOrMenu.meta.title">
      {{ itemOrMenu.meta.title }}
    </span>
  </el-menu-item>
</template>

<script>
export default {
  name: "VctMenuItem",
  props: {
    itemOrMenu: {
      type: Object,
      default() {
        return null;
      },
    },
  },
};
</script>

<style></style>
