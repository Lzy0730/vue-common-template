<template>
  <div v-if="itemOrMenu.meta && itemOrMenu.meta.levelHidden">
    <template v-for="route in itemOrMenu.children">
      <vct-menu :key="route.path" :item="route" />
    </template>
  </div>
  <el-submenu
    v-else
    ref="subMenu"
    :index="itemOrMenu.path"
    :popper-append-to-body="false"
  >
    <template slot="title">
      <vct-icon
        v-if="itemOrMenu.meta && itemOrMenu.meta.icon"
        :icon="itemOrMenu.meta.icon"
        :is-custom-svg="itemOrMenu.meta.isCustomSvg"
        :title="itemOrMenu.meta.title"
      />
      <span :title="itemOrMenu.meta.title">
        {{ itemOrMenu.meta.title }}
      </span>
    </template>
    <slot />
  </el-submenu>
</template>

<script>
export default {
  name: "VctSubmenu",
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
